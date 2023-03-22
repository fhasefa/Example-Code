import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Index() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
            <div>
                <h1>Index View</h1>
                <div id="posts">

                        {posts.map((post, index) => 
                            <Link to={`/posts/${post._id}`} key={index}>
                                <div className="a-post">
                                    {post.subject}
                                </div>
                            </Link>
                        )}
            
                    <Link to="/posts/new">
                        <button>NEW POST</button>
                    </Link>
    
                </div>
            </div>
    )
}

export default Index