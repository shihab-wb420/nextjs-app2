import Image from 'next/image'
import Link from 'next/link'

const Nav = () =>{
  return (
    <nav className="NavBar">
      <Link href="/"> 
        <a> Home </a>
      </Link>
      <Link href="/about"> 
        <a> About </a>
      </Link>
      <Link href="/contact"> 
        <a> Contact </a>
      </Link>
      <Link href="/todos"> 
        <a> Todos </a>
      </Link>
        <Link href="/photos"> 
        <a> Photos</a>
      </Link>
    </nav>
  )
}

export default Nav