import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management and payment integration",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab436c131?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Creative Design System",
    description:
      "Comprehensive design system with 100+ reusable components and detailed documentation",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Figma", "Component Design", "Documentation"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Mobile App Interface",
    description:
      "Intuitive mobile application interface with smooth animations and excellent performance",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1512941691920-25bda36dc6f6?w=600&h=400&fit=crop",
    tags: ["React Native", "iOS", "Android"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and comprehensive data visualization",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "TypeScript", "WebSocket"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Brand Identity Package",
    description:
      "Complete brand identity including logo, color palette, and typography guidelines",
    category: "Brand Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Branding", "Logo Design", "Style Guide"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Content Management System",
    description:
      "Scalable CMS with headless architecture and multi-tenant support",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab436c131?w=600&h=400&fit=crop",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    link: "#",
    github: "#",
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Brand Design",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">My Work</h1>
          <p className="text-xl text-slate-600">
            A showcase of projects I've worked on, featuring web development,
            mobile apps, and design work.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-300 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Code
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your next project and see how we can create something
            amazing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
