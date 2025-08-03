"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Github, Linkedin, Mail, Download, Send, Code, Brain, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const { scrollYProgress } = useScroll()

  const projects = [
    {
      title: "HireBench",
      period: "Jun 2025 - Aug 2025",
      description:
        "AI-powered interview practice platform. Create customized interviews, get instant AI-driven feedback, and track your progress.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Drizzle ORM","NeonDB","Tailwind CSS"],
      achievements: [
        "Tailored interview simulation by job role and tech stack",
        "Instant, detailed AI feedback on performance",
        "Comprehensive interview history tracking",
        "Integrated speech-to-text for realistic practice",
      ],
      github: "https://github.com/Akshat-Raii/HireBench",
    },
    {
      title: "FinHive",
      period: "Feb 2025 - Apr 2025",
      description:
        "AI-powered personal finance platform to track expenses, manage budgets, and receive intelligent insights for financial goals.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "Drizzle ORM","NeonDB","Tailwind CSS"],
      achievements: [
        "AI-powered personalized financial advice",
        "Seamless income and expense tracking",
        "Smart, category-based budgeting",
        "Interactive dashboards for financial visualization",
      ],
      github: "https://github.com/Akshat-Raii/FinHive",
    },
    {
      title: "Driver Sentinel",
      period: "Oct 2024 - Jan 2025",
      description:
        "AI-driven solution for seatbelt and drowsiness detection with 98% accuracy, reducing accident risks by 70%.",
      technologies: ["YOLO", "OpenCV", "Deep Learning", "TensorFlow", "Computer Vision"],
      achievements: [
        "98% accuracy in detection",
        "70% reduction in accident risks",
        "50% enhanced user interaction",
        "40% reduced setup time",
      ],
      github: "https://github.com/Akshat-Raii/DriverSentinel",
    },
    {
      title: "Plant Shield",
      period: "May 2024 - July 2024",
      description: "Deep learning system for plant disease detection using CNNs, improving early diagnosis by 30%.",
      technologies: ["Deep Learning", "TensorFlow", "Keras", "Streamlit"],
      achievements: [
        "30% increase in early diagnosis rate",
        "25% boost in agricultural productivity",
        "High accuracy disease detection",
        "User-friendly Streamlit interface",
      ],
      github: "https://github.com/Akshat-Raii/PlantShield",
    },
    {
      title: "BuddyMind",
      period: "April 2025 - May 2025",
      description:
        "Empathetic mental health chatbot powered by Google's Gemini API, designed to converse with a comforting, structured tone—just like me.",
      technologies: ["Streamlit", "Google Gemini API", "Python", "LLM"],
      achievements: [
        "Mimics my conversational style to offer personalized empathy",
        "Structured JSON-based chat with emotionally intelligent responses",
        "Supports Hindi and English with smooth switching",
        "Clearly defined mental health scope and friendly UI/UX",
      ],
      github: "https://github.com/Akshat-Raii/BuddyMind",
    },
    {
      title: "Chat Analyzer",
      period: "July 2024 - August 2024",
      description:
        "Comprehensive chat data visualization tool providing insights into user behavior and communication patterns.",
      technologies: ["Python", "Pandas", "Matplotlib", "NLP"],
      achievements: [
        "40% more insights into user behavior",
        "Advanced activity mapping",
        "Statistical analysis capabilities",
        "Word cloud generation",
      ],
      github: "https://github.com/Akshat-Raii/ChatAnalyzer",
    },
    {
      title: "Brush Splash",
      period: "July 2024 - August 2024",
      description:
        "Interactive drawing application using hand gestures with real-time drawing and erasing capabilities.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Mediapipe"],
      achievements: [
        "20% enhanced user engagement",
        "Real-time gesture recognition",
        "35% improved user creativity",
        "Customizable brush and color options",
      ],
      github: "https://github.com/Akshat-Raii/BrushSplash",
    },
    {
      title: "Attendance Automation",
      period: "Nov 2023 - Jan 2024",
      description: "Face recognition system for automated attendance with Firebase integration and Tkinter GUI.",
      technologies: ["OpenCV", "Firebase", "Face Recognition", "Tkinter"],
      achievements: [
        "95% attendance accuracy improvement",
        "40% enhanced record accuracy",
        "30% reduced data entry time",
        "Low-light environment compatibility",
      ],
      github: "https://github.com/Akshat-Raii/Attendance-Automation-using-Face-Detection",
    },
  ]

  const skills = {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "BashScript"],
    technologies: [
      "FullStack Development",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LangChain",
      "DSA",
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Linux",
    ],
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const subject = encodeURIComponent("Portfolio Feedback")
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`,
    )
    window.open(`mailto:akshatrai7feb@gmail.com?subject=${subject}&body=${body}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact", "feedback"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-mono">
      {/* Manga-style halftone background pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,black_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>

      {/* Navigation - Mobile optimized */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl sm:text-3xl font-black transform -skew-x-12 bg-black text-white px-3 sm:px-4 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              AR
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 lg:px-4 py-2 border-2 border-black font-bold transition-all hover:bg-black hover:text-white transform hover:-skew-x-12 text-sm lg:text-base ${
                    activeSection === item.toLowerCase() ? "bg-black text-white -skew-x-12" : "bg-white text-black"
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t-2 border-black"
            >
              <div className="flex flex-col space-y-2">
                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-3 border-2 border-black font-bold transition-all text-left transform -skew-x-6 ${
                      activeSection === item.toLowerCase()
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mobile optimized */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto z-10 max-w-4xl">
          {/* Main hero panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative border-4 sm:border-8 border-black bg-white p-4 sm:p-8 md:p-16 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Speed lines background - reduced on mobile */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-black opacity-10 sm:opacity-20"
                  style={{
                    width: "1px",
                    height: "100%",
                    left: `${5 + i * 9}%`,
                    transform: `rotate(${-15 + Math.random() * 30}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 transform -skew-y-2">
                <span className="block">AKSHAT</span>
                <span className="block transform skew-y-2">RAI</span>
              </h1>

              {/* Speech bubble - mobile optimized */}
              <div className="relative inline-block bg-white border-2 sm:border-4 border-black p-3 sm:p-6 rounded-2xl sm:rounded-3xl mt-4 sm:mt-8 transform rotate-1 max-w-full">
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] sm:border-l-[20px] border-r-[10px] sm:border-r-[20px] border-t-[10px] sm:border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                <div className="absolute -bottom-1 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] sm:border-l-[16px] border-r-[8px] sm:border-r-[16px] border-t-[8px] sm:border-t-[16px] border-l-transparent border-r-transparent border-t-white"></div>
                <p className="text-sm sm:text-xl md:text-2xl font-bold">
                  COMPUTER SCIENCE STUDENT
                  <br />
                  Code that thinks • Systems that scale
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                <Button
                  size="lg"
                  className="bg-black text-white border-2 sm:border-4 border-black font-black text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 transform -skew-x-12 hover:skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => scrollToSection("projects")}
                >
                  VIEW PROJECTS!
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 sm:border-4 border-black bg-white text-black font-black text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 transform skew-x-12 hover:-skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => window.open("mailto:akshatrai7feb@gmail.com")}
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  CONTACT ME!
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Action lines and effects - mobile optimized */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-10 sm:top-20 right-5 sm:right-10 text-3xl sm:text-6xl font-black transform rotate-12"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              ★
            </motion.div>
            <motion.div
              className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 text-2xl sm:text-4xl font-black transform -rotate-12"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              ★
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Mobile optimized */}
      <section id="about" className="py-10 sm:py-20 relative z-10 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black transform -skew-x-12 bg-black text-white inline-block px-4 sm:px-8 py-2 sm:py-4">
                ABOUT ME
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Left panel - mobile stacked */}
              <div className="border-2 sm:border-4 border-black bg-white p-4 sm:p-8 transform rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 border-b-2 sm:border-b-4 border-black pb-2">
                    MY STORY
                  </h3>
                  <p className="text-sm sm:text-lg font-bold leading-relaxed mb-3 sm:mb-4">
                    Curious mind and code enthusiast, driven by a passion for intelligent systems.
                  </p>
                  <p className="text-sm sm:text-lg font-bold leading-relaxed">
                    On a mission to teach machines to think and solve real problems—exploring the frontier of AI, one neural net at a time.
                  </p>

                  {/* Thought bubble - mobile optimized */}
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white border-2 sm:border-4 border-black rounded-full p-2 sm:p-4 transform rotate-12">
                    <Code className="w-4 h-4 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>

              {/* Right panel - mobile stacked */}
              <div className="border-2 sm:border-4 border-black bg-white p-4 sm:p-8 transform -rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 border-b-2 sm:border-b-4 border-black pb-2">
                  POWER-UPS
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <a href="/Akshat_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-black text-white border-2 sm:border-4 border-black font-black text-sm sm:text-lg py-3 sm:py-4 transform -skew-x-6 hover:skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      DOWNLOAD RESUME
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/akshat-raii" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full border-2 sm:border-4 border-black bg-white text-black font-black text-sm sm:text-lg py-3 sm:py-4 transform skew-x-6 hover:-skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      LINKEDIN PROFILE
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Mobile optimized */}
      <section id="projects" className="py-10 sm:py-20 relative z-10 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black transform skew-x-12 bg-black text-white inline-block px-4 sm:px-8 py-2 sm:py-4">
                PROJECTS
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`border-2 sm:border-4 border-black bg-white p-4 sm:p-6 transform ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-3xl font-black mb-2 transform -skew-x-6">{project.title}</h3>
                      <p className="text-sm sm:text-lg font-bold bg-black text-white px-2 sm:px-3 py-1 inline-block transform skew-x-6">
                        {project.period}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 sm:border-4 border-black bg-white text-black font-black transform -rotate-12 hover:rotate-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-3 w-3 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                      CODE!
                    </Button>
                  </div>

                  {/* Speech bubble for description - mobile optimized */}
                  <div className="relative bg-white border-2 sm:border-4 border-black p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 transform rotate-1">
                    <div className="absolute -top-2 sm:-top-3 left-4 sm:left-8 w-0 h-0 border-l-[8px] sm:border-l-[15px] border-r-[8px] sm:border-r-[15px] border-b-[8px] sm:border-b-[15px] border-l-transparent border-r-transparent border-b-black"></div>
                    <div className="absolute -top-1 sm:-top-2 left-4 sm:left-8 w-0 h-0 border-l-[6px] sm:border-l-[12px] border-r-[6px] sm:border-r-[12px] border-b-[6px] sm:border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
                    <p className="font-bold text-sm sm:text-lg">{project.description}</p>
                  </div>

                  <div className="grid gap-4 sm:gap-6">
                    <div>
                      <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 border-b-2 border-black pb-1">
                        TECH STACK:
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-black text-white border-2 border-black font-bold px-2 sm:px-3 py-1 transform -skew-x-12 text-xs sm:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 border-b-2 border-black pb-1">
                        ACHIEVEMENTS:
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start font-bold text-sm sm:text-base">
                            <span className="w-2 h-2 sm:w-4 sm:h-4 bg-black mr-2 sm:mr-3 transform rotate-45 flex-shrink-0 mt-1 sm:mt-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Mobile optimized */}
      <section id="skills" className="py-10 sm:py-20 relative z-10 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black transform -skew-x-12 bg-black text-white inline-block px-4 sm:px-8 py-2 sm:py-4">
                SKILLS
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="border-2 sm:border-4 border-black bg-white p-4 sm:p-8 transform rotate-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center">
                  <Code className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
                  LANGUAGES
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.languages.map((lang) => (
                    <Badge
                      key={lang}
                      className="bg-black text-white border-2 border-black font-black px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-lg transform -skew-x-12"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-2 sm:border-4 border-black bg-white p-4 sm:p-8 transform -rotate-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 flex items-center">
                  <Brain className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8" />
                  TECH STACK & TOOLS
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-black text-white border-2 border-black font-black px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-lg transform skew-x-12"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Mobile optimized */}
      <section id="contact" className="py-10 sm:py-20 relative z-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black transform skew-x-12 bg-black text-white inline-block px-4 sm:px-8 py-2 sm:py-4">
                CONTACT
              </h2>
            </div>

            <div className="border-2 sm:border-4 border-black bg-white p-4 sm:p-8 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Speech bubble - mobile optimized */}
              <div className="relative bg-white border-2 sm:border-4 border-black p-3 sm:p-6 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 transform -rotate-1">
                <div className="absolute -bottom-2 sm:-bottom-4 left-1/4 w-0 h-0 border-l-[10px] sm:border-l-[20px] border-r-[10px] sm:border-r-[20px] border-t-[10px] sm:border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                <div className="absolute -bottom-1 sm:-bottom-3 left-1/4 w-0 h-0 border-l-[8px] sm:border-l-[16px] border-r-[8px] sm:border-r-[16px] border-t-[8px] sm:border-t-[16px] border-l-transparent border-r-transparent border-t-white"></div>
                <p className="text-lg sm:text-2xl font-black text-center">
                  LET'S CONNECT AND CREATE SOMETHING AMAZING TOGETHER!
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-black text-white border-2 sm:border-4 border-black font-black text-sm sm:text-lg py-4 sm:py-6 transform -skew-x-12 hover:skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => window.open("mailto:akshatrai7feb@gmail.com")}
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  EMAIL
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 sm:border-4 border-black bg-white text-black font-black text-sm sm:text-lg py-4 sm:py-6 transform skew-x-12 hover:-skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => window.open("https://linkedin.com/in/akshat-raii", "_blank")}
                >
                  <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  LINKEDIN
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 sm:border-4 border-black bg-white text-black font-black text-sm sm:text-lg py-4 sm:py-6 transform -skew-x-12 hover:skew-x-0 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  onClick={() => window.open("https://github.com/akshat-raii", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  GITHUB
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section - Mobile optimized */}
      <section id="feedback" className="py-10 sm:py-20 relative z-10 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black transform -skew-x-12 bg-black text-white inline-block px-4 sm:px-8 py-2 sm:py-4">
                FEEDBACK
              </h2>
            </div>

            <div className="border-2 sm:border-4 border-black bg-white p-4 sm:p-8 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Speech bubble - mobile optimized */}
              <div className="relative bg-white border-2 sm:border-4 border-black p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 transform rotate-2">
                <div className="absolute -top-2 sm:-top-3 left-6 sm:left-12 w-0 h-0 border-l-[8px] sm:border-l-[15px] border-r-[8px] sm:border-r-[15px] border-b-[8px] sm:border-b-[15px] border-l-transparent border-r-transparent border-b-black"></div>
                <div className="absolute -top-1 sm:-top-2 left-6 sm:left-12 w-0 h-0 border-l-[6px] sm:border-l-[12px] border-r-[6px] sm:border-r-[12px] border-b-[6px] sm:border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
                <p className="text-lg sm:text-xl font-black">SHARE YOUR THOUGHTS WITH ME!</p>
              </div>

              <form onSubmit={handleFeedbackSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <Input
                    name="name"
                    placeholder="YOUR NAME"
                    required
                    className="border-2 sm:border-4 border-black bg-white text-black placeholder:text-gray-600 font-bold text-sm sm:text-lg py-3 sm:py-4 transform -skew-x-6 focus:skew-x-0 transition-transform"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="YOUR EMAIL"
                    required
                    className="border-2 sm:border-4 border-black bg-white text-black placeholder:text-gray-600 font-bold text-sm sm:text-lg py-3 sm:py-4 transform skew-x-6 focus:-skew-x-0 transition-transform"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="YOUR MESSAGE..."
                  required
                  rows={4}
                  className="border-2 sm:border-4 border-black bg-white text-black placeholder:text-gray-600 font-bold text-sm sm:text-lg p-3 sm:p-4 transform rotate-1 focus:-rotate-0 transition-transform"
                />
                <Button
                  type="submit"
                  className="w-full bg-black text-white border-2 sm:border-4 border-black font-black text-lg sm:text-xl py-4 sm:py-6 transform -skew-x-12 hover:skew-x-0 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  SEND MESSAGE!
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Mobile optimized */}
      <footer className="py-6 sm:py-8 border-t-2 sm:border-t-4 border-black relative z-10 bg-white px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-xl font-black transform -skew-x-12 bg-black text-white inline-block px-3 sm:px-6 py-1 sm:py-2">
            © 2025 Akshat Rai — Designed to Think. Built to Last.
          </p>
        </div>
      </footer>
    </div>
  )
}