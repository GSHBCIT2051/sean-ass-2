
// DOM Properties
//outerBox 	// bounding box for account window

function c(val){
	console.log(val);
}

function BankAccount(type, number){
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


function Console(id, desktop, accounts){
	var self = this;

	self.id = id;
	
	// instatiate two accounts
	var chequing = new BankAccount('Chequing',111);
	var savings = new BankAccount('Savings',222);
	
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
		.attr('id', account_selector_id).append('<option />');
		
	

	// methods
	function loadAccount(val){
		alert(val);
	}

	function updateBalanceDisplay(amount){
		balance_display.text(amount);
	}
	function setAccountOption(acct){
		var option = $('<option />').attr('id',self.id+acct.number+acct.type).text(acct.type+" - Acct."+acct.number).val(acct.type+acct.number);
		account_selector.append(option);
		

	}

	// append elements to page
	function createDomElements() {
		setAccountOption(chequing);
		setAccountOption(savings);
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
		$("#"+account_selector_id).change(function(){
			loadAccount($(this).val());	
		});
	}

	self.boot = function(){
		createDomElements();
		bindDomElements();
	}

} // Console() end



var console = new Console('kjnfehjbe',$("#desktop"));
console.boot();





