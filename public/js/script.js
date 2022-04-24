/* 
Fetch the users data located on a JSON file within the same folder as this javascript file.  Normally, JSON files are used for configurrations rather than data but we are going to use to use for data since we don't have much data to work with.  This fetch file will only work if your application is running on a local develoment server like "Live Server". 
https://www.w3schools.com/js/js_api_fetch.asp
*/
fetch('./users.json')
.then(function(resp) {
  console.log(resp);
})
.then(function(data) {
  // console.log(data);
});

// fetch('./accounts.json')
// .then(function(resp) {
//   return resp.json();
// })
// .then(function(data) {
//   console.log(data.accounts);
//   const accounts = data.accounts;
// });

const users = [];
const userJSON = JSON.stringify(users, null, 3);
// console.log(userJSON);

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

// Display Accounts Dashboard
function displayDashboard() {

  // Save form IDs to a variable.
  let dashboard = document.getElementById('dashboard');
  let loginForm = document.getElementById('loginForm');
  
  loginForm.style.display = "none";
  dashboard.style.display = "block";
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
  let pin = document.getElementById('pin').value;
  
  // Loop through the Users Array to gain access to the object information.
  for(let i=0; i < users.length; i++) {

    // Check to see if the username that was entered matches the username in the object.
    if(username === users[i].username) {

      // Console.log to show that the username and pin match.  SHOULD DELETE LATER.
      console.log(`USERNAME AND PIN MATCH: ${username} & ${users[i].username} and ${pin} & ${users[i].pin}`)

      // Check to see if the pin matches.
      if(pin === users[i].pin) {
      
      // Console.log to show that the pin is correct.  SHOULD DELETE LATER.
      console.log(`CORRECT PIN: ${pin} & ${users[i].pin}`)

      // Change Dyamic Message to welcome
      document.getElementById('dynamicMessage').innerHTML = `Welcome ${users[i]['firstName']} ${users[i].lastName}`;
      
      // Console.log to show the account is fully verified.  SHOULD DELETE LATER.
      console.log(`Account Verified for ${users[i]['firstName']} ${users[i].lastName}`)

      // Change Dyamic Message to welcome
      document.getElementById('dynamicMessage').innerHTML = `Welcome ${users[i].firstName}!`;
      

      // *****
      // Remove Login div.  NEEDS TO BE WORKED ON.
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
      document.getElementById('dynamicMessage').innerHTML = `Incorrect Password!`;
    }
    
  }

  // Capture the values from the form fields.
  document.getElementById('username').value = '';
  document.getElementById('pin').value='';

  
}

// Create function to add users to JSON.
function registerUser() {
  
  // Capture the values from the form fields.
  let firstName = document.getElementById('getFirstName').value;
  let lastName = document.getElementById('getLastName').value;
  let username = document.getElementById('getUsername').value;
  let pin = document.getElementById('getPin').value;
  
  // Add user to Users Object
  let user = {
    "firstName": firstName,
    "lastName": lastName,
    "username": username,
    "pin": pin
  }

  // Push User Information into array.
  users.push(user);

  console.table(users);

  document.getElementById('getFirstName').value = '';
  document.getElementById('getLastName').value = '';
  document.getElementById('getUsername').value = '';
  document.getElementById('getPin').value = '';
}













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
