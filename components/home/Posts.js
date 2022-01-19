import Styles from '../../styles/components/home/Posts.module.css'
import Post from './Post'

const Posts = ({all_post}) =>{
  return (
    <div className="postsContainer">
 
          <Post posts={all_post}/>
   
    </div>
  )
}

export default Posts