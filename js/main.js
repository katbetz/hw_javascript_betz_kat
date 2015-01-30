// Howdy
function howdy(){

console.log("Kat Betz says greetings earthling!");
};

howdy();

// Numba
var numba = function(string){
    if(string.length < 7){
        console.log("What a short little word!");
    }
    else if(string.length > 7){
        console.log("I'm sorry, but that's too many to count");
    }
    else if(string.length == 7){
        console.log("7, what a perfect choice!");
    }
    else{
    }
};
numba("1");
numba("seventy");
numba("university");


// Inception

function inception(callback, value){
    callback(value);
};

function movie(){
    console.log("Buffy the Vampire Slayer is a fantastic movie");
}

inception(movie);