
export function EventEmitter(){ // function constructor 'EventEmitter' constructor
    this._events ={}; // hold a property called '_events' of type object 

};

EventEmitter.prototype.on = function(type, listner){  // all EventEmitter has access to this method called 'on' and it will take 'type' & 'listner'
    this._events[type] = this._events[type] || []; // type is a string , it is a property name , if it doesn`t exist initialize it to empty array 
    this._events[type].push(listner); // add to the array to that listner function

};

EventEmitter.prototype.emit = function(type){  // call 'emit' method and tell that type of event has occured 
if(this._events[type]){
    this._events[type].forEach(function(listner) { // loop over the entire array 
        listner();
    });
}
};

EventEmitter.prototype.removeListener = function (type, listner) {// remove a listner for a particular type of event 
    if(this._events[type]){
        this._events[type].splice(this._events[type].indexOf(listner),1); // remove from the array
    }
}