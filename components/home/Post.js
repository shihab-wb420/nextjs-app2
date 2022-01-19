import Styles from '../../styles/components/home/Post.module.css'
import Link from 'next/link'
const Post = ({posts}) =>{
  return (
    <div className={Styles.postBoxWrapper}>
  {  
    posts.map((post)=>{ 
    return(
         <div className={Styles.postBox} key={post.id}>
                 
             <div className={Styles.authorName}> 
               Author: Md Shihab Uddin 
             </div>
             <div className={Styles.thumbnail}> 
                
             </div>
             <div className={Styles.category}>
                 | <span className={Styles.date}>
                                  Posted on: </span>
             </div>
             <h3 className={Styles.title}>
                <Link href={{
                        pathname: "/single_post",
                        query: { id: post.id},
                   }}>
                      <a> {post.title.slice(0,100)}... </a>
                 </Link>
             </h3>
             <p className={Styles.description}> 
                {post.body.slice(0,200)}...
             </p>

         </div>
     );
    })
  }
    </div>
  )
}

export default Post