/** USER ARRAY
 * Array where  the user's information will be saved. 
 * When using arrays in this application, the user information will only be saved temporarily.  You will have to use a database to store filed values for a longer period of time.
 * Once the page is refreshed, you will lose the information that was stored in the user array.
 */
const users = [];

/** DISPLAYS LOGIN BTN
 * This function displays the login button. After the user has registered, this function makes the login modal automatically appear.
 */
function displayLoginBtn() {

  // Captures the information from the login and register forms.
  let loginBtn = document.getElementById('login');
  let registerBtn = document.getElementById('register');

  // Changes the display from register to login.
  loginBtn.style.display = "block";
  registerBtn.style.display = "none";

}

/** LOGIN BUTTON
 * Controls login button and modal.
 */
function loginNavLink() {

  // Changes dynamic message to request the credentials of the user.
  document.getElementById('dynamicMessage').innerHTML = "Enter Your Credentials!";

  // Displays the login form.
  displayLoginForm();

}

/** DISPLAY LOGIN
 * Function to display the 'Log-in form'on the DOM for the user to enter their credentials
 */
function displayLoginForm() {

  // Save form IDs to variables.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');

  registerForm.style.display = "none";
  loginForm.style.display = "block";

}

/** REMOVE LOGIN
 * Function to remove login button from view 
 */
function removeLoginBtn() {

  // Save form IDs to a variable
  let registerbtn = document.getElementById('register');
  let loginBtn = document.getElementById('login');

  registerbtn.style.display = "none";
  loginBtn.style.display = "none";
}

/** REGISTER BUTTON
 * Function for the register button located in the main navigation of the page. 
 */
function registerNavLink() {

  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').style.display = "block";
  document.getElementById('dynamicMessage').innerHTML = "Please register your account!";

  // Function to display the Register form
  displayRegisterForm();

}

/** DISPLAY REGISTER
 * Function to display the register form so users can register their information into the array's table.
 */
function displayRegisterForm() {

  // Display register message.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');

  registerForm.style.display = "block";
  loginForm.style.display = "none";

}

/** REMOVE REGISTER
 * Function to display the register form so users can register their information into the array's table.
 */
function removeRegisterForm() {

  // Display register message.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');

  registerForm.style.display = "none";
  loginForm.style.display = " ";

}

/** DISPLAY DASHBOARD
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

/** DISPLAY DEPOSIT FORM
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function displayDepositForm() {

  // Capture form ID from DOM.
  let depositForm = document.getElementById('depositForm');

  // depositForm div is currently set to none which hides the element.
  // Change the display style to block so element is viewable.
  depositForm.style.display = "block";

  removePaymentForm();
  removeTransferForm();
  removeWithdrawalForm();
}

/**
 * Function to remove withdrawal display form.
 */
function removeDepositForm() {

  // Capture form ID from DOM.
  let depositForm = document.getElementById('depositForm');

  // depositForm div is currently set to block which displays the element.
  // change the display style to none so element is NOT viewable.
  depositForm.style.display = "none";
}

/**
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function displayWithdrawalForm() {

  // Capture form ID from DOM
  let withdrawalForm = document.getElementById('withdrawForm');

  // withdrawalForm div is currently set to none which hides the element.
  // Change the display style to block so element is viewable.
  withdrawalForm.style.display = "block";

  removeDepositForm();
  removePaymentForm();
  removeTransferForm();
}

/**
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function removeWithdrawalForm() {

  // Capture form ID from DOM.
  let withdrawalForm = document.getElementById('withdrawForm');

  // withdrawalForm div is currently set to block which displays the element.
  // change the display style to none so element is NOT viewable.
  withdrawalForm.style.display = "none";

}

/** DISPLAY TRANSFER FORM
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function displayTransferForm() {

  // Display register message
  let transferForm = document.getElementById('transferForm');

  transferForm.style.display = "block";

  removeDepositForm();
  removeWithdrawalForm();
  removePaymentForm();
}

/** REMOVE TRANSFER FORM
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function removeTransferForm() {
  let transferForm = document.getElementById('transferForm');

  transferForm.style.display = "none";
}

/** DISPLAY PAYMENT FORM
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function displayPaymentForm() {

  // Display register message
  let paymentForm = document.getElementById('paymentForm');

  paymentForm.style.display = "block";

  removeDepositForm();
  removeTransferForm();
  removeWithdrawalForm();
}

/** REMOVE PAYMENT FORM
 * Function to display the withdrawal form so users can withdraw from their accounts.
 */
