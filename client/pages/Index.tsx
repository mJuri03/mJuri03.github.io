import { useState } from "react";
import { ChevronDown, Mail, Phone, Search, X, Linkedin } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "FDA Data Mining & Clinical Trial Benchmarking",
    type: "Personal Project",
    category: "Data Analysis",
    date: "2025",
    description:
      "Developed an FDA data-mining pipeline and comparative analytics dashboard to benchmark clinical trials across companies. Automated extraction of regulatory intelligence to inform trial design and competitive positioning.",
  },
  {
    id: 2,
    title: "Automated Deviation Classification Tool",
    type: "Personal Project – LLM-Based Automation",
    category: "Data Analysis",
    date: "2025",
    description:
      "Built software to automate extraction, summarization, and risk classification of deviation reports using custom Large Language Model pipeline. Streamlines compliance documentation and reduces manual review time.",
  },
  {
    id: 3,
    title: "3D Vagal Nerve Segmentation",
    type: "Research – Deep Learning & Computer Vision",
    category: "Research",
    date: "2025",
    description:
      "Published research in 3D segmentation of human vagus nerve using deep learning (SAM fine-tuning). Built annotation pipelines reducing processing time from 5 to 2 days. Published: 'Few-Shot Sample-Specific Deep Learning Multiclass Segmentation and Fiber Tractography using 3D-MUSE Images of Human Vagus Nerve' (2025).",
    doi: "DOI: 10.1109/ISBI60581.2025.10981136",
  },
  {
    id: 4,
    title: "Clinical Trial Design & Consulting",
    type: "BioWell – P&K (Skin Research Center), Seoul",
    category: "Clinical Trial",
    date: "2024-2025",
    description:
      "Led protocol design and biomarker strategy for clinical trials supporting international product registration. Managed communications between sponsors, CROs, and research centers. Compiled competitor benchmarking across 8 companies for regulatory strategy.",
  },
  {
    id: 5,
    title: "Regulatory Affairs – NovelMed Therapeutics",
    type: "Phase II Clinical Trials, FDA Submissions",
    category: "Regulatory",
    date: "2023-2024",
    description:
      "Supported two Phase II clinical trial approvals. Managed CMC data verification (8+ years), AE/SAE monitoring, protocol deviations, and FDA compliance. Implemented rapid CAPAs within 24 hours. Reduced lab testing costs by 53% through structured analysis.",
  },
  {
    id: 6,
    title: "Manufacturing & FDA Inspection Readiness",
    type: "Olon USA – Active Pharmaceutical Ingredients",
    category: "Regulatory",
    date: "2025",
    description:
      "Supported FDA Pre-Approval Inspection readiness for 3 commercial APIs. Developed automation tools for inspection-ready documentation (30% time reduction). Conducted 53 equipment qualification activities (IQ/OQ/PQ) for GMP compliance.",
  },
];

const CATEGORIES = [
  "Data Analysis",
  "Research",
  "Clinical Trial",
  "Regulatory",
];

