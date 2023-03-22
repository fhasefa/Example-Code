export async function deleteCommentFromPost(commentId, postId) {
    try {
        await fetch(`/comments/p/${postId}/c/${commentId}`, {
            method: 'DELETE'
        })
    } catch(err) {
        console.log(err.message)
    }
}

export async function createCommentForPost(comment, postId) {
    try {
        const response = await fetch(`/comments/p/${postId}`, {
            method: 'POST',
            body: JSON.stringify(comment),
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

export async function getCommentFromPost(commentId, postId) {
    try {
        const response = await fetch(`/comments/p/${postId}/c/${commentId}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateCommentOfIdFromPost(comment, commentId, postId) {
    try {
        await fetch(`/comments/p/${postId}/c/${commentId}`, {
            method: 'PUT',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(err) {
        console.log(err.message)
    }
}