function removePaymentForm() {
  let paymentForm = document.getElementById('paymentForm');

  paymentForm.style.display = "none";
}

/** DISPLAY LOGIN USER FORM
 * Function to log in user using the information they entered in the Users Array.
 * [ ] We need to add information for the users accounts.
 */
function loginUser() {

  // Capture the values from the form fields.
  let username = document.getElementById('username').value;
  let pin = document.getElementById('pin').value;

  // Loop through the Users Array to gain access to the object information.
  for (let i = 0; i < users.length; i++) {

    // Check to see if the username that was entered matches the username in the object.
    if (username === users[i].username) {

      // Console.log to show that the username and pin match.  SHOULD DELETE LATER.
      console.log(`CORRECT USERNAME: ${username} & ${users[i].username}`)

      // Check to see if the pin matches.
      if (pin === users[i].pin) {

        // Console.log to show that the pin is correct.  SHOULD DELETE LATER.
        console.log(`CORRECT PIN: ${pin} & ${users[i].pin}`)

        // Change Dyamic Message to WELCOME USER!!
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Welcome ${users[i].firstname} ${users[i].lastName}`;

        // Console.log to show the account is fully verified.  SHOULD DELETE LATER.
        console.log(`Account Verified for ${users[i]['firstName']} ${users[i].lastName}`)

        // Change Dyamic Message to welcome
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Welcome, ${users[i].firstName}!`;

        // Dispaly Checking Amount
        document.getElementById('checkingAmt').innerHTML = `$${users[i].checking}`;

        // Display Saving Amount
        document.getElementById('savingAmt').innerHTML = `$${users[i].saving}`;

        // Display Credit Amount
        document.getElementById('creditAmt').innerHTML = `$${users[i].credit}`;

        // Display Loan Amount
        document.getElementById('loanAmt').innerHTML = `$${users[i].loan}`;

        // Display Dashboard
        displayDashboard()

        // Remove the Log in and register btn.
        removeLoginBtn();

      } else {
        // Verify that the pin is correct.
        console.log(`INCORRECT PIN: ${pin} & ${users[i].pin}`)
      }

    } else {
      console.log(`INCORRECT USERNAME: ${username} & ${users[i].username}`)
      document.getElementById('dynamicMessage').style.display = "block";
      document.getElementById('dynamicMessage').innerHTML = `Incorrect Password!`;
    }

  }

  // Capture the values from the form fields.
  document.getElementById('username').value = '';
  document.getElementById('pin').value = '';


}

/** DISPLAY REGISTER USER
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
    "saving": saving,
    "credit": credit,
    "loan": loan
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

  // Modify the dynamic message.
  document.getElementById('dynamicMessage').style.display = "block";
  document.getElementById('dynamicMessage').innerHTML = "Please Log In!";

  // Remove register form
  removeRegisterForm();

  // Display Log in form
  displayLoginForm();

  // Display Log in Button
  displayLoginBtn();
}

/**
 * Function to transfer funds from one account to another account.
 */
function depositDashNavLink() {

  // Display transaction form
  displayDepositForm();

}

/**
 * Function to withdraw amount into one of the user's account.  Users should open account with at least 1 account active.
 */
function withdrawDashNavLink() {
  // Display transaction form
  displayWithdrawalForm();
}

/**
 * Function to transfer amount into one of the user's account.  Users should open account with at least 1 account active.
 */
function transferDashNavLink() {
  displayTransferForm();
}

/**
 * Function to payment amount into one of the user's account.  Users should open account with at least 1 account active.
 */
function paymentDashNavLink() {
  displayPaymentForm();
}

/** MATH FUNCTIONS
 * Functions that perform Math.
 */
