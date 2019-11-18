// Write your solution in this file!

customerName = 'bob';


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

bestCustomer = undefined;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(msg) {
  bestCustomer = msg;
}

function changeLeastFavoriteCustomer() {
  return 'Assignment to constant variable.';
}

const leastFavoriteCustomer = undefined;

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "hello";
}
