import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {

    return (
            <DefaultLayout>
                <h1>Index View</h1>
                <div id="posts">

                        {props.posts.map((post, index) => 
                            <div className="a-post" key={index}>
                                <a href={`/posts/${post._id}`}>{post.subject}</a>
                            </div>
                        )}
            
                    <form action="/posts/new">
                            <button>NEW POST</button>
                    </form>
                </div>
            </DefaultLayout>
    )
}

export default Index