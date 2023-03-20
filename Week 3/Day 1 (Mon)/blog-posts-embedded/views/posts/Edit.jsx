import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) {
    return ( 
        <DefaultLayout>
            <h1>Edit Post</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form action={`/posts/${props.post._id}?_method=PUT`} method="POST">
                    <label htmlFor="nme">Subject:</label><br />
                    <input type="text" id="nme" name="subject" defaultValue={props.post.subject} /><br /><br />

                    <label htmlFor="clr">Body:</label><br />
                    <textarea name="body" id="clr" cols="30" rows="10" defaultValue={props.post.body} /><br /><br />

                    <button>Submit</button>
                </form>
                <form action={`/posts/${props.post._id}`}>
                    <button>Back</button>
                </form>
            </div>
        </DefaultLayout>
    );
}

export default Edit;