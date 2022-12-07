const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if(email == "" || password == ""){
        alert("Existem campos vazios no formulário. Preencha os campos vazios para validar o formulário");
    } else {
        alert("Formulário validado com sucesso");
        console.log(email)
        console.log(password)
        event.preventDefault()
        email = "";
        password = "";
    }
})