export default function Index() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"full" | "category" | "timeline">(
    "full",
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getFilteredProjects = () => {
    if (viewMode === "full") {
      return PROJECTS;
    }
    if (viewMode === "category") {
      if (selectedCategory === "All") {
        return PROJECTS;
      }
      return PROJECTS.filter((p) => p.category === selectedCategory);
    }
    if (viewMode === "timeline") {
      return [...PROJECTS].sort((a, b) => {
        const dateA = parseInt(a.date.split("-")[0]);
        const dateB = parseInt(b.date.split("-")[0]);
        return dateB - dateA;
      });
    }
    return PROJECTS;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Juri Moon</h1>
          <a href="#work" className="text-sm font-medium hover:text-slate-600">
            Work
          </a>
        </nav>
      </header>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold">Juri Moon – Portfolio</h2>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src="Juri,Moon-Portfolio.pdf"
                className="w-full h-full"
                style={{ minHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-slate-50 border-r border-slate-200 p-8 sticky top-20 h-[calc(100vh-80px)]">
          <h2 className="text-lg font-bold mb-8">Contact</h2>

          <div className="space-y-8">
            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={18} className="text-slate-900" />
                <p className="text-sm font-semibold text-slate-600">Email</p>
              </div>
              <a
                href="mailto:juri.moon.03@gmail.com"
                className="text-slate-900 font-medium hover:text-blue-600 break-all"
              >
                juri.moon.03@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="text-slate-900" />
                <p className="text-sm font-semibold text-slate-600">Phone</p>
              </div>
              <a
                href="tel:2163471025"
                className="text-slate-900 font-medium hover:text-blue-600"
              >
                216-347-1025
              </a>
            </div>

            {/* LinkedIn */}
            <div>
              <a
                href="https://linkedin.com/in/juri-moon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            {/* See Resume */}
            <div>
              <button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition w-full justify-center"
              >
                <Search size={18} />
                See My Resume
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Skills & Expertise */}
          <section className="max-w-4xl mb-20">
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-slate-900 mb-2">Regulatory</p>
                <p className="text-sm text-slate-600">
                  FDA compliance, GMP, clinical trials, protocol development,
                  deviation management
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-2">Technical</p>
                <p className="text-sm text-slate-600">
                  Python, R, MATLAB, Java, Deep Learning, Predictive Analytics,
                  Automation
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-2">
                  Professional
                </p>
                <p className="text-sm text-slate-600">
                  Project management, cross-functional collaboration, technical
                  writing, mentorship
                </p>
              </div>
            </div>
          </section>

          {/* Recent Update: Document Intelligence */}
          <section className="max-w-4xl mb-20 border-t border-slate-200 pt-12">
            <p className="text-sm uppercase tracking-wide text-slate-600 mb-4">
              Recent Update
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Document Intelligence & Clinical Operations
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Building automation tools and workflows that streamline FDA
              compliance, trial readiness, and regulatory documentation.
              Specialized in clinical trial design, manufacturing, and deep
              learning applications.
            </p>
          </section>

          {/* Demo Video */}
          <section className="max-w-4xl mb-20 border-t border-slate-200 pt-12">
            <video
              controls
              className="w-full rounded-lg shadow-lg bg-slate-100"
              style={{ maxHeight: "600px" }}
            >
              <source
                src="https://cdn.builder.io/o/assets%2Fdc63b00b8dac4c86944d6cf2d2bff081%2Fe2eeb456e2f54e1797bbfdd2e8d07d60?alt=media&token=8b2880e6-e6f0-4fea-b695-30321dba8358&apiKey=dc63b00b8dac4c86944d6cf2d2bff081"
                type="video/mp4"
              />
              Your browser does not support MP4 playback.
            </video>
          </section>

          {/* Key Projects */}
          <section
            id="work"
            className="max-w-4xl border-t border-slate-200 pt-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Key Projects</h2>
              <div className="flex gap-2 flex-wrap">
                {/* Full View Button */}
                <button
                  onClick={() => {
                    setViewMode("full");
                    setExpandedId(null);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    viewMode === "full"
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Full
                </button>

                {/* All Categories Button */}
                <button
                  onClick={() => {
                    setViewMode("category");
                    setSelectedCategory("All");
                    setExpandedId(null);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    viewMode === "category" && selectedCategory === "All"
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                  }`}
                >
                  All
                </button>

                {/* Category Buttons */}
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setViewMode("category");
                      setSelectedCategory(cat);
                      setExpandedId(null);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      viewMode === "category" && selectedCategory === cat
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}

                {/* Timeline Button */}
                <button
                  onClick={() => {
                    setViewMode("timeline");
                    setExpandedId(null);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    viewMode === "timeline"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-900 hover:bg-purple-200"
                  }`}
                >
                  Timeline
                </button>
              </div>
            </div>

            {/* Timeline View */}
            {viewMode === "timeline" ? (
              <div className="relative py-12">
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform -translate-x-1/2"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {filteredProjects.map((project, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                      <div key={project.id} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-md"></div>

                        {/* Timeline flag */}
                        <div
                          className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-2`}
                        >
                          <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                            {project.date}
                          </div>
                        </div>

                        {/* Project card */}
                        <div
                          className={`flex ${isLeft ? "justify-start pr-1/2" : "justify-end pl-1/2"} px-4`}
                        >
                          <button
                            onClick={() => toggleProject(project.id)}
                            className={`w-96 text-left`}
                          >
                            <div className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition cursor-pointer bg-white">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    {project.title}
                                  </h3>
                                  <p className="text-sm text-slate-600">
                                    {project.type}
                                  </p>
                                </div>
                                <ChevronDown
                                  size={20}
                                  className={`flex-shrink-0 text-slate-400 transition-transform ${
                                    expandedId === project.id
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </div>

                              {expandedId === project.id && (
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                  <p className="text-slate-700 leading-relaxed">
                                    {project.description}
                                  </p>
                                  {project.doi && (
                                    <p className="text-sm text-slate-600 mt-3">
                                      {project.doi}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Projects Grid for Full and Category views */
              <div className="space-y-3">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => toggleProject(project.id)}
                    className="w-full text-left"
                  >
                    <div className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {project.type}
                          </p>
                          {viewMode === "category" && (
                            <p className="text-xs text-slate-500 mt-1">
                              {project.category}
                            </p>
                          )}
                        </div>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-slate-400 transition-transform ${
                            expandedId === project.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {expandedId === project.id && (
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="text-slate-700 leading-relaxed">
                            {project.description}
                          </p>
                          {project.doi && (
                            <p className="text-sm text-slate-600 mt-3">
                              {project.doi}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-600 text-sm">
        <p>© 2025 Juri Moon. All rights reserved.</p>
      </footer>
    </div>
  );
}
