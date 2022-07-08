export class Blog {
    static baseUrl = "https://blog-m2.herokuapp.com"
    
    static token = JSON.parse(localStorage.getItem("@kenzie_blog:token"))

    static async cadastro (data) {
        return await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }

    static async login (data) {
        return await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(resp => {
            if(resp.userId !== undefined){
                localStorage.setItem("@kenzie_blog:id", JSON.stringify(resp.userId))
                localStorage.setItem("@kenzie_blog:token", JSON.stringify(resp.token))
                return resp                
            }
        })
        .catch(err => console.log(err))
    }

    static async informacoesUsuarioEspecifico (id) {
        return await fetch(`${this.baseUrl}/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }

    static async buscarPostagensPorPagina (numeroDaPagina) {
        return await fetch(`${this.baseUrl}/posts?page=${numeroDaPagina}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${this.token}`
            }                
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }

    static async buscarPostagensPorId (idDaPostagem) {
        return await fetch(`${this.baseUrl}/posts/${idDaPostagem}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }

    static async criarPost (data) {
        return await fetch (`${this.baseUrl}/posts`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }

    static async editarPost (idDaPostagem, newContent) {
        return await fetch(`${this.baseUrl}/posts/${idDaPostagem}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(newContent)
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }

    static async deletePost (idDaPostagem) {
        return await fetch (`${this.baseUrl}/posts/${idDaPostagem}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
    }
}