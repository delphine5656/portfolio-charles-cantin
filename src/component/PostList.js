import React from "react"
//import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import "./component.css"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        
        <div>
            <h1>Portfolio</h1>
            <div className="containerGrid">
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <>
                           
                             <div className="card-unique" key={i}>
                                {post.thumbnail && <img src={post.thumbnail} alt=""/> }
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                            </div>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            </>   
                      
                    )
                })
                
            }
             </div>
        </div>
      
    )
}

export default PostList