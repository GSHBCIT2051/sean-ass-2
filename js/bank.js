
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

}



function Console(id, desktop){
	var self = this;

	self.id = id;

	var chequing = new BankAccount('Chequing',111);
	var savings = new BankAccount('Savings',222);
	
	var input_box = $('<input />').attr({
		'id' 	: 	self.id+'input_box',
		'type'	: 	'number'
		}).click(function(){
			alert();
		});

	var balance_display = $('<span />').attr({
		'id'	: 	self.id+'balance_display'
		});

	var account_selector = 	$('<select />')
		.attr('id',self.id+'account_selector')
		.append($('<option />').attr('id',self.id+'option_1'))
		.append($('<option />').attr('id',self.id+'option_2'))
		.select(function{
			loadAccount($(this).val());	
		});
	
	function loadAccount(val){
		alert(val);
	}

	function updateBalanceDisplay(amount){
		balance_display.text(amount);
	}

	function setAccountOptions(acct1, acct2){
		alert(acct1.type);
		$("#"+self.id+'option_1').text(acct1.type+" - Acct."+acct1.number).val(acct1.type);
		$("#"+self.id+'option_2').text(acct2.type+" - Acct."+acct2.number).val(acct2.type);

	}

	self.boot = function() {
		desktop.append(account_selector);
		desktop.append('<br />');
		desktop.append(input_box);
		desktop.append('<br />');
		desktop.append(balance_display);
		setAccountOptions(chequing, savings);
	}

}




var b = new BankAccount('chequing', 1735683);
console.log(b.getBalance());
c(b.deposit(1000000));
c(b.getBalance());
c(b.withdrawl(1000000));
c(b.getBalance());

// boot up the account windows

var console = new Console('kjnfehjbe',$("#desktop"));
console.boot();


//load the account data




