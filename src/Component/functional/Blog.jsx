import React from 'react';
import './css/Blog.css'

const Blog = (props) =>{
    return <div className="blog-warper">
        <img src="https://placeimg.com/640/480/tech" alt="Picture"/>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>
}

Blog.defaultProps = {
    title:'Title',
    description:'Description'
}

export default Blog;