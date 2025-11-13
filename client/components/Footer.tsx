import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Portfolio</h3>
            <p className="text-sm text-slate-400">
              Showcasing my best work and creative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Work
              </Link>
              <Link
                to="/about"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              Contact Me
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
