// Question 2

const api_Url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=59b48bce97ce4f9c9cf056b0c80b4b01";

const resultsContainer = document.querySelector(".results");

async function getApi(){
  
       const response = await fetch(api_Url);
       const results = await response.json();
       const allResults = results.results;
      
       resultsContainer.innerHTML = "";

       for(i = 0; i < allResults.length; i++){
           console.log(allResults[i].name);
           console.log(allResults[i].rating);
           

           resultsContainer.innerHTML += `<div>${allResults[i].name} : ${allResults[i].rating}</div>`;
           if(i === 8){
               break;
           }
       }
    
}
getApi();


// I am not sure how to add number of tags.. I am also unsure if I did this task the right way
