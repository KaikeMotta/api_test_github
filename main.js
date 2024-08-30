const gitHubid = document.querySelector("input[type=text]");
const btnBuscar = document.querySelector("input[type=button]");

btnBuscar.onclick = function(){
    const headers = {
        Authorization: ""
    };
    fetch("https://api.github.com/users/" + gitHubid.value, {headers})
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            if(response.status === 404){
                alert("Usuário não existe!");
                throw new Error("404:Usuário não existe!");

                
            }else {
                alert("Erro na requisição.");
                throw new Error("Erro de requisição");
            }
        }
    })
    .then(data =>{
        document.querySelector("#name").textContent = data.name;
        document.querySelector("#bio").textContent = data.bio;
        document.querySelector("#followers").textContent = data.followers;
        document.querySelector("#location").textContent = data.location;
        document.querySelector("#avatar").src = data.avatar_url;
    })
    .catch (error => {
        console.log(error);
    })
 }