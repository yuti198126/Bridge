import {Popup, PopupData, PopupDisplayTypes} from "../models/popups/Popup";
import WalletPack from "@walletpack/core";
import {store} from "../store/store";
import ExternalWallet, {ExternalWalletInterface} from "@walletpack/core/models/hardware/ExternalWallet";
import SocketService from "../services/wallets/SocketService";
import WalletTalk from "./WalletTalk";
import AppsService from '@walletpack/core/services/apps/AppsService'
import KeyPairService from '@walletpack/core/services/secure/KeyPairService'
import PopupService from "../services/utility/PopupService";
import WindowService from "../services/utility/WindowService";
import Network from '@walletpack/core/models/Network';
import SingularAccounts from "../services/utility/SingularAccounts";
import Popups from "./Popups";

let walletType;
export default class WalletHelpers {


	static getWalletType(){ return walletType; }

	static async init(isPopOut){

		if(!isPopOut) {
			const version = await window.wallet.getVersion();
			const [wtype, wver] = version.split('_');
			walletType = wtype;
		}

		const eventListener = async (type, data) => {
			if(type === 'popout') {
				const popup =  new Popup(PopupDisplayTypes.POP_OUT, new PopupData(data.type, data));

				if(!AppsService.appIsInLocalData(popup.data.props.payload.origin)) {
					await AppsService.getApps([popup.data.props.payload.origin]);
				}
				popup.data.props.appData = AppsService.getAppData(popup.data.props.payload.origin);
				popup.dimensions = {width:360, height:650};

				if(data.type === 'getOrRequestIdentity'){
					const networks = data.payload.fields.accounts.map(x => store.state.scatter.settings.networks.find(n => n.unique() === Network.fromJson(x).unique()));
					const accounts = SingularAccounts.accounts(networks).filter(x => !!x);
					if(!accounts.length){
						window.wallet.utility.flashWindow();
						const created = await new Promise(r => PopupService.push(Popups.noAccount(networks[0], x => r(x))));
						// If the user decided not to create an account, then we will simply fail out.
						if(!created) return {original:data, result:null};
						// Otherwise the user may now continue to log in.
					}
				}

				return await WindowService.openPopOut(popup);
			}

			//'firewalled', {actions:blacklisted, payload}
			// if(type === 'firewalled'){
			// 	PopupService.push(Popup.prompt(
			// 		'Whoa nelly!',
			// 		`An application tried to push a blacklisted action to your Scatter [ ${data.actions.join(',')} ]. Check your Firewall settings if this is a mistake.`
			// 	))
			// }

		};


		WalletPack.initialize(
			{
				blockchains:{
					EOSIO:'eos',
					ETH:'eth',
					TRX:'trx',
					BTC:'btc',
				},
				plugins:[
					require('@walletpack/eosio').default,
					require('@walletpack/ethereum').default,
					require('@walletpack/tron').default,
					require('@walletpack/bitcoin').default,
				]
			},
			store,
			{
				getSalt:window.wallet.getSalt,
				get:() => true,
				set:(seed) => true,
				clear:() => true,
			},
			{
				getVersion:() => require('../../package').version,
				pushNotification:window.wallet.utility.pushNotification,
			},
			eventListener,
			{
				socketService:SocketService,
				signer:async (network, publicKey, payload, arbitrary = false, isHash = false) => {
					let keypair = KeyPairService.getKeyPairFromPublicKey(publicKey);
					if(!keypair) return;

					let popup;
					if(keypair.external){
						// TODO: Need to re-implement!
						popup = Popups.checkHardwareWalletScreen();
						PopupService.push(popup);
					}

					const result = await window.wallet.sign(network, publicKey, payload, arbitrary, isHash);

					if(popup) PopupService.remove(popup);

					if(result && typeof result === 'object' && result.hasOwnProperty('error')){
						PopupService.push(Popups.snackbar(result.error))
					}

					return result;
				},
			}
		);

		ExternalWallet.loadWallets([
			{type:'LEDGER', name:'Ledger', wallet:() => { /* Handled by primary signer */ }}
		]);

		return true;
	}

}