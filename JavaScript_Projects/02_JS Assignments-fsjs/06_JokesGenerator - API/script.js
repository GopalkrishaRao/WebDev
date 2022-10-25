let randomJoke= ()=>{fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    var joke = data.value;
    x.push(joke) 
    return joke
})
}
let x =[]

document.getElementById("jokeBtn").addEventListener("click", addJoke)

function addJoke(){

   randomJoke()
    document.getElementById("joke").innerText = x
};

