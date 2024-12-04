// Call method is used to call a function while passing the refernce to that function. 
// Can be used for function borrowing

// Let's say we have an object
const person = {
    firstname: "Rashita",
    lastname: "Mehta",
    getFullName: function(){
        console.log(this.firstname + " " + this.lastname);
    }
}

person.getFullName(); // Rashita Mehta

const person2 = {
    firstname: "Shubham",
    lastname: "Mehta",
}

// Now let's say we want to borrow `getFullName` function from the person object,
// We will simply call that function while passing the new reference to `this` to that function

// Function Borrowing using the `call()` method
person.getFullName.call(person2); // Shubham Mehta

// Now, usually reusable functions are extracted out
var getFullNameAndDetail = function(state, country){
    console.log(this.firstname + " " + this.lastname + " from " + state + ", " + country);
}
// Now we can call this function bym passing any number of argumanets, 
// remember while using call function, the first argument remains `this` and then series of pther arguments can be passed

getFullNameAndDetail.call(person2, "Punjab", "India"); // Shubham Mehta from Punjab, India
getFullNameAndDetail.call(person, "Maharashtra", "India"); // Rashita Mehta from Maharashtra, India


// CALL POLLYFILL

Function.prototype.myCall = function(context, ...args){
    // context has person2
    // `this` in this function is the fn to be called with the context - getFullNameAndDetail

    // person2.getFullNameAndDetail(...args) this is what we want
    context.myFunc = this;
    context.myFunc(...args);

}

getFullNameAndDetail.myCall(person2, "Punjab", "India"); // Shubham Mehta from Punjab, India


// The only difference between call and apply is the way args are passed
// args are sent as an array in apply function, like this -> 
// getFullNameAndDetail.apply(person2, ["Punjab", "India"]);