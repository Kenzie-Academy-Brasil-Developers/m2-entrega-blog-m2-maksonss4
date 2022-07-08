import { Blog } from "./Autenticacao_Api_blog.js"
import { CriarLi } from "./criarLi.js"

const logout = document.querySelector("#logout")
const formPost = document.querySelector("#formPost")
const ul = document.querySelector(".ulPosts")


async function renderizarPostagens (numeroDaPagina) {
    const pagina = await Blog.buscarPostagensPorPagina(numeroDaPagina)
    const postagens = pagina.data
    postagens.forEach( (post) => {
        const li = CriarLi.renderizarPosts(post)
        ul.append(li)
    })
}
renderizarPostagens(1)

logout.addEventListener("click", () => {
    localStorage.removeItem("@kenzie_blog:token")
    localStorage.removeItem("@kenzie_blog:id")

    location.href = "../../index_login.html"
})

formPost.addEventListener("submit", (event) => {
    event.preventDefault()
    const elementsForm = [...event.srcElement]
    const data = {}

    elementsForm.forEach(element => {
        if(element.name !== ""){
            data[element.name] = element.value
        }
    })

    Blog.criarPost(data)

    location.reload(true)
})

const modal = document.querySelector(".modal")
const fecharModal = document.querySelector("#imgFecharEdit")

fecharModal.addEventListener("click", () => {
    modal.style.display = "none"
})

const formEdit = document.querySelector(".modal__form")

formEdit.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const data = {}
    const elements = [...event.srcElement]
    
    elements.forEach(element => {
        if(element.name !== ""){
            data[element.name] = element.value
        }
    })

    const idPost = event.target.parentNode.parentNode.parentNode.id
    
    Blog.editarPost(idPost, data)

    location.reload(true)
})