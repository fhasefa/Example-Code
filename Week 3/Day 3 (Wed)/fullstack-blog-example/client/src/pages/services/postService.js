import axios from 'axios'

export async function getAllPosts() {
    try {
        const response = await axios.get('/posts')
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function getPost(id) {
    try {
        const response = await axios.get(`/posts/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deletePost(id) {
    try {
        await axios.delete(`/posts/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createPost(post) {
    try {
        const response = await axios.post('/posts', post)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updatePost(id, post) {
    try {
        await axios.put(`/posts/${id}`, post)
    } catch(err) {
        console.log(err.message)
    }
}