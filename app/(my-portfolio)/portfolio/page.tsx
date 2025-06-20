"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Menu,
  X,
  Star,
  Award,
  Zap,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = {
    "Programming Languages": ["JavaScript (ES6+)"],
    "Frameworks & Libraries": [
      "React JS",
      "Next JS",
      "Redux",
      "Redux Toolkit",
      "React Hooks",
      "Material UI",
    ],
    "Development Tools": ["Git", "VSCode"],
    "Collaboration Tools": ["JIRA", "Bitbucket"],
    "Operating Systems": ["macOS", "Windows", "Ubuntu"],
    Additional: [
      "React Native",
      "Context API",
      "React Router",
      "Cypress",
      "API Integration",
      "Responsive Design",
    ],
  };

  const projects = [
    {
      name: "Professional Digital System Ltd",
      tech: "React JS, Next JS, Redux, Material UI, React Native",
      description:
        "Maintained consistency and interactivity across portals and contributed to a design system for efficient UI development. Focused on debugging a React Native mobile app and ensuring portals are stable for live deployment.",
      highlights: [
        "Design System",
        "Cross-platform Development",
        "Production Stability",
      ],
    },
    {
      name: "Quality Council Of India",
      tech: "React JS, Redux, Material UI, Tailwind CSS",
      description:
        "Initiated and independently managed frontend development from scratch, proficiently delivering reusable components, API integration, user management, code optimization, and visually appealing UIs.",
      highlights: [
        "Frontend Architecture",
        "Component Library",
        "Performance Optimization",
      ],
    },
    {
      name: "Playing Forward",
      tech: "React JS, Redux Toolkit, Material UI, Internationalization",
      description:
        "Proficiently developed common components using Material UI, seamlessly integrated APIs for screen interactions, implemented robust form validation and developed responsive user interface.",
      highlights: [
        "Component Development",
        "Form Validation",
        "Multi-language Support",
      ],
    },
    {
      name: "Ajeoba",
      tech: "Next JS, Redux, Material UI, Cypress, Maps",
      description:
        "Developed a responsive web interface, integrated maps and graphs, implemented efficient state management, adeptly debugged, and rigorously tested for reliability using Cypress.",
      highlights: [
        "Maps Integration",
        "Data Visualization",
        "End-to-End Testing",
      ],
    },
  ];

  const navItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Star },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  console.log("isScrolled", isScrolled);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-purple-400 to-pink-400/9 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1
                className={`text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${
                  isScrolled ? "text-purple-800" : "text-purple-400"
                }`}
              >
                Vibha Mishra
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeSection === id
                        ? "bg-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-purple-600/20 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-sm">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    activeSection === id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-purple-600/20 hover:text-white"
                  }`}
                >
                  <Icon size={18} className="mr-3" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl font-bold shadow-2xl">
              VM
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Vibha Mishra
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            React JS Developer
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            3.5+ years of hands-on frontend development experience. Passionate
            about creating exceptional user experiences with modern web
            technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate React JS Developer with over 3.5 years of
                hands-on experience in frontend development. I take ownership of
                my work and excel both in individual contributions and
                collaborative team environments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across modern JavaScript frameworks, state
                management, and creating responsive, user-friendly web
                applications. I&apos;m committed to writing clean, maintainable
                code and staying up-to-date with the latest industry trends.
              </p>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-purple-400" />
                  <span>Gurugram, Haryana</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={20} className="mr-2 text-purple-400" />
                  <span>3.5+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Key Strengths
              </h3>
              <div className="space-y-4">
                {[
                  "Frontend Architecture & Development",
                  "React JS & Next JS Expertise",
                  "State Management (Redux, Context API)",
                  "Responsive Web Design",
                  "API Integration & Optimization",
                  "End-to-End Testing with Cypress",
                ].map((strength, index) => (
                  <div key={index} className="flex items-center">
                    <Zap size={16} className="text-yellow-400 mr-3" />
                    <span className="text-gray-300">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      Jr Associate Software Engineer
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-300 mb-2">
                      Unthinkable Solutions LLP
                    </h4>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>Oct 2021 – Present</span>
                      <MapPin size={16} className="ml-4 mr-2" />
                      <span>Gurugram, Haryana</span>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        • Developed web applications using React JS, Next JS,
                        HTML, CSS, and JavaScript
                      </p>
                      <p>
                        • Implemented state management using Redux and Context
                        API
                      </p>
                      <p>
                        • Handled React Native development for mobile
                        applications
                      </p>
                      <p>
                        • Collaborated with teams to analyze system solutions
                        and present project demos
                      </p>
                      <p>
                        • Conducted end-to-end testing using Cypress for
                        platform reliability
                      </p>
                      <p>• Optimized applications for speed and performance</p>
                      <p>
                        • Implemented internationalization features for
                        multi-language support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-pink-400 mb-4 font-medium">
                  {project.tech}
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400">
                    Key Highlights:
                  </h4>
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center">
                      <Award size={14} className="text-yellow-400 mr-2" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-400">
                  Master of Computer Application
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Pranveer Singh Institute of Technology
              </h4>
              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>2019-2022</span>
                <MapPin size={16} className="ml-4 mr-2" />
                <span>Kanpur</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-400">
                  Bachelor of Computer Application
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Dr. Virendra Swarup Institute of Computer Studies
              </h4>
              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>2016-2019</span>
                <MapPin size={16} className="ml-4 mr-2" />
                <span>Kanpur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting
                projects. Let&apos;s connect and discuss how we can work
                together!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="tel:8858938656"
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center group"
              >
                <Phone
                  size={32}
                  className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-200"
                />
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  Phone
                </h3>
                <p className="text-gray-400">+91 8858938656</p>
              </a>
              <a
                href="mailto:vibham130@gmail.com"
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center group"
              >
                <Mail
                  size={32}
                  className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-200"
                />
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  Email
                </h3>
                <p className="text-gray-400">vibham130@gmail.com</p>
              </a>
              <a
                href="https://linkedin.com/in/vibha-mishra-8737b2148"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center group"
              >
                <Linkedin
                  size={32}
                  className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-200"
                />
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  LinkedIn
                </h3>
                <p className="text-gray-400">Connect with me</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Vibha Mishra. Built with React & Next.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
