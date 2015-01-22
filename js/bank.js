
function BankAccount(number, type){
	var self = this;

	self.type = type;
	self.number = number;

	var balance = (Math.random()*100) * (Math.random()*100) ;

	self.getBalance = function(){
		return balance;
	}

	self.deposit = function(money){
		balance += money;
		return money + " was deposited."
	}

	self.withdrawl = function(money){
		if (money > self.balance){
			return "Insufficient Funds"
		}
		else{
			balance -= money;
			return money + " was withdrawn."
		}
	}

} // BankAccount() end




function Console(id, desktop, records){
	var self = this;
	var records = records;

	self.id = id;
    

	// instatiate two accounts

	var accounts = {};

	// Element Ids
	var input_box_id = self.id+'input_box';
	var balance_display_id = self.id+'balance_display';
	var net_worth_display_id = self.id+'net_worth_display';
	var account_selector_id = self.id+'account_selector';
	var deposit_withdrawl_selector_id = self.id+'deposit_withdrawl_selector';
	var submit_button_id = self.id+'submit_button';



	// DOM Elements
	var input_box = $('<input />').attr({
		'id' 	: 	input_box_id,
		'type'	: 	'number'
		})

	var balance_display = $('<span />').attr({
		'id'	: 	balance_display_id
		});

	var net_worth_display = $('<span />').attr({
		'id'	: 	net_worth_display_id
		});

	var account_selector = 	$('<select />')
		.attr('id', account_selector_id).append($('<option />').text('Select Account:').attr('id',self.id+'temp'));
	
	var deposit_withdrawl_selector = $('<select />')
		.attr('id', deposit_withdrawl_selector_id).append($('<option />').text('Deposit').val('deposit')).append($('<option />').text('Withdrawl').val('withdrawl'));

	var submit_button = $('<button />').text('Submit').attr('id',submit_button_id);


	// methods
	function loadAllRecords(records){
		for (var account_number in records) {
  			accounts[account_number] = new BankAccount(account_number, records[account_number]);
		}
	}


	function loadAccount(val){
		updateBalanceDisplay(accounts[val].getBalance().toLocaleString("en", {style: "currency", currency: "CAD", maximumFractionDigits: 2}));
	}

	// Updates the balance displayed on the page
	function updateBalanceDisplay(amount){
		balance_display.text(amount);
	}

	function getNetWorth(accounts){
		var netWorth = 0;
		for (var account in accounts){
			var a = accounts[account];
			netWorth += a.getBalance();
		}
		return netWorth;
	}

	function updateNetWorthDisplay(accounts){
		net_worth_display.text(getNetWorth(accounts).toLocaleString("en", {style: "currency", currency: "CAD", maximumFractionDigits: 2}));
	}

	// takes an object full of BankAccounts and created <option> elements in the account_selection ddl
	function setAccountOption(accounts){
		for (var account in accounts){
			var a = accounts[account];
			var option = $('<option />').attr('id',self.id+a.number+a.type).text(a.type+" - Acct. "+a.number).val(a.number);
			account_selector.append(option);
		}

	}

	// append elements to page
	function createDomElements() {
		loadAllRecords(records);
		setAccountOption(accounts);
		desktop.append('<label>Account: </label>').append(account_selector).append('<br />');
		desktop.append('<label>Action: &nbsp;&nbsp;&nbsp;</label>').append(deposit_withdrawl_selector).append('<br />');
		desktop.append('<label>Amount: </label>').append(input_box).append('<br />');
		desktop.append('<label>Balance: </label>').append(balance_display).append('<br />');
		desktop.append('<label>Net Worth: </label>').append(net_worth_display).append('<br />');
		desktop.append(submit_button)
		

	}

	// This adds the JS bindings to the elements on the page
	function bindDomElements(){
		$("#"+input_box_id).click(function(){
			;;
		});

		$("#"+account_selector_id).change(function(val){
			loadAccount($(this).val());	
			updateNetWorthDisplay(accounts);
			$(this).children('#'+self.id+'temp').remove();
		});
	}

	// This creates the Console object and performs all the JS bindings to make the app functional
	self.boot = function(){
		createDomElements();
		bindDomElements();
	}

} // Console() end


var records = {333: "Savings",
		444: "Chequing",
		555: "TFSA" 
	};


var console = new Console('kjnfehjbe',$("#desktop"), records);
console.boot();





