
// DOM Properties
//outerBox 	// bounding box for account window

function c(val){
	console.log(val);
}

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
	var account_selector_id = self.id+'account_selector';



	// DOM Elements
	var input_box = $('<input />').attr({
		'id' 	: 	input_box_id,
		'type'	: 	'number'
		})

	var balance_display = $('<span />').attr({
		'id'	: 	balance_display_id
		});

	var account_selector = 	$('<select />')
		.attr('id', account_selector_id).append($('<option />').text('Select Account:'));
	

	

	// methods

	function loadAllRecords(records){
		for (var account_number in records) {
  			accounts[account_number] = new BankAccount(account_number, records[account_number]);
		}
	}

	function loadAccount(val){
		alert(accounts[val].getBalance());
	}

	function updateBalanceDisplay(amount){
		balance_display.text(amount);
	}

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
		desktop.append(account_selector);
		desktop.append('<br />');
		desktop.append(input_box);
		desktop.append('<br />');
		desktop.append(balance_display);

	}

	function bindDomElements(){
		$("#"+input_box_id).click(function(){
			;;
		});

		$("#"+account_selector_id).change(function(val){
			loadAccount($(this).val());	
		});
	}

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





