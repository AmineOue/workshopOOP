/* 
objec
*/

let user = {
    firstName: 'osama',
    lastName: 'Elzero',

    getFullName: function () {
        return `Full Name: ${user.firstName} ${user.lastName}`
    }
};

console.log(user.firstName);
console.log(user['firstName']);
console.log(user.getFullName())
