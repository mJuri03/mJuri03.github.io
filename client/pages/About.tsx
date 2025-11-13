import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">About Me</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-6">
              This is your About page. Share your story, background, and what
              makes you unique!
            </p>

            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg p-8 my-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Let's Fill This In
              </h2>
              <p className="text-slate-600 mb-4">
                Tell me more about what should go in your About page and I'll
                create beautiful content for you.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Customize This Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
