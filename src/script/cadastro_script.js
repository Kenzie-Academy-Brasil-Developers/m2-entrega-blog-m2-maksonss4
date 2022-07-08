import { Blog } from "./api.blog.js"

const formCadastrar = document.querySelector("#formCadastrar")

formCadastrar.addEventListener("submit", async (event) => {
    event.preventDefault()

    const data = {}    
    const inputs = [...event.srcElement]

    inputs.forEach(element => {
        if(element.name !== ""){
            data[element.name] = element.value
        }
    })

    const cadastro = await Blog.cadastro(data)

    if(cadastro.id !== undefined){
        location.href = "../../index.html"
    }
})