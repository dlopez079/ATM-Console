const path = require("path");
const fs = require("fs");

// Create a function for register
function loginNavLink() {

  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').innerHTML = "Enter Your Credentials!";
  displayLoginForm();

}

// Create a function for Login
function registerNavLink() {
  
  // Change Dyamic Message to welcome
  document.getElementById('dynamicMessage').innerHTML = "Please register your account!";
  displayRegisterForm();

}

// Display Register Form 
function displayRegisterForm() {
  // Display register message.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');
  
  registerForm.style.display = "block";
  loginForm.style.display = "none";

}

// Display Login Form
function displayLoginForm() { 

  // Save form IDs to a variable.
  let registerForm = document.getElementById('registerForm');
  let loginForm = document.getElementById('loginForm');
  
  registerForm.style.display = "none";
  loginForm.style.display = "block";

}

// Submit Button for JSON
function submit() {

  // Save Value of input fields from form.
  // let id =+ 1;
  

  // Check Credentials against JSON Arrays.
  // loop through json object to see if the user exists.

  // Display the Users json.
  
}

// Create function to add users to JSON.
function loginUser() {

  // Capture the values from the form fields.
  let username = document.getElementById('username').value;
  
  console.log(username)
   
  // If user does not exist, ask them to register.
  // if(username != users.username) {
  //   // Change Dyamic Message to welcome
  //   document.getElementById('dynamicMessage').innerHTML = "Check Spelling or register your account!";
  //   displayRegisterForm();
  // }
  // else check user pin.

}








// Create function to add users to JSON.
function registerUser() {

  // Capture the values from the form fields.
  let firstName = document.getElementById('getFirstName').value;
  let lastName = document.getElementById('getLastName').value;
  let username = document.getElementById('getUsername').value;
  let pin = document.getElementById('getPin').value;
  
  console.log(firstName + lastName + username + pin);
  
  // Retreive Users JSON.
  fs.readFile(path.join(__dirname, '../json', 'users.json'), 'utf8', (err,data) => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log(data); // Verify that I can pull the data.  
  });

}

module.exports = registerUser;











function transfer() {
  // Retrieve all accounts for logged in user.

  // Select the "FROM" account.

  // Select the "TO" account.

  // Save Transfer Amount from DOM.
  let transferAmount = document.getElementById('transferAmount').value

  // Retreive the balance of the "FROM" account and subtract the amount you want to transfer.

  // Retreive the balance of the "TO" account and add the amount you want to transfer.
}




function depositAmount() {
  // Retrieve Balance
  // Loop through the table
  let currentBalance = accounts[0].balance;

  let deposit = parseInt(document.getElementById("depositAmt").value);

  // 1000.00 + 100.00
  let newBalance = currentBalance + deposit;
  console.log(newBalance)

  // Change Balance
  accounts[0].balance = newBalance;
  console.table(accounts);

  document.getElementById('balanceAmt').innerHTML = newBalance;
  document.getElementById("depositAmt").value = "";
}

function withdrawAmount() {
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
