var customerName = 'bob';
const leastFavoriteCustomer = "test";

function upperCaseCustomerName(){
    customerName = "BOB";
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "test1";
}

// describe('upperCaseCustomerName()', function() {
//     it('modifies the customerName variable', function() {
//       expect(window.customerName).to.equal('bob');

//       upperCaseCustomerName();

//       expect(window.customerName).to.equal('BOB');
//     });
//   });