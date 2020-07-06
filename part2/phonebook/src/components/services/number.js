import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getNumber = () => {
    const request = axios.get(baseUrl)
        return request.then((response) => {
            return response.data
        })
}

const postNumber = (person) => {
    const post = axios.post(baseUrl, person)
            return post.then((response) => {
                return response.data
            })
}

const wipe = (id) => {
        axios.delete(`${baseUrl}/${id}`)
        .catch(error => {
            console.log("index not found");
        })
            
}

const update = (id, person) => {
    const responses = axios.put(`${baseUrl}/${id}`, person)
                        return responses.then(response => {
                            return response.data
                        })
}

export default {getNumber, postNumber, wipe, update} 