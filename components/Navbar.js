import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
function Navbar(){
    const router= useRouter()
    const isActive=(r)=>{
      if(r ===router.pathname){
        return "active"
      }else{
          return ""
      }
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link  href="/">
        <a className="navbar-brand">ZackMarket</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav p-1">
        <li className="nav-item">
        <Link href="/cart">
        <a className={"nav-link" + isActive('/cart')}>
        <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
         <span className="position-absolute">
         </span>
         </i> Cart
         </a>
         </Link>
         </li>
         <li className="nav-item">
        <Link href="/signin">
        <a className={"nav-link" + isActive('/signin')}>
        <i className="fas fa-user" aria-hidden="true"></i> Sign in
        </a>
        </Link>
        </li>
        </ul>
        </div>
        </nav>
    )
}
export default Navbar