function debit() {

  // Retrieve all accounts for logged in user.
  // Data from array must be in Number method.
  let checkingBalance = Number(users[0].checking);
  let savingBalance = Number(users[0].saving);

  // Retrieve input values
  let account = document.getElementById('depositIntoAccount').value;
  let depositAmt = Number(document.getElementById('depositAmt').value);

  document.getElementById('dynamicMessage').style.display = "none";

  // Created a switch to taking in account and perform the operations accordingly.
  switch (account) {

    // Checking Switch. If the account variable has a string value of checking, then perform the code under case until break point.
    case 'checking':

      // Perform the Math
      let newCheckingBal = checkingBalance + depositAmt;

      // Change the value of the checking account on table.
      users[0].checking = newCheckingBal;

      // Display Checking Amount
      document.getElementById('checkingAmt').innerHTML = `$ ${users[0].checking.toFixed(2)}`;

      // Remove Deposit Display from DOM
      removeDepositForm();

      // Test Checking Switch with console.table *******
      let checkingTotal = checkingBalance + depositAmt;
      console.table({
        "Balance": checkingBalance,
        "Deposit": depositAmt,
        "Total": checkingTotal
      });

      break;

    case 'saving':

      // Perform the Math
      let newSavingBal = savingBalance + depositAmt;

      // Change the value of the checking account on table.
      users[0].saving = newSavingBal;

      // Display Saving Amount
      document.getElementById('savingAmt').innerHTML = `$ ${users[0].saving.toFixed(2)}`;

      // Remove Deposit Display from DOM
      removeDepositForm();

      // Test Checking Switch with console.table *******
      let savingTotal = savingBalance + depositAmt;
      console.table({
        "Balance": savingBalance,
        "Deposit": depositAmt,
        "Total": savingTotal
      });
      break;

    default:
      break;
  }

  // Change Dynamic Message
  document.getElementById('dynamicMessage').style.display = "block";
  document.getElementById('dynamicMessage').innerHTML = `Successful Deposit!`;

}

function credit() {

  // Retrieve all accounts for logged in user.
  // Data from array must be in Number method.
  let checkingBalance = Number(users[0].checking);
  let savingBalance = Number(users[0].saving);
  let creditBalance = Number(users[0].credit);
  let loanBalance = Number(users[0].loan);

  let a = "1"

  // Retrieve input values
  let account = document.getElementById('withdrawFromAccount').value;
  let withdrawAmt = Number(document.getElementById('withdrawAmt').value);

  document.getElementById('dynamicMessage').style.display = "none";
  let creditScore = document.getElementById('creditScore').value;

  // Created a switch to taking in account and perform the operations accordingly.
  switch (account) {

    // Checking Switch.  If the account variable has a string value of checking, then perform the code under case until break point.
    case 'checking':

      if (withdrawAmt > 500) {

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You may not withdraw more than $500! Try again!`;
        count--;
        break;
      } else {

        // Perform the Math
        let newCheckingBal = checkingBalance - withdrawAmt;

        // Change the value of the checking account on table.
        users[0].checking = newCheckingBal;

        // Display Checking Amount
        document.getElementById('checkingAmt').innerHTML = `$ ${users[0].checking.toFixed(2)}`;

        // Remove Withdraw Display from DOM
        removeWithdrawalForm();

        // Test Checking Switch with console.table *******
        let checkingTotal = checkingBalance - withdrawAmt;
        console.table({
          "Balance": checkingBalance,
          "Withdraw": withdrawAmt,
          "Total": checkingTotal
        });
        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Withdrawal!`;
        break;
      }


    case 'saving':

      // Perform the Math
      let newSavingBal = savingBalance - withdrawAmt;

      if (withdrawAmt > 500) {

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You may not withdraw more than $500! Try again!`;
        count--;
        break;
      } else {

        // Change the value of the checking account on table.
        users[0].saving = newSavingBal;

        // Display Saving Amount
        document.getElementById('savingAmt').innerHTML = `$ ${users[0].saving.toFixed(2)}`;

        // Remove Withdraw Display from DOM
        removeWithdrawalForm();

        // Test Checking Switch with console.table *******
        let savingTotal = savingBalance - withdrawAmt;
        console.table({
          "Balance": savingBalance,
          "Withdraw": withdrawAmt,
          "Total": savingTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Withdrawal!`;
        break;
      }


    case 'credit':

      // Perform the Math
      let newCreditBal = creditBalance - withdrawAmt;

      if (!creditScore) {

        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You need atleast 680 credit to take out cash advances!`;
        count--;
        break;

      } else if (creditScore < 680) {

        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You need atleast 680 credit to take out cash advances!`;
        count--;
        break;

      } else if (withdrawAmt > 500) {

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You may not withdraw more than $500! Try again!`;
        count--;
        break;

      } else {
        // Change the value of he checking account on table.
        users[0].credit = newCreditBal;

        // Display Saving Amount
        document.getElementById('creditAmt').innerHTML = `$ ${users[0].credit.toFixed(2)}`;

        // Remove Withdraw Display from DOM
        removeWithdrawalForm();

        // Test Checking Switch with console.table *******
        let creditTotal = creditBalance - withdrawAmt;
        console.table({
          "Balance": creditBalance,
          "Withdraw": withdrawAmt,
          "Total": creditTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Withdrawal!`;
        break;
      }

    case 'loan':

      // Perform the Math
      let newLoanBal = loanBalance - withdrawAmt;

      if (withdrawAmt > 500) {

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You may not withdraw more than $500! Try again!`;
        count--;
        break;
      } else {

        // Change the value of he checking account on table.
        users[0].loan = newLoanBal;

        // Display Saving Amount
        document.getElementById('loanAmt').innerHTML = `$ ${users[0].loan.toFixed(2)}`;

        // Remove Deposit Display from DOM
        removeDepositForm();

        // Test Checking Switch with console.table *******
        let loanTotal = loanBalance + withdrawAmt;
        console.table({
          "Balance": loanBalance,
          "Withdraw": withdrawAmt,
          "Total": loanTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Withdrawal!`;
        break;
      }
    default:
      break;
  }

}

