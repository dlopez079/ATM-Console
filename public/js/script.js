/**
 * USER NANAGMENT
 * Array where users information will be saved. 
 * When using arrays, the user information will only be saved temporarily.  You will have to use a database to store filed values for a longer period of time.
 * Once your refresh the page, you will lose the information that was stored in the below array.
 */
const users = [];

/**
 * Function for the login button.
 */
function loginNavLink() {

  // Change Dyamic Message to welcome the user
  document.getElementById('dynamicMessage').innerHTML = "Enter Your Credentials!";

  // Function to display the login form.
  displayLoginForm();

}

/**
 * Function to display the 'Log-in form'on the DOM for the user to enter their credentials
 */
function displayLoginForm() { 

  // Save form IDs to a variable.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');
  
  registerForm.style.display = "none";
  loginForm.style.display = "block";

}

/**
 * Function for the register button located in the main navigation of the page. 
 */
function registerNavLink() {
  
  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').innerHTML = "Please register your account!";

  // Function to display the Register form
  displayRegisterForm();

}

/**
 * Function to display the register form so users can register their information into the array's table.
 */
function displayRegisterForm() {

  // Display register message.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');
  
  registerForm.style.display = "block";
  loginForm.style.display = "none";

}

/**
 * Function to display the dashboard on the screen.
 * You should only display the dashboard after the user is authenticated or logged in.
 */
function displayDashboard() {

  // Save form IDs to a variable.
  let dashboard = document.getElementById('dashboard');
  let loginForm = document.getElementById('loginForm');
  
  loginForm.style.display = "none";
  dashboard.style.display = "block";
}

/**
 * Function to display the deposit form so users can register their information into the array's table.
 */
 function displayDepositForm() {

  // Display register message.
  let dashboard = document.getElementById('dashboard');
  let depositForm = document.getElementById('depositForm');
  
  depositForm.style.display = "block";
  dashboard.style.display = "none";

}

/**
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
 function displayDepositForm() {

  // Display register message.
 
  let depositForm = document.getElementById('depositForm');
  
  depositForm.style.display = "block";
  

}

function removeDepositForm() {
  let depositForm = document.getElementById('depositForm');
  
  depositForm.style.display = "none";
}

/**
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
 function displayWithdawalForm() {

  // Display register message.
  let dashboard = document.getElementById('dashboard');
  let withdrawalForm = document.getElementById('withdrawalForm');
  
  withdrawalForm.style.display = "block";
  dashboard.style.display = "none";

}


/**
 * Function to log in user using the information they entered in the Users Array.
 * [ ] We need to add information for the users accounts.
 */
function loginUser() {

  // Capture the values from the form fields.
  let username = document.getElementById('username').value;
  let pin = document.getElementById('pin').value;
  
  // Loop through the Users Array to gain access to the object information.
  for(let i=0; i < users.length; i++) {

    // Check to see if the username that was entered matches the username in the object.
    if(username === users[i].username) {

      // Console.log to show that the username and pin match.  SHOULD DELETE LATER.
      console.log(`CORRECT USERNAME: ${username} & ${users[i].username}`)

        // Check to see if the pin matches.
        if(pin === users[i].pin) {
        
        // Console.log to show that the pin is correct.  SHOULD DELETE LATER.
        console.log(`CORRECT PIN: ${pin} & ${users[i].pin}`)

        // Change Dyamic Message to WELCOME USER!!
        document.getElementById('dynamicMessage').innerHTML = `Welcome ${users[i].firstname} ${users[i].lastName}`;
        
        // Console.log to show the account is fully verified.  SHOULD DELETE LATER.
        console.log(`Account Verified for ${users[i]['firstName']} ${users[i].lastName}`)

        // Change Dyamic Message to welcome
        document.getElementById('dynamicMessage').innerHTML = `Welcome ${users[i].firstName}!`;

        // Dispaly Checking Amount
        document.getElementById('checkingAmt').innerHTML = `$${users[i].checking}`;

        // Display Saving Amount
        document.getElementById('savingAmt').innerHTML = `$${users[i].saving}`;

        // Display Credit Amount
        document.getElementById('creditAmt').innerHTML = `$${users[i].credit}`;

        // Display Loan Amount
        document.getElementById('loanAmt').innerHTML = `$${users[i].loan}`;


        // *****
        // Replace Log in button with Log out btn.NEEDS TO BE WORKED ON.
        displayDashboard()

        // *****
        // Display Users Accounts and balances with displayAccounts function  NEEDS TO BE WORKED ON. 
        // INSERT A FUNCTION TO THAT WILL DISPLAY ACCOUNTS.!!!!!!
        // *****
      } else {
        // Verify that the pin is correct.
        console.log(`INCORRECT PIN: ${pin} & ${users[i].pin}`)
      }

    } else {
      console.log(`INCORRECT USERNAME: ${username} & ${users[i].username}`)
      document.getElementById('dynamicMessage').innerHTML = `Incorrect Password!`;
    }
    
  }

  // Capture the values from the form fields.
  document.getElementById('username').value = '';
  document.getElementById('pin').value='';

  
}

