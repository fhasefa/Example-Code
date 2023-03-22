export async function getAllPosts() {
    try {
        const response = await fetch('/posts')
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err.message)
    }
}

export async function getPost(id) {
    try {
        const response = await fetch(`/posts/${id}`)
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deletePost(id) {
    try {
        await fetch(`/posts/${id}`, {
            method: 'DELETE'
        })
    } catch(err) {
        console.log(err.message)
    }
}

export async function createPost(post) {
    try {
        const response = await fetch(`/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updatePost(id, post) {
    try {
        await fetch(`/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(err) {
        console.log(err.message)
    }
}