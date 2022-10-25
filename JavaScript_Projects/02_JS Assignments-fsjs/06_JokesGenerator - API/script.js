let randomJoke= ()=>{fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    var joke = data.value;
    return document.getElementById("joke").innerText=joke
})
}

document.getElementById("jokeBtn").addEventListener("click", addJoke)

function addJoke(){
   randomJoke()
};

