import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../services/postService"

function Index() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // OPTION 1: 
        // getAllPosts().then(data => setPosts(data))

        // OPTION 2:
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
        }
        loadData()
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