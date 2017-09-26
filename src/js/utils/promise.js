
module.exports = {

    promise: function (fn) { 
        console.log("starting with start function: ", fn );

        var state = 'pending';
        var deferred;
        var value;
    
        //Then is exposed function, following are all of its support functions
        //   resolve - actually resolves the promises when the target function does its stuff
        //   handle - checks the state, if pending, wait for the resolve function to execute
        
        function resolve(newValue) {

            console.log("Our resolution is here: ", newValue );
            // capture are new value/data and set state to resolved
            value = newValue;
            state = "resolved";

            if (deferred) {
				console.log("Defered - Waiting for result: ", deferred );
				handle(deferred);
			}//end if
        } 

        function handle(targetFunction) {
            console.log('handle our Goodie: ', targetFunction );
            console.log('current state: ', state );

            // our only goal here is to see if the state is pending, if it is we chill
            if(state === 'pending') {
                console.log("Looks like our current state is pending");
                //if pending we defer our function for another round
                deferred = targetFunction;
                return;
            }

        // if its not, onResolved will carry our target function and once we know the promise is resolved 
        // we can go ahead and execute it with whatever the final value is 
	     targetFunction(value);
       }//end handle function
           
        // The Then  function is the only exposed function. It relies on a handler to determine
        //  state
        this.then = function (targetFunction) {
            handle(targetFunction);
        }//end then
    
    // This is the crux.. the 'resolve', if, for any reason we cannot reach this point if 
    //  ( state = "pending") this will not fire. However, when we do reach this line of 
    // execution we simply execute our final function and we're good
        fn(resolve);
   
    }//end promise function


}// end module export