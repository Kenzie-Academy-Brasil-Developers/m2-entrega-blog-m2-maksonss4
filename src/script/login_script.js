import { Blog } from "./autenticacao_Api_blog.js"


const formLogin = document.querySelector("#formLogin")

formLogin.addEventListener("submit", (event) => {
    event.preventDefault()

    const data = {}
    const inputs = [...event.target]

    inputs.forEach(element => {
        if(element.name !== ""){
            data[element.name] = element.value
        }
    })

    Blog.login(data)

    
    setTimeout(() => {
        const idLocalStorage = JSON.parse(localStorage.getItem("@kenzie_blog:id"))

        if(idLocalStorage !== null){
            location.href = "./src/pages/homepage.html"
        }
    }, 1000)

})