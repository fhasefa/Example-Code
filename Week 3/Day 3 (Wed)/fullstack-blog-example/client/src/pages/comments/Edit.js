import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function Edit() {

    const [comment, setComment] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const bodyRef = useRef()

    useEffect(() => {
        fetch(`/comments/p/${params.id}/c/${params.cid}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [params.id])

    function handleSubmit(e) {
        e.preventDefault()
        let updatedComment = {
            body: bodyRef.current.value
        }
        console.log(params)
        fetch(`/comments/p/${params.id}/c/${params.cid}`, {
            method: 'PUT',
            body: JSON.stringify(updatedComment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                navigate(`/posts/${params.id}`)
            })
    }

    return ( 
        <div>
            <h1>Edit Comment</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="clr">Body:</label><br />
                    <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={comment.body} /><br /><br />

                    <button>Submit</button>
                </form>
                <Link to={`/posts/${params.id}`}>
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Edit;