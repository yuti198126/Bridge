<template>
	<section>

		<section class="fader" :class="{'show':showFader}">

			<section :key="popIn.data.type" class="pop-ins" v-for="(popIn,i) in popIns">
				<section class="overlay">
					<figure class="bg-holder">
						<section class="pop-in-over">
							<figure @click="close()" class="bg" v-if="i === popIns.length-1"></figure>
							<AddCreditCard          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'addCreditCard'" />
							<CreateEosAccount       class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'createEosAccount'" />
							<NoAccount              class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'noAccount'" />
							<Exchange               class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'exchange'" />
							<Savings                class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'savings'" />
							<Transfer               class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'transfer'" />
							<TransferStable         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'transferStable'" />
							<RequestStable          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'requestStable'" />
							<BuyWithCard            class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'buyTokens'" />
							<EnterPassword          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'getPassword'" />
							<TwoFactor              class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'twoFactorAuth'" />
							<ConvertKeypair         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'convertKeypair'" />
							<CheckHardware          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'checkHardwareWalletScreen'" />
							<ChangeIdentityKey      class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'changeIdentityKey'" />
							<ViewAppRatings         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'viewAppRatings'" />
							<ImportMnemonic         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'importMnemonic'" />
							<ExportMnemonic         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'exportMnemonic'" />
							<ManageIdentity         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'manageIdentity'" />
							<ScanQR                 class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'scanQR'" />
							<EnterSecurityCode      class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'enterSecurityCode'" />
							<Stabilize              class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'stabilize'" />
							<SelectList             class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'selectList'" />
							<GetInput               class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'getInput'" />
							<DiscardTokens          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'discardTokens'" />
							<GoPremium              class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'goPremium'" />
							<EditNetworkAccount     class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'editNetworkAccount'" />
							<Receive                class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'receive'" />
							<ReceiveIdentity        class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'receiveIdentity'" />
							<FriendsList            class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'friendsList'" />
							<AddOrEditNetwork       class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'addOrEditNetwork'" />
							<ExportPrivateKey       class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'exportPrivateKey'" />
							<ShowTerms              class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'showTerms'" />
							<MoveRidlTokens         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'moveRidlTokens'" />
							<ManageFioAddresses     class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'manageFioAddresses'" />
							<ShowFioRequests        class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'showFioRequests'" />
							<RequestFioTokens       class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'requestFioTokens'" />
							<MoonpayCode            class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'moonpayCode'" />
							<Moonpay                class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'moonpay'" />
							<AllowRestrictedApps    class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'allowRestrictedApps'" />
							<AllowPopups            class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'allowPopups'" />
							<TransactionSuccess     class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'transactionSuccess'" />
							<ResetScatter           class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'resetScatter'" />
							<DeleteKeypair          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'confirmDeleteKeypair'" />
							<DeleteHistory          class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'confirmDeleteHistory'" />
							<ManageNetworks         class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'manageNetworks'" />
							<ManageKeys             class="popin" :popin="popIn" :closer="closer(popIn)" v-if="popIn.data.type === 'manageKeys'" />
						</section>
					</figure>
				</section>
			</section>

		</section>

		<section class="snackbar-holder" :class="{'has-snackbar':snackbars.length}">
			<transition-group name="snackbar-transition">
				<Snackbar :popup="popup" v-for="popup in snackbars" :key="popup.id" />
			</transition-group>
		</section>



	</section>
</template>

