
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Posts from '../components/home/Posts'

export const getStaticProps = async ()=>{
  let datas = await fetch("https://jsonplaceholder.typicode.com/posts");
   datas = await datas.json()
   return{
     props:{
        datas,
       }
   };
}

const Home = ({datas}) =>{
  
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <Posts all_post={datas}/> 
       {/*datas.map((data)=>{
         return(
            <div key={data.id}>
              <h1> {data.title}</h1>
            </div>
         )
       })
       */}
      </main>
    </div>
  )
}

export default Home