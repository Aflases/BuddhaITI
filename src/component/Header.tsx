import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = ['home', 'about', 'trade', 'faculties', 'gallery', 'download','antiragging', 'contact'];


  return (
    <header className="bg-white shadow-lg top-0 z-50">
        <div className="  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and College Name */}
            <div className="flex items-center space-x-0 mr-0">
              <img src={`/assets/ITILOGO.jpg`} alt="College Logo" className="w-30 h-18 border-none " />
              <div className="flex-shrink-1 min-w-0"> {/* Added flex-shrink-1 and min-w-0 for better shrinking */}
              {/* More aggressive responsive font sizes */}
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-orange-400 leading-tight">BUDDHA (PVT) Industrial Training Institute</h1>
              {/* This paragraph is now visible on all screen sizes and scales down */}
              <p className="text-sm sm:text-base md:text-lg text-orange-800 leading-tight">Affiliated to National Council for Vocational Training (NCVT)</p>
              {/* This paragraph is now visible on all screen sizes and scales down */}
              <p className="text-xs sm:text-sm md:text-base text-black-500 leading-tight">DGT, Ministry of skill development & Enterpreneurship, Govt. of India</p>
            </div>
               <img src={`/assets/Skill India.jpeg`} alt="Skill India" className="w-30 h-18 border-none hidden md:mr-28 md:block" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {sections.map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'home' ? '' : item}`}
                  className={`px-1 py-2 rounded-md text-m font-medium transition-all duration-300 ${
                    activeSection === item
                      ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                      : 'text-m pointer:cusor-pointer'
                  }`}
                  onClick={() => {
                    setActiveSection(item);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((item) => (
                  <Link
                    key={item}
                    to={`/${item === 'home' ? '' : item}`}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => {
                      setActiveSection(item);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
  )
}

export default Header