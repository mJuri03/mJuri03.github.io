import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
