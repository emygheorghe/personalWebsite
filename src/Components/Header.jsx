import { useState } from 'react';
import './../tailwind.css'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl  shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="font-secondary text-3xl text-white">
            EG
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-600 transition font-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"

          >

          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-2 space-y-2 pb-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;