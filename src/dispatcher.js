
export function Dispatcher(){ // function constructor 

    this._lastID = 0; // a property called 'lastID' set it to zero , 
                      // its like a db auto number so that every function that the
                      // dispatcher is going to run gets its own unique id, 
                      // since js is single threaded assign the last id and increment it by one    

    this._callbacks ={}; // allow the dispatcher to have an entire set of functions that it is going 
                         // to run and then we just run all of them. we don`t really care what
                         // particular action has occured
}

Dispatcher.prototype.register = function (callabck) {// the register function will let us give a callback to 
                                         // dispatcher to be registered and it will added as 
                                         // a method to the call back object
    var id = 'CID_' + this._lastID++; // the callback will get an id , the id is the name of 
                                        // the property that put the call back object  
    this._callbacks[id] = callabck;
    return id;
}

Dispatcher.prototype.Dispatcher = function (action) { // this is to let the rest of application know that a 
                                              // certain action occured which is just an objec, we don`t care what action has been sent 
                                              // we just need to invoke every function that has been registered with the dispatcher
                                              // every function/method attached to the callabck object
    for(const id in this._callabcks){
        this._callbacks[id](action); // invoke and pass the action that has been dispatched , every call back will be run
    }
    
}

Dispatcher.prototype.waitFor = function(ids){  // ids of callabcks to say a particular callback need to wait for other
                                               //  callbacks to run before it does 
// TODO
}