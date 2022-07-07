export class Blog {
    static baseUrl = "https://blog-m2.herokuapp.com"

    static headers = {"Content-Type": "Application/json"}

    static token = ""

    static async cadastro (data) {
        const response = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))

        return response
    }

    static async login (data) {
        const token = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(resp => resp)
        .catch(err => console.log(err))

        Blog.token = token

        return token
    }
}