/**
 * Funtion to register or save user information into the Users Array
 */
function registerUser() {
  
  // Capture the values from the form fields.
  // Add if statement for number values so it's always float (number).
  // Add javascript function to remote white space.
  let firstName = document.getElementById('getFirstName').value;
  let lastName = document.getElementById('getLastName').value;
  let username = document.getElementById('getUsername').value;
  let pin = document.getElementById('getPin').value;
  let checking = document.getElementById('getChecking').value;
  let saving = document.getElementById('getSaving').value;
  let credit = document.getElementById('getCredit').value;
  let loan = document.getElementById('getLoan').value;
  
  // Add user to Users Object
  let user = {
    "firstName": firstName,
    "lastName": lastName,
    "username": username,
    "pin": pin,
    "checking": checking,
    "saving" : saving,
    "credit" : credit,
    "loan" : loan
  }

  // Push User Information into array.
  users.push(user);

  // Confirm that users are saved to temp array.
  console.table(users);

  // Reset the values of the form fields.
  document.getElementById('getFirstName').value = '';
  document.getElementById('getLastName').value = '';
  document.getElementById('getUsername').value = '';
  document.getElementById('getPin').value = '';
  document.getElementById('getChecking').value = '0.00';
  document.getElementById('getSaving').value = '0.00';
  document.getElementById('getCredit').value = '0.00';
  document.getElementById('getLoan').value = '0.00';
}


/**
 * ACCOUNT NANAGMENT
 * When using arrays, the user information will only be saved temporarily.  You will have to use a database to store filed values for a longer period of time.
 * Once your refresh the page, you will lose the information that was stored in the below array.
 */


/**
 * Function to transfer funds from one account to another account.
 */
function depositDashNavLink() {

  // Display transaction form
  displayDepositForm();

  
}

function deposit() {
  // Retrieve all accounts for logged in user.
  let checkingBalance = users[0].checking;
  let savingBalance = users[0].saving;
  let creditBalance = users[0].credit;
  let loanBalance = users[0].loan;

  // Retrieve input values
  let account = document.getElementById('depositFormAccount').value;
  let depositAmt = document.getElementById('depositAmt').value;
  
  console.log(account);
  console.log(depositAmt);
  console.log(typeOf(checkingBalance));

  // Created a switch to taking in account and perform the operations accordingly.
  switch (account) {
    case 'checking':

      // Perform the Math
      let newCheckingBal = depositAmt + checkingBalance;

      // Display Checking Amount
      users[0].checking = newCheckingBal;

      // Display Saving Amount
      document.getElementById('checkingAmt').innerHTML = `$${users[0].checking}`;
      break;

    case 'saving':
      let newSavingBal = depositAmt + savingBalance;

      // Display Saving Amount
      document.getElementById('savingAmt').innerHTML = `$${newSavingBal}`;
      break;

    case 'credit':
      let newCreditBal = depositAmt + creditBalance;

      // Display Credit Amount
      document.getElementById('creditAmt').innerHTML = `$${newCreditBal}`;
      break;

    case 'loan':
      let newLoanBal = depositAmt + loanBalance;

      // Display Loan Amount
      document.getElementById('loanAmt').innerHTML = `$${newLoanBal}`;
      break;
  
    default:
      break;
  }
  
  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').innerHTML = `Successful Deposit!`;
  
}
/**
 * Function to withdraw ammount into one of the user's account.  Users should open account with at least 1 account active.
 */
function withdrawDashNavLink() {
  // Retrieve Balance
  let currentBalance = accounts[0].balance;

  let withdraw = parseInt(document.getElementById("withdrawAmt").value);

  // 1000.00 + 100.00
  let newBalance = currentBalance - withdraw;
  console.log(newBalance)

  // Change Balance
  accounts[0].balance = newBalance;
  console.table(accounts);

  document.getElementById('balanceAmt').innerHTML = newBalance;
  document.getElementById("withdrawAmt").value = "";
}

/**
 * Function to transfer ammount into one of the user's account.  Users should open account with at least 1 account active.
 */
 function transferDashNavLink() {
  // Retrieve Balance
  let currentBalance = accounts[0].balance;

  let withdraw = parseInt(document.getElementById("withdrawAmt").value);

  // 1000.00 + 100.00
  let newBalance = currentBalance - withdraw;
  console.log(newBalance)

  // Change Balance
  accounts[0].balance = newBalance;
  console.table(accounts);

  document.getElementById('balanceAmt').innerHTML = newBalance;
  document.getElementById("withdrawAmt").value = "";
}