var kittens = ["Milo", "Otis", "Garfield"] 


//define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  
  kittens.push(name) ;
  return kittens ; 
  
}

function destructivelyPrependKitten(name) {
  
  kittens.unshift(name);
  return kittens ; 
}

function destructivelyRemoveLastKitten() {
  
  
 kittens = kittens.slice(0, kittens.length - 1) ;
 return kittens ; 
  
}

function destructivelyRemoveFirstKitten() {
  
  kittens.shift() ;
  return kittens ; 
}

function appendKitten(name) {
  
  kittens = [...kittens , name] ;
  return kittens ; 
}

// var cities = ["New York", "San Francisco"]
 
// we can assign it to the existing `cities` variable
//cities = ["Philadelphia", ...cities]
 
// but if we have a const
//const cats = ["Milo", "Garfield"]
 
// we need a new variable:
//const moreCats = ["Felix", ...cats]