function transfer() {
  // Retrieve all accounts for logged in user.
  // Data from array must be in Number method.
  let checkingBalance = Number(users[0].checking);
  let savingBalance = Number(users[0].saving);
  let creditBalance = Number(users[0].credit);
  let loanBalance = Number(users[0].loan);

  // Retrieve input values
  let account1 = document.getElementById('transferTo').value;
  let account2 = document.getElementById('transferFrom').value;
  let transferAmt = Number(document.getElementById('transferAmt').value);

  document.getElementById('dynamicMessage').style.display = "none";

  // Created a switch to taking in account and perform the operations accordingly.
  switch (account2) {

    // Checking Switch.  If the account variable has a string value of checking, then perform the code under case until break point.
    case 'checking':

      // Perform the Math
      let newCheckingBal = checkingBalance - transferAmt;

        // Change the value of the checking account on table.
        users[0].checking = newCheckingBal;

        // Display Checking Amount
        document.getElementById('checkingAmt').innerHTML = `$ ${users[0].checking.toFixed(2)}`;

        // Remove Withdraw Display from DOM
        removeTransferForm();

        // Test Checking Switch with console.table *******
        let checkingTotal = checkingBalance - transferAmt;
        console.table({
          "Balance": checkingBalance,
          "Withdraw": transferAmt,
          "Total": checkingTotal
        });
        break;

    case 'saving':

      // Perform the Math
      let newSavingBal = savingBalance - transferAmt;

        // Change the value of the checking account on table.
        users[0].saving = newSavingBal;

        // Display Saving Amount
        document.getElementById('savingAmt').innerHTML = `$ ${users[0].saving.toFixed(2)}`;

        // Remove Withdraw Display from DOM
        removeTransferForm();

        // Test Checking Switch with console.table *******
        let savingTotal = savingBalance - transferAmt;
        console.table({
          "Balance": savingBalance,
          "Withdraw": transferAmt,
          "Total": savingTotal
        });
        break;

    case 'credit':

      // Perform the Math
      let newCreditBal = creditBalance - transferAmt;

        // Change the value of he checking account on table.
        users[0].credit = newCreditBal;

        // Display Saving Amount
        document.getElementById('creditAmt').innerHTML = `$ ${users[0].credit.toFixed(2)}`;

        // Remove Withdraw Display from DOM
        removeTransferForm();

        // Test Checking Switch with console.table *******
        let creditTotal = creditBalance - transferAmt;
        console.table({
          "Balance": creditBalance,
          "Withdraw": transferAmt,
          "Total": creditTotal
        });
        break;

    case 'loan':

      // Perform the Math
      let newLoanBal = loanBalance - transferAmt;

      // Change the value of he checking account on table.
      users[0].loan = newLoanBal;

      // Display Saving Amount
      document.getElementById('loanAmt').innerHTML = `$ ${users[0].loan.toFixed(2)}`;

      // Remove Deposit Display from DOM
      removeTransferForm();

      // Test Checking Switch with console.table *******
      let loanTotal = loanBalance - transferAmt;
      console.table({
        "Balance": loanBalance,
        "Deposit": transferAmt,
        "Total": loanTotal
      });
      break;

    default:
      break;
  }

  // Created a switch to taking in account and perform the operations accordingly.
  switch (account1) {

    // Checking Switch. If the account variable has a string value of checking, then perform the code under case until break point.
    case 'checking':

      // Perform the Math
      let newCheckingBal = checkingBalance + transferAmt;

        // Change the value of the checking account on table.
        users[0].checking = newCheckingBal;

        // Display Checking Amount
        document.getElementById('checkingAmt').innerHTML = `$ ${users[0].checking.toFixed(2)}`;

        // Test Checking Switch with console.table *******
        let checkingTotal = checkingBalance + transferAmt;
        console.table({
          "Balance": checkingBalance,
          "Deposit": transferAmt,
          "Total": checkingTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Transfer!`;
        break;

    case 'saving':

      // Perform the Math
      let newSavingBal = savingBalance + transferAmt;

        // Change the value of the checking account on table.
        users[0].saving = newSavingBal;

        // Display Saving Amount
        document.getElementById('savingAmt').innerHTML = `$ ${users[0].saving.toFixed(2)}`;

        // Test Checking Switch with console.table *******
        let savingTotal = savingBalance + transferAmt;
        console.table({
          "Balance": savingBalance,
          "Deposit": transferAmt,
          "Total": savingTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Transfer!`;
        break;

    case 'credit':

      // Perform the Math
      let newCreditBal = creditBalance + transferAmt;

        // Change the value of he checking account on table.
        users[0].credit = newCreditBal;

        // Display Saving Amount
        document.getElementById('creditAmt').innerHTML = `$ ${users[0].credit.toFixed(2)}`;

        // Test Checking Switch with console.table *******
        let creditTotal = creditBalance + transferAmt;
        console.table({
          "Balance": creditBalance,
          "Deposit": transferAmt,
          "Total": creditTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Transfer!`;
        break;

    case 'loan':

      // Perform the Math
      let newLoanBal = loanBalance + transferAmt;

        // Change the value of he checking account on table.
        users[0].loan = newLoanBal;

        // Display Saving Amount
        document.getElementById('loanAmt').innerHTML = `$ ${users[0].loan.toFixed(2)}`;

        // Test Checking Switch with console.table *******
        let loanTotal = loanBalance + transferAmt;
        console.table({
          "Balance": loanBalance,
          "Deposit": transferAmt,
          "Total": loanTotal
        });

        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Transfer!`;
        break;

    default:
      break;
  }

}

/**
 * Controls the credit card and loan payments. Basically the same as the deposit function but for debt.
 */
function payment() {

  // Retrieve all accounts for logged in user.
  // Data from array must be in Number method.
  let creditBalance = Number(users[0].credit);
  let loanBalance = Number(users[0].loan);

  // Retrieve input values
  let account = document.getElementById('getPaymentTo').value;
  let paymentAmt = Number(document.getElementById('paymentAmt').value);

  document.getElementById('dynamicMessage').style.display = "none";
  // Created a switch to taking in account and perform the operations accordingly.
  switch (account) {
    case 'credit':

      // Perform the Math
      let newCreditBal = creditBalance + paymentAmt;

      if (newCreditBal > 0) {
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You may not overpay your credit card debts! Try again!`;
        count--;
        break;
      } else {

        // Change the value of he checking account on table.
        users[0].credit = newCreditBal;

        // Display Saving Amount
        document.getElementById('creditAmt').innerHTML = `$ ${users[0].credit.toFixed(2)}`;


        // Remove Deposit Display from DOM
        removePaymentForm();

        // Test Checking Switch with console.table *******
        let creditTotal = creditBalance + paymentAmt;
        console.table({
          "Balance": creditBalance,
          "Payment": paymentAmt,
          "Total": creditTotal
        });
        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Credit Payment!`;
        break;
      }

    case 'loan':

      // Perform the Math
      let newLoanBal = loanBalance + paymentAmt;

      if (newLoanBal > 0) {
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `You may not overpay your loan debts! Try again!`;
        count--;
      } else {

        // Change the value of he checking account on table.
        users[0].loan = newLoanBal;

        // Display Saving Amount
        document.getElementById('loanAmt').innerHTML = `$ ${users[0].loan.toFixed(2)}`;

        // Remove Deposit Display from DOM
        removePaymentForm();

        // Test Checking Switch with console.table *******
        let loanTotal = loanBalance + paymentAmt;
        console.table({
          "Balance": loanBalance,
          "Payment": paymentAmt,
          "Total": loanTotal
        });
        // Change Dynamic Message
        document.getElementById('dynamicMessage').style.display = "block";
        document.getElementById('dynamicMessage').innerHTML = `Successful Loan Payment!`;
      }
      break;

    default:
      break;
  }
  paymentForm.style.display = "none";
}
var count = 1;
function showClicks() {
  document.getElementById("documentButtonPresses").innerHTML = count++;
  buttonCount.style.display = "block";
}

//function to limit transactions
function calculateTransactions() {
  var clicks = document.getElementById('documentButtonPresses').innerHTML;
  if (clicks > 10) {
    dynamicMessage.style.display = "none";
    dashboard.style.display = "none";
    buttonCount.style.display = "none";

    goodbyeUser.style.display = "block";
    reload.style.display = "block"
  }
}

//function to reload page
function reloadPage() {
  location.reload();
}