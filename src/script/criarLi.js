import { Blog } from "./autenticacao_Api_blog.js"

export class CriarLi {
    static renderizarPosts (post) {
        if(parseInt(localStorage.getItem("@kenzie_blog:id")) === post.user.id){
            const li = document.createElement("li")
            const figure = document.createElement("figure")
            const img = document.createElement("img")
            const divConteudo = document.createElement("div")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            const divEdit = document.createElement("div")
            const buttonApagar = document.createElement("button")
            const buttonEditar = document.createElement("button")
            const pData = document.createElement("p")

            li.id = post.id
            img.src = post.user.avatarUrl
            img.classList.add("imgUsuario")
            divConteudo.classList.add("divConteudo")
            h3.classList.add("h3")
            divEdit.classList.add("divEdit")
            buttonApagar.classList.add("buttonApagar")
            buttonEditar.classList.add("buttonEditar")
            pData.classList.add("pData")

            buttonApagar.addEventListener("click", (event) => {
                const idPost = event.target.parentNode.parentNode.id
                Blog.deletePost(idPost)
                location.reload(true)
            })

            buttonEditar.addEventListener("click", (event) => {
                const modalEditar = document.querySelector(".modal")
                modalEditar.id = event.target.parentNode.parentNode.id
                modalEditar.style.display = "flex"
            })
            
            h3.innerText = post.user.username
            p.innerText = post.content
            buttonEditar.innerText = "editar"
            buttonApagar.innerText = "Apagar"
            pData.innerText = post.createdAt.slice(0, 10)
            

            figure.append(img)
            divConteudo.append(h3, p)
            divEdit.append(buttonApagar, buttonEditar, pData)
            li.append(figure, divConteudo, divEdit)

            return li
        }else{
            const li = document.createElement("li")
            const figure = document.createElement("figure")
            const img = document.createElement("img")
            const divConteudo = document.createElement("div")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            const divEdit = document.createElement("div")
            const pData = document.createElement("p")

            li.id = post.id
            img.src = post.user.avatarUrl
            img.classList.add("imgUsuario")
            divConteudo.classList.add("divConteudo")
            divEdit.classList.add("divEdit")
            pData.classList.add("pData")
            
            h3.innerText = post.user.username
            p.innerText = post.content
            pData.innerText = post.createdAt.slice(0, 10)

            figure.append(img)
            divConteudo.append(h3, p)
            divEdit.append(pData)
            li.append(figure, divConteudo, divEdit)

            return li
        }
    }

    
}