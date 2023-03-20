import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {

    return (
            <DefaultLayout>
                <div className="a-post">
                    <h2>{props.post.subject}</h2>
                    <h5 style={{ opacity: '.3'}}>Posted by {props.post.user} on {props.post.createdAt.toLocaleDateString()} at {props.post.createdAt.toLocaleTimeString()}</h5>
                    <p className='p-body'>{props.post.body}</p><br /><br />

                    {
                        props.post.comments.length ?
                        <>
                            <div>Comments:</div>
                            <p>{props.post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.body}</div>
                                    <form action={`/posts/${props.post._id}/comments/${comment._id}?_method=DELETE`} method="POST"><input type="submit" value="X"/></form>
                                    <a href={`/posts/${props.post._id}/comments/${comment._id}`}>+</a>
                                </div>
                            )}</p>
                            <br/><br/>
                        </>
                        : ''
                    }
                    <details>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form action={`/posts/${props.post._id}/comments`} method="POST">
                            <textarea name="body" id="lc" cols="1" rows="1" />
                            <button>Comment</button>
                        </form>
                    </details>
                    
                    <div className="buttons">
                        <form action={`/posts/${props.post._id}?_method=DELETE`} method="POST">
                            <button>Delete</button>
                        </form>
                        <form action={`/posts/${props.post._id}/edit`}>
                            <button>Edit</button>
                        </form>
                        <form action='/posts'>
                            <button>Back</button>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
    )
}

export default Show