const btnEl=document.getElementById("btn");

const jokeElement=document.getElementById("joke");
const apiKey="nWDV0V/E5FP5bGIaubioIw==OCUsLqdikDkSBdGI";

const options = {
    method:"GET" ,
    headers:{ "X-Api-Key" : apiKey,
   },


};

const apiURl ="https://api.api-ninjas.com/v1/jokes?limit=1";


 async function getJoke() {
try {
    jokeElement.innerText="Updating...";
    btnEl.disabled=true; 
    btnEl.innerText="Loading...";
   const response = await fetch(apiURl,options );
   console.log(response)
   const data= await response.json();
   console.log('data',data)
  console.log(data[0].joke);
  btnEl.disabled=false; 
  btnEl.innerText="Tell Me a Joke";
  jokeElement.innerText=data[0].joke;
    
} catch (error) {

    jokeElement.innerText="An error happened ,try again later";
    btnEl.innerText="Tell Me a Joke"  
    console.log(error); 
}


  
}


btnEl.addEventListener("click", getJoke);