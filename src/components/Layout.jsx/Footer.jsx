
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (<>


    <footer className="bg-gray-900 text-gray-300 py-8  mt-auto bottom-0">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Logo + About */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-white">MyBlog</h1>
            <p className="text-sm mt-2 max-w-xs">
              Share your thoughts, read amazing stories, and connect with writers worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link to="/creaters" className="hover:text-white">Creater</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">🌐</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">🐦</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </div>
      </div>
    </footer>





  </>)
}

export default Footer
