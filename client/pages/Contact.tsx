import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            Have a question or project in mind? Let's connect.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form Placeholder */}
            <div>
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Contact Form Coming Soon
                </h2>
                <p className="text-slate-600 mb-4">
                  I'll add a fully functional contact form here. Let me know if
                  you'd like me to set it up with email integration!
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Customize Contact Form
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600">hello@example.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">Location</h3>
                    <p className="text-slate-600">City, State, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
