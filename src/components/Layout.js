import React from 'react'
import { Link } from 'gatsby'
import "./layout.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTiktok, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-pink-200 p-4 sticky top-0 z-50">
        <nav className="flex justify-between items-center ">
          <Link to="/" className="text-2xl font-bold text-pink-800">Imidy Crochet</Link>
          <ul className="flex space-x-4">
            <li><Link to="https://www.etsy.com/shop/Imidy" className="text-pink-800 hover:text-pink-600">Store</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-pink-200 p-4">
        <div className='text-center text-pink-800'>Follow Me</div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.tiktok.com/@imidy_crochet" target="_blank" rel="noopener noreferrer" className="text-pink-800 hover:text-pink-600">
          <i class="fa-brands fa-tiktok fa-2x"></i>
          </a>
          <a href="https://www.youtube.com/@Imidy_crochet" target="_blank" rel="noopener noreferrer" className="text-pink-800 hover:text-pink-600">
          <i class="fa-brands fa-youtube fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-800 hover:text-pink-600">
          <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout