Vue.component('quick-links', {

	props: ['title'],

	template: `

		<div class="quick-links has-text-centered">

			<h3 class="title is-2 is-hidden-touch">{{ title }}</h3>
			<h3 class="title is-4 is-hidden-desktop">{{ title }}</h3>

			<div class="tile is-ancestor">
				<div class="tile is-vertical">
					<div class="tile is-horizontal">
						<div class="tile is-parent is-vertical">
							<a class="tile is-child" id="feature">
								<span class="icon" id="feature-icon">
									<img src="assets/imgs/phone.svg">
								</span>
								<p class="subtitle">Buy Airtime</p>
							</a>
						</div>
						<div class="tile is-parent is-vertical">
							<a class="tile is-child" id="feature">
								<span class="icon" id="feature-icon">
									<img src="assets/imgs/signal-bars.svg">
								</span>
								<p class="subtitle">Buy Data</p>
							</a>
						</div>
					</div>
					<div class="tile is-horizontal">
						<div class="tile is-parent is-vertical">
							<a class="tile is-child" id="feature">
								<span class="icon" id="feature-icon">
									<img src="assets/imgs/tv.svg">
								</span>
								<p class="subtitle">Pay TV</p>
							</a>
						</div>
						<div class="tile is-parent is-vertical">
							<a class="tile is-child" id="feature">
								<span class="icon" id="feature-icon">
									<img src="assets/imgs/bulb.svg">
								</span>
								<p class="subtitle">Electricity</p>
							</a>
						</div>
					</div>
					<div class="tile is-horizontal">
						<div class="tile is-parent is-vertical">
							<a class="tile is-child" id="feature">
								<span class="icon" id="feature-icon">
									<img src="assets/imgs/bank.svg">
								</span>
								<p class="subtitle">Money Transfer</p>
							</a>
						</div>
						<div class="tile is-parent is-vertical">
							<a class="tile is-child" id="feature">
								<span class="icon" id="feature-icon">
									<img src="assets/imgs/education.svg">
								</span>
								<p class="subtitle">Education</p>
							</a>
						</div>
					</div>
				</div>
			</div>

		</div>

	`

});

Vue.component('login', {

	props: ['title'],

	template: `
	
		<div class="login">
									
			<h3 class="title is-2 is-hidden-touch">{{ title }}</h3>
			<h3 class="title is-4 is-hidden-desktop">{{ title }}</h3>

			<form>
				
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="email" placeholder="Email">
						<span class="icon is-small is-left">
							<i class="fa fa-envelope"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="password" placeholder="Password">
						<span class="icon is-small is-left">
							<i class="fa fa-lock"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control">
						<button class="button is-success is-medium">
							Login
						</button>
					</p>
				</div>

			</form>

		</div>

	`

});

Vue.component('sign-up', {

	props: ['title'],

	template: `

		<div class="sign-up">
									
			<h3 class="title is-2 is-hidden-touch">{{ title }}</h3>
			<h3 class="title is-4 is-hidden-desktop">{{ title }}</h3>

			<form>
				
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="text" placeholder="Name">
						<span class="icon is-small is-left">
							<i class="fa fa-user-circle"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="phone" placeholder="Mobile Number">
						<span class="icon is-small is-left">
							<i class="fa fa-phone"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="email" placeholder="Email">
						<span class="icon is-small is-left">
							<i class="fa fa-envelope"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="password" placeholder="Password">
						<span class="icon is-small is-left">
							<i class="fa fa-lock"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control has-icons-left">
						<input class="input" type="password" placeholder="Retype Password">
						<span class="icon is-small is-left">
							<i class="fa fa-lock"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control">
						<button class="button is-info is-medium">
							Sign Up
						</button>
					</p>
				</div>

			</form>

		</div>

	`

});

Vue.component('buy-airtime', {

	props: ['title'],

	template: `

		<div class="buy-airtime">
									
			<h3 class="title is-2 is-hidden-touch has-text-centered">{{ title }}</h3>
			<h3 class="title is-4 is-hidden-desktop has-text-centered">{{ title }}</h3>

			<form>
				
				<div class="field">
					<label class="label">Network</label>
					<p class="control has-icons-left">
						<span class="select is-fullwidth">
							<select>
								<option>Select Provider</option>
								<option>MTN</option>
							</select>
						</span>
						<span class="icon is-small is-left">
							<i class="fa fa-wifi"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<label class="label is-left">Mobile Number <span>*</span></label>
					<p class="control has-icons-left">
						<input class="input" type="text" placeholder="Mobile Number">
						<span class="icon is-small is-left">
							<i class="fa fa-phone"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<label class="label is-left">Amount <span>*</span></label>
					<p class="control has-icons-left">
						<input class="input" type="number" placeholder="Amount">
						<span class="icon is-small is-left">
							<i class="fa fa-money"></i>
						</span>
					</p>
				</div>
				<div class="field">
					<p class="control">
						<button class="button is-primary is-medium is-outlined">
							Buy Now
						</button>
					</p>
				</div>

			</form>

		</div>

	`

});

let app = new Vue({

	el: '#root',

	data: {

		showMobileMenu: false,
		showLogin: false,
		showQuickLinks: true,
		showSignUp: false,
		showBuyAirtime: false

	},

	methods: {

		showLoginForm() {

			this.showLogin = true;
			this.showQuickLinks = false;
			this.showSignUp = false;
			this.showMobileMenu = false;

		},

		showQuickActions() {

			this.showLogin = false;
			this.showQuickLinks = true;
			this.showSignUp = false;
			this.showMobileMenu = false;

		},

		showSignUpForm() {

			this.showLogin = false;
			this.showQuickLinks = false;
			this.showSignUp = true;
			this.showMobileMenu = false;

		}

	}

});