<script>
	import {RouteNames} from '../vue/Routing'
	import { mapActions, mapGetters, mapState } from 'vuex'
	import * as Actions from '../store/ui_actions';
	import {PopupDisplayTypes} from '../models/popups/Popup'

	import Snackbar from '../components/popups/Snackbar';


	export default {
		components:{
			AllowPopups:() => import('../components/popups/AllowPopups'),
			AddOrEditNetwork:() => import('../components/popups/AddOrEditNetwork'),
			AddCreditCard:() => import('../components/popups/AddCreditCard'),
			CreateEosAccount:() => import('../components/popups/CreateEosAccount'),
			NoAccount:() => import('../components/popups/NoAccount'),
			Exchange:() => import('../components/popups/Exchange'),
			Savings:() => import('../components/popups/Savings'),
			DiscardTokens:() => import('../components/popups/DiscardTokens'),
			Transfer:() => import('../components/popups/Transfer'),
			TransferStable:() => import('../components/popups/TransferStable'),
			RequestStable:() => import('../components/popups/RequestStable'),
			GoPremium:() => import('../components/popups/GoPremium'),
			ConvertKeypair:() => import('../components/popups/ConvertKeypair'),
			FriendsList:() => import('../components/popups/FriendsList'),
			BuyWithCard:() => import('../components/popups/BuyWithCard'),
			ManageIdentity:() => import('../components/popups/ManageIdentity'),
			ImportMnemonic:() => import('../components/popups/ImportMnemonic'),
			ExportMnemonic:() => import('../components/popups/ExportMnemonic'),
			EnterPassword:() => import('../components/popups/EnterPassword'),
			ManageNetworks:() => import('../components/popups/ManageNetworks'),
			ManageKeys:() => import('../components/popups/ManageKeys'),
			TwoFactor:() => import('../components/popups/TwoFactor'),
			ScanQR:() => import('../components/popups/ScanQR'),
			ExportPrivateKey:() => import('../components/popups/ExportPrivateKey'),
			EnterSecurityCode:() => import('../components/popups/EnterSecurityCode'),
			EditNetworkAccount:() => import('../components/popups/EditNetworkAccount'),
			TransactionSuccess:() => import('../components/popups/TransactionSuccess'),
			MoveRidlTokens:() => import('../components/popups/MoveRidlTokens'),
			ManageFioAddresses:() => import('../components/popups/fio/ManageFioAddresses'),
			ShowFioRequests:() => import('../components/popups/fio/ShowFioRequests'),
			RequestFioTokens:() => import('../components/popups/fio/RequestFioTokens'),
			ChangeIdentityKey:() => import('../components/popups/ChangeIdentityKey'),
			CheckHardware:() => import('../components/popups/CheckHardware'),
			ViewAppRatings:() => import('../components/popups/ViewAppRatings'),
			Receive:() => import('../components/popups/Receive'),
			ReceiveIdentity:() => import('../components/popups/ReceiveIdentity'),
			ResetScatter:() => import('../components/popups/ResetScatter'),
			Stabilize:() => import('../components/popups/Stabilize'),
			SelectList:() => import('../components/popups/SelectList'),
			GetInput:() => import('../components/popups/GetInput'),
			DeleteKeypair:() => import('../components/popups/DeleteKeypair'),
			DeleteHistory:() => import('../components/popups/DeleteHistory'),
			ShowTerms:() => import('../components/popups/ShowTerms'),
			MoonpayCode:() => import('../components/popups/special/MoonpayCode'),
			AllowRestrictedApps:() => import('../components/popups/special/AllowRestrictedApps'),
			Moonpay:() => import('../views/popouts/widgets/Moonpay'),
			Snackbar,
		},
		data(){ return {
			popupDisplayTypes:PopupDisplayTypes,
		}},
		computed:{
			...mapState([
				'popups'
			]),
			...mapGetters([
				'popIns',
				'nextPopIn',
				'snackbars',
			]),
			showFader(){
				return this.nextPopIn && this.nextPopIn.displayType === PopupDisplayTypes.POP_IN
			}
		},
		methods:{
			clickedFader(){
				if(this.nextPopIn) {
					if(this.nextPopIn.hasOwnProperty('data') && typeof this.nextPopIn.data.callback === 'function') this.nextPopIn.data.callback(null);
					this[Actions.RELEASE_POPUP](this.popIns[this.popIns.length - 1]);
				}
			},

			closer(popup){
				return (result = null) => {
					if(popup.hasOwnProperty('data') && typeof popup.data.callback === 'function') popup.data.callback(result);
					this[Actions.RELEASE_POPUP](popup);
				}
			},

			close(){
				this.closer(this.nextPopIn)(null);
			},

			...mapActions([
				Actions.RELEASE_POPUP
			])
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	@import "../styles/variables";

	.snackbar-holder {
		position:fixed;
		bottom:0;
		right:0;
		left:0;
		text-align:center;
		z-index:21001;
		pointer-events:none;
		margin:20px;
	}



	.snackbar-transition-leave-active {
		animation: snackbar-out 0.2s ease forwards;
	}
	.snackbar-transition-enter-active {
		animation: snackbar-in 0.3s ease forwards;
	}

	@keyframes snackbar-in {
		0% { transform: translateY(40px); }
		60% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}

	@keyframes snackbar-out {
		0% { transform: translateY(0px); }
		60% { transform: translateY(-20px); }
		100% { transform: translateY(40px); }
	}







	.pop-in-over {
		position:fixed;
		top:40px;
		bottom:40px;
		left:0;
		right:0;

		display:flex;
		justify-content: center;
		align-items: center;
	}

	.fader {

		display: flex;
		justify-content: center;
		align-items: center;

		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		opacity:0;
		visibility: hidden;

		z-index:10001;

		transition:all 0s ease;
		transition-property: opacity, visibility;

		.bg {
			position:fixed;
			top:0;
			bottom:0;
			left:0;
			right:0;
			background: rgba(0, 0, 0, 0.73);
			z-index: -1;
		}

		&.show {
			opacity:1;
			visibility: visible;
			transition:all 0.2s ease;
		}
	}

	.popin {
		background:$light;
		border-radius:10px;
		margin:0 20px;
		display:flex;
		max-height:calc(100vh - 80px);
		flex-direction: column;
		overflow:hidden;
		text-align:center;

		margin-top:200%;

		animation: popinslide 0.2s forwards;

		@keyframes popinslide {
			0% { margin-top:200%; }
			100% { margin-top:0; }
		}

		.closer {
			height:30px;
			text-align:right;
			padding:0 10px;
			display:flex;
			align-items: center;
			justify-content: flex-end;
			border-bottom:1px solid rgba(0,0,0,0.1);

			i {
				cursor: pointer;
				width:30px;
				height:30px;
				display:flex;
				align-items: center;
				justify-content: flex-end;
			}
		}

		.popin-container {
			height: 100%;
			display: flex;
			flex-direction: column;
			overflow-y:auto;
			overflow-x:hidden;
		}

		.popup-head {
			padding:40px 40px 20px 40px;
			border-bottom:1px solid rgba($blue, 0.24);
			display:flex;
			flex-direction:row;
			width:100%;
			position: relative;
			justify-content:space-between;

			&.blue-back {
				background:$blue-gradient !important;
				padding:30px 40px;
				text-align:center;
				display:block;
				color:white;

				.title {
					font-size: $font-size-large;
					font-weight: bold;
				}

				.sub-title {
					font-size: $font-size-tiny;
				}
			}
		}

		.popup-content {
			flex:1;
			padding:40px;
			overflow-y:auto;
			overflow-x:hidden;
			position: relative;

			.title {
				font-size: $font-size-large;
				line-height:32px;
				margin-bottom:20px;

				span {
					color:$blue;
					font-weight: bold;
				}
			}

			.sub-title {
				font-size: $font-size-medium;
				margin-top:30px;
				position: relative;
				z-index: 2;
				color:$grey;

				transition:all 0.5s ease;
				transition-property: margin-top;
				transition-delay: 0.2s;

				&.no-margin {
					margin-top:0;
					transition-delay: 0s;
				}

				&.smaller {
					font-size: 11px;
					color:$blue;
					margin-bottom:-10px;
				}
			}
		}

		.popup-buttons {
			flex:0 0 auto;
			background:rgba(0,0,0,0.02);
			margin:0 -40px 0;
			padding:20px 60px 20px;
			position: relative;

			display:flex;
			justify-content: space-between;

			button {
				flex:1;

				&:first-child {
					margin-right:5px;
				}

				&:last-child {
					margin-left:5px;
				}
			}
		}

	}

	.blue-steel {
		.popin {
			background:$dark;

			.popup-head {
				border-bottom:1px solid rgba($blue, 0.24);
				background:rgba(0,0,0,0.1);
			}

			.popup-buttons {
				border-top:1px solid transparent;
				background:rgba(0,0,0,0.1);
			}
		}

		.fader {
			.bg {
				background: rgba(0,0,0,0.9);
			}
		}
	}

	.mobile {
		.fader {
			transition: none;
		}

		.popin {
			position:fixed !important;
			top:0;
			bottom:0;
			left:0;
			right:0;
			max-height:none;
			max-width:none !important;
			width:100% !important;
			border-radius:0;

			margin:0;
			animation: none;

			.popup-content {
				max-height:none !important;

				.title {
					font-size: 24px;
				}

				.sub-title {
					font-size: 16px;

					&.smaller {
						font-size: 11px;
						font-weight: bold;
					}
				}
			}
		}
	}

</style>
