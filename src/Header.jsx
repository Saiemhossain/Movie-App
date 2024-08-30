import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header>
      <div className="logo">
        <h2>Net <span>Flix</span></h2>
      </div>
      <nav>
        <Link to={"/"} >Home</Link>
        <Link to={"/all-movies"} >Movies</Link>
        <Link to={"/movie"} >Detail</Link>
       
      </nav>
   </header>
  )
}
