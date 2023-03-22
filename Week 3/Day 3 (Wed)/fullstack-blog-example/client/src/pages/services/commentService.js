import axios from 'axios'

export async function deleteCommentFromPost(commentId, postId) {
    try {
        await axios.delete(`/comments/p/${postId}/c/${commentId}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createCommentForPost(comment, postId) {
    try {
        const response = await axios.post(`/comments/p/${postId}`, comment)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function getCommentFromPost(commentId, postId) {
    try {
        const response = await axios.get(`/comments/p/${postId}/c/${commentId}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateCommentOfIdFromPost(comment, commentId, postId) {
    try {
        await axios.put(`/comments/p/${postId}/c/${commentId}`, comment)
    } catch(err) {
        console.log(err.message)
    }
}