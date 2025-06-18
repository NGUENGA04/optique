'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-purple-600 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          OpticPro
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="hover:text-purple-200 transition-colors"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="hover:text-purple-200 transition-colors"
          >
            Nos services
          </button>
          <button 
            onClick={() => scrollToSection('a-propos')}
            className="hover:text-purple-200 transition-colors"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-purple-200 transition-colors"
          >
            Nous contacter
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-left hover:text-purple-200 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left hover:text-purple-200 transition-colors"
            >
              Nos services
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className="text-left hover:text-purple-200 transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left hover:text-purple-200 transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header