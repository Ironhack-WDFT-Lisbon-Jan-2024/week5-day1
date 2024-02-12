/* PROMISE is a commitment towards a future action */

// Write our Promise
const promise = new Promise((resolve, reject) => {
  let counter = 0;
  const countdown = setTimeout(() => {
    counter++;
    if (counter === 1) {
      resolve("It's resolved!");
    } else {
      reject("This Promise was unsuccessful");
    }
  }, 1000);
});

const promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("It's John Cena!");
    }, 2000)
});

// Consume our Promise with .then()
/* promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); */

// Consume our Promise with async / await
/*
async function countdown(){
    try{
        let value = await promise;
        console.log(value);
    }
    catch(error){
        console.log(error);
    }
}

countdown();
*/

// Consume our Promises with Promise.all()
Promise.all([promise, promise2]).then((values)=> console.log(values));



// Example with Fetch
/*fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((value) => value.json()).then((data)=> console.log(data))
  .catch((error) => console.log(error));*/



  
