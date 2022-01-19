import { useRouter } from "next/router"
import {useEffect, useState } from "react"
import Comment from "../../components/Comment"
import Nav from "../../components/Nav"
 
const SinglePost = () =>{
  const router = useRouter();
  const {query:{id}} = router;
  const [post, setPost] = useState([])
  
  //-----Fetching data by post id--------
    useEffect(async()=>{
       let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       post= await post.json();
       setPost(post)
    },[id])
    
  return (
    <>
    <Nav />
 <div className="singlePost">
        <div className="singlePostWrapper">
          <h2 className="singlePostTitle"> 
              {post.title}
          </h2> 
          <p style={{textAlign:"left" }}> {post.body}</p>
          <h5>Category: </h5>
        </div>
      
    {/*--------Comment Section------------*/}
     <Comment post_id={id}/>
    
  </div>
 

     
    </>
 ) 
}

export default SinglePost