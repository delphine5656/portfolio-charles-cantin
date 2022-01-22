import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import "./component.css"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist">
            <h1 className="title">Portfolio Bébé</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt=""/> }
                                <h2><Link className="link" to={`/post/${post.id}`}>{post.title}</Link></h2>
                                <h4>{post.content}</h4>
                            </div>
                            <small>Published on {post.date}</small>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="link" to={`/post/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList