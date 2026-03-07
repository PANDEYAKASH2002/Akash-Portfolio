"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const Page = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [status, setStatus] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_90e8bxs",
        "template_h02ohy4",
        e.currentTarget,
        "glyf7eJLbailtc_c4",
      )
      .then(
        () => {
          alert("Message sent!");
          setIsSending(false);
          e.currentTarget.reset();
        },
        (error) => {
          alert("Failed to send. Try again.");
          console.error(error.text);
          setIsSending(false);
        },
      );
  };

  const skills = [
    "Reactjs",
    "Nextjs",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "BootStrap",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Redux",
    "GSAP",
    "Three.js",
    "Frappe",
    "RestAPI",
  ];

  const projects = [
    {
      title: "Lantern360",
      description:
        "360-degree virtual tour platform for Employee tracking and HRMS ",
      category: "featured",
      color: "from-orange-400 to-orange-600",
      tags: ["Reactjs", "typescript", "tailwindCSS"],
      demo: "https://lantern360.in",
      link: "https://lantern360.in",
    },
    {
      title: "Bubble Game",
      description:
        "An interactive bubble popping game with scoring system and animations",
      category: "game",
      color: "from-blue-400 to-blue-600",
      tags: ["JavaScript", "HTML5", "CSS3"],
      demo: "https://bubble-game-nu-ivory.vercel.app",
      link: "https://github.com/PANDEYAKASH2002/BUBBLE-GAME",
    },
    {
      title: "Smart Management Facilty",
      description: "A comapny specific webiste ",
      category: "web",
       image: "/smf.jpg.png", 
      color: "from-red-400 to-red-600",
      tags: ["JavaScript", "HTML5", "CSS3", "Reactjs"],
      demo: "https://smf-aecv.vercel.app/",
      link: "https://github.com/PANDEYAKASH2002/SMF",
    },
    {
      title: "Task Manager App",
      description: "An application to manage tasks ",
      category: "web",
      color: "from-green-400 to-green-600",
      tags: ["JavaScript", "HTML5", "CSS3", "Reactjs", "tailwindCSS"],
      demo: "https://task-manager-ten-livid.vercel.app/",
      link: "https://github.com/PANDEYAKASH2002/TASK-MANAGER",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with product management and secure checkout",
      category: "web",
      color: "from-purple-400 to-purple-600",
      tags: ["Next.js", "Stripe", "MongoDB"],
      demo: "bubble-game-nu-ivory.vercel.app",
      link: "",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PANDEYAKASH2002",
      icon: "fab fa-github",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/akash-🌱-pandey-6960842b1",
      icon: "fab fa-linkedin-in",
      color: "hover:text-[#0077B5]",
    },

    {
      name: "WhatsApp",
      url: "https://wa.me/918957447491",
      icon: "fab fa-whatsapp",
      color: "hover:text-[#25D366]",
    },
    {
      name: "Email",
      url: "mailto:pandeyaakash7491@gmail.com",
      icon: "fas fa-envelope",
      color: "hover:text-[#FBBF24]",
    },
    {
      name: "Phone",
      url: "tel:+918957447491",
      icon: "fas fa-phone",
      color: "hover:text-[#FBBF24]",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen bg-[#FBBF24] flex items-center justify-center p-4 md:p-10 font-sans">
        <div className="relative w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* Navigation Layer */}
          <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 md:py-8 z-20">
            <div className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-800 underline">
              AKASH PANDEY
            </div>

            {/* Mobile Menu Button - Optional */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-gray-600 font-medium">
              <a
                href="#about"
                onClick={(e) => handleNavigation(e, "about")}
                className="hover:text-black transition"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavigation(e, "projects")}
                className="hover:text-black transition"
              >
                Projects
              </a>
              <a
                href="#contacts"
                onClick={(e) => handleNavigation(e, "contacts")}
                className="hover:text-black transition"
              >
                Contact Me
              </a>
            </div>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden animate-fadeIn">
                <a
                  href="#about"
                  onClick={(e) => handleNavigation(e, "about")}
                  className="text-gray-600 hover:text-black transition py-2 border-b border-gray-100"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={(e) => handleNavigation(e, "projects")}
                  className="text-gray-600 hover:text-black transition py-2 border-b border-gray-100"
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  onClick={(e) => handleNavigation(e, "contacts")}
                  className="text-gray-600 hover:text-black transition py-2"
                >
                  Contact Me
                </a>
              </div>
            )}
          </nav>

          {/* Left Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-8 md:pb-16 z-10 order-2 md:order-1">
            <span className="text-[#FBBF24] font-bold tracking-widest text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 uppercase">
              Front-End Developer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-4 md:mb-6">
              Hello, I am
              <br />{" "}
              <span className="font-bold inline animate-pulse">
                Akash Pandey
              </span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-md mb-6 md:mb-10 leading-relaxed">
              I build immersive and responsive web experiences using modern
              technologies. Focused on performance, aesthetics, and user
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => handleNavigation(e, "projects")}
                className="bg-[#FBBF24] hover:bg-yellow-500 text-black font-bold py-3 px-6 md:px-8 rounded-xl transition-all shadow-lg cursor-pointer text-center"
              >
                Projects
              </a>
              <a
                href="/Akash-pandey-resume.pdf"
                download="Akash-pandey-resume.pdf"
                className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-bold py-3 px-6 md:px-8 rounded-xl transition-all text-center"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Visual Section - Fixed for mobile */}
          <div className="relative w-full md:w-1/2 min-h-[300px] sm:min-h-[350px] md:min-h-full bg-[#FBBF24] order-1 md:order-2">
            {/* SVG Curve - Adjusted for mobile */}
            <div className="absolute inset-0 z-0 hidden md:block">
              <svg
                viewBox="0 0 500 800"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path
                  d="M0,0 L150,0 Q250,200 100,400 T150,800 L0,800 Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Mobile SVG - Different curve for mobile */}
            <div className="absolute inset-0 z-0 md:hidden">
              <svg
                viewBox="0 0 400 400"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path d="M0,0 L400,0 L400,400 L0,400 Z" fill="white" />
                <circle cx="200" cy="200" r="150" fill="#FBBF24" />
              </svg>
            </div>

            {/* Image Container - Fixed positioning */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-[#FBBF24] rounded-full md:hidden"></div>
                <Image
                  src="/portfolio-img.jpeg"
                  alt="Akash Pandey"
                  fill
                  className="object-cover mt-10 rounded-full md:rounded-3xl border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500 z-20"
                  priority
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>

            {/* Decorative elements for mobile */}
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-xl md:hidden"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl md:hidden"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        style={{
          backgroundImage: "url('/akash3.png')",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
        className="py-2 px-8 scroll-mt-4 min-h-screen relative"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-serif font-bold mb-2 text-center text-white ">
              About Me
            </h2>
            <div className="w-16 h-1.5 bg-[#FBBF24] mx-auto mb-12"></div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 bg-white/50 p-6 rounded-2xl backdrop-blur-sm">
              I am a passionate Front-End Developer with a strong eye for design
              and a love for creating seamless user experiences. I specialize in
              building complex, high-performance web applications using React
              and Next.js.
            </p>

            <div className="mt-8 bg-white/50 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-[#FBBF24] transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#FBBF24] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/20 select-none">
                AP
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/akash-img.jpg"
                  alt="Akash Pandey"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-4 px-8 scroll-mt-4 relative"
        style={{
          backgroundImage: "url('/akash3.png')",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-2 text-center text-white ">
            Projects
          </h2>
          <div className="w-16 h-1.5 bg-[#FBBF24] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`relative h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-white text-4xl`}
                >
                  <span className="opacity-30 font-bold text-6xl">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black group-hover:text-[#FBBF24] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#FBBF24] hover:bg-yellow-500 text-black font-medium py-2 rounded-lg transition-all text-sm text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 hover:border-[#FBBF24] text-gray-700 hover:text-[#FBBF24] font-medium py-2 rounded-lg transition-all text-sm text-center"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="py-4 px-8 scroll-mt-4 relative"
        style={{
          backgroundImage: "url('/akash3.png')",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content - with relative z-index to appear above overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-2 text-white">
            Contact Me
          </h2>
          <div className="w-16 h-1.5 bg-[#FBBF24] mx-auto mb-12"></div>

          {/* Rest of your content - update text colors for visibility */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gray-50/90 group-hover:bg-[#FBBF24]/20 flex items-center justify-center mb-3 transition-colors">
                  <i
                    className={`${social.icon} text-2xl text-gray-700 group-hover:text-[#FBBF24] transition-colors`}
                  ></i>
                </div>
                <span className="text-gray-800 font-medium text-sm group-hover:text-[#FBBF24] transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-white">
              Send Me a Message
            </h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 text-left"
            >
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBBF24] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBBF24] outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FBBF24] outline-none transition resize-none"
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#FBBF24] hover:bg-yellow-500 text-black font-bold py-3 px-12 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send"}
                </button>
              </div>
              {status && (
                <p className="text-center font-medium text-yellow-600 mt-4">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer SVG */}
      <div className="relative h-auto min-h-32 w-full bg-gray-50/50 pt-12 pb-6">
        {/* SVG Wave */}
        <svg className="absolute top-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#FBBF24"
            d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        {/* Contact Info - Stacked vertically */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4">
          <a
            href="mailto:pandeyaakash7491@gmail.com"
            className="text-gray-800 hover:text-[#FBBF24] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg"
          >
            <i className="fas fa-envelope text-[#FBBF24]"></i>
            <span>pandeyaakash7491@gmail.com</span>
          </a>

          <a
            href="tel:+918957447491"
            className="text-gray-800 hover:text-[#FBBF24] transition-colors duration-300 flex items-center gap-2 text-base md:text-lg"
          >
            <i className="fas fa-phone text-[#FBBF24]"></i>
            <span>+91 8957447491</span>
          </a>

          {/* Optional: Add a small copyright text */}
          <p className="text-gray-400 text-sm mt-4">Akash Pandey 2026</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Page;
