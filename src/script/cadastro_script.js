import { Blog } from "./Autenticacao_Api_blog.js"

const formCadastrar = document.querySelector("#formCadastrar")

formCadastrar.addEventListener("submit", (event) => {
    event.preventDefault()

    const data = {}    
    const inputs = [...event.srcElement]

    inputs.forEach(element => {
        if(element.name !== ""){
            data[element.name] = element.value
        }
    })

    Blog.cadastro(data)
})