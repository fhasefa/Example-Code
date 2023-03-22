import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function Show() {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const bodyRef = useRef()
    const detailsRef = useRef()

    useEffect(() => {
        fetch(`/posts/${params.id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [params.id])

    function handleDeleteComment(comment) {
        fetch(`/comments/p/${post._id}/c/${comment._id}`, {
            method: 'DELETE'
        })
            .then(() => {
                let updatedPost = { ...post }
                updatedPost.comments = updatedPost.comments.filter(c => c._id !== comment._id)
                setPost(updatedPost)
            })
    }

    function handleDeletePost() {
        fetch(`/posts/${post._id}`, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/posts')
            })
    }

    function handleSubmit(e) {
        e.preventDefault()

        let comment = {
            body: bodyRef.current.value
        }

        fetch(`/comments/p/${post._id}`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((comment) => {
                let updatedPost = { ...post }
                updatedPost.comments.push(comment)
                setPost(updatedPost)
                bodyRef.current.value = ''
                detailsRef.current.open = false
            })
    }

    return (
            <div>
                <div className="a-post">
                    <h2>{post.subject}</h2>
                    <h5 style={{ opacity: '.3'}}>Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                    <div className='p-body'>{post.body}</div><br /><br />

                    {
                        post.comments?.length ?
                        <>
                            <div>Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.body}</div>
                                    <button onClick={() => handleDeleteComment(comment)}>X</button>
                                    <Link to={`/posts/${post._id}/comments/${comment._id}`}><span>+</span></Link>
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    <details ref={detailsRef}>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form onSubmit={handleSubmit}>
                            <textarea ref={bodyRef} id="lc" cols="1" rows="1" />
                            <button>Comment</button>
                        </form>
                    </details>
                    
                    <div className="buttons">
                        <button onClick={handleDeletePost}>Delete</button>
                        <Link to={`/posts/${post._id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <Link to='..'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Show