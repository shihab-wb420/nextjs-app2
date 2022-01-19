import '../styles/globals.css'
import '../styles/loader.css'
import '../styles/components/nav.css'
import '../styles/components/footer.css'
import '../styles/components/comment.css'
import '../styles/pages/singlePage/post.css'
import '../styles/pages/todos/todos.css'
import '../styles/pages/album.css'
/*
import '../styles/pages/about.css';
import '../styles/pages/contact.css';*/

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
