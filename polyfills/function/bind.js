// The difference between `apply, call` and `bind` is that bind function binds the function to the context and args, 
// it doesnt call the function, it instead returns a copy of the function with the context and args bound to it, which can be used later

const person = {
    firstname: "Rachel",
    lastname: "Green"
}

function getFullNameAndDetails(state, country){
    console.log(this.firstname + " " + this.lastname + " from " + state + " " + country)
}
const boundFunction = getFullNameAndDetails.bind(person, "Punjab", "India");
console.log(boundFunction); // [Function: bound getFullNameAndDetails]
boundFunction(); // Rachel Green from Punjab India

// BIND POLYFILL
Function.prototype.myBind = function(context, ...args){
    // we want person.thisFunc(args)
    context = context || globalThis;
    context.getFullNameAndDetails = this;
    return (...newArgs) => getFullNameAndDetails.call(context, ...args, ...newArgs);
}

const myBoundFunction = getFullNameAndDetails.myBind(person, "Maharashtra", "India");
console.log(boundFunction); // [Function: bound getFullNameAndDetails]
myBoundFunction(); // Rachel Green from Maharashtra India