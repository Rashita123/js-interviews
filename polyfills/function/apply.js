// Apply is just like cancelIdleCallback, except that args are sent as array while using `apply``
// Refer to cancelIdleCallback.js file first

const person = {
    firstname: "Rachel",
    lastname: "Green"
}

function getFullNameAndDetails(state, country){
    console.log(this.firstname + " " + this.lastname + " from " + state + " " + country)
}
getFullNameAndDetails.call(person, "Punjab", "India"); // Rachel Green from Punjab India
// getFullNameAndDetails.apply(person, "Punjab", "India"); // Error = CreateListFromArrayLike called on non-object
getFullNameAndDetails.apply(person, ["Punjab", "India"]); // Rachel Green from Punjab India


// APPLY POLYFILL

Function.prototype.myApply = function(context, argsArray){
    // we want context.getFullNameAndDetails(...argsArray) 
    context.funcToCall = this;
    context.funcToCall(...argsArray);
}
getFullNameAndDetails.myApply(person, ["Punjab", "India"]); // Rachel Green from Punjab India
