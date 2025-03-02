import React from 'react';
import { Calendar, Clock, Users, Award, Github, Mail, Code, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const fallbackImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

function App() {
  const problemStatements = [
    {
      id: 1,
      title: "Smart Waste Management System",
      description: "Develop a tech-driven solution to optimize waste collection and recycling, reducing environmental impact.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "AI for Disaster Prediction",
      description: "Build a predictive model using AI/ML to forecast natural disasters and minimize risks.",
      image: "https://images.unsplash.com/photo-1580974852861-c381510bc98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "IoT-based Smart Campus",
      description: "Design a system to automate energy consumption, attendance tracking, and security in a college environment.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Blockchain for Secure Voting",
      description: "Implement a blockchain-based system for secure and transparent voting in institutional elections.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Assistive Tech for the Differently Abled",
      description: "Create solutions using AR/VR or AI to enhance accessibility and empower differently-abled individuals.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Green Energy Optimization",
      description: "Develop an AI-driven system to monitor and optimize renewable energy usage, making it more efficient.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Personalized AI Chat Companion",
      description: "Develop an AI chatbot that learns user preferences and adapts its responses for a more engaging experience.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Intelligent Traffic Management System",
      description: "Design an AI-powered system to analyze traffic patterns, reduce congestion, and enhance road safety.",
      image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Decentralized Content Verification",
      description: "Build a blockchain-based platform to verify the authenticity of news and online content to combat misinformation.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "AI-Powered Resume Screening System",
      description: "Develop a smart recruitment tool that evaluates resumes based on skills, experience, and job fit using AI.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "Open Innovation Challenge",
      description: "Showcase your innovative ideas in any domain using emerging technologies to solve real-world problems.",
      image: "https://plus.unsplash.com/premium_photo-1682309536401-f47fc8b7b92d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3BlbiUyMGlubm92YXRpb258ZW58MHx8MHx8fDA%3D"
    }
  ];

  const timelineEvents = [
    {
      title: "Registration Deadline",
      date: "March 5, 2025",
      icon: <Calendar className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Online Submission Deadline",
      date: "March 7, 2025 (by 8:00 PM)",
      icon: <Clock className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Results Announcement",
      date: "March 9, 2025 (10:00 AM)",
      icon: <Users className="w-5 h-5 text-indigo-500" />
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.header 
        className="container mx-auto px-4 py-16 md:py-24 text-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            InnovateX Hackathon 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Innovate. Create. Transform.
          </p>
          <div className="inline-block px-4 py-2 bg-indigo-600 bg-opacity-70 rounded-lg mb-8">
            <span className="text-lg font-semibold">Phase 1 Registration Now Open!</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <a 
              href="#register" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-colors duration-300"
            >
              Register Now
            </a>
            <a 
              href="#problems" 
              className="px-8 py-3 bg-transparent border border-indigo-400 hover:bg-indigo-900 rounded-full font-medium transition-colors duration-300"
            >
              View Challenges
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-3">
                  {event.icon}
                  <h3 className="ml-2 font-semibold text-lg">{event.title}</h3>
                </div>
                <p className="text-gray-300">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Problem Statements */}
      <section id="problems" className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Problem Statements</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Participants can choose from the following problem statements to showcase their innovation and technical skills.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {problemStatements.map((problem) => (
            <motion.div 
              key={problem.id}
              variants={fadeInUp}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 overflow-hidden"
            >
              <div className="h-40 -mx-6 -mt-6 mb-6 relative overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = fallbackImage;
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-30"></div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl">{problem.title}</h3>
                <span className="bg-indigo-600 text-xs font-bold px-2 py-1 rounded-full">#{problem.id}</span>
              </div>
              <p className="text-gray-300">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Guidelines */}
      <motion.section 
        className="container mx-auto px-4 py-16 bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-2xl my-16 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Participation Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-indigo-400 mr-3" />
                <h3 className="font-bold text-xl">Team Size</h3>
              </div>
              <p className="text-gray-300">2-4 members per team (Separate teams for boys and girls).</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <Github className="w-6 h-6 text-indigo-400 mr-3" />
                <h3 className="font-bold text-xl">Submission Format</h3>
              </div>
              <p className="text-gray-300">2-minute video + GitHub link to the project.</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-indigo-400 mr-3" />
                <h3 className="font-bold text-xl">Prizes</h3>
              </div>
              <p className="text-gray-300">Winning teams will receive exciting prizes and an opportunity to participate in IPC - Phase II.</p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-indigo-400 mr-3" />
                <h3 className="font-bold text-xl">Evaluation</h3>
              </div>
              <p className="text-gray-300">Online evaluation of submitted projects.</p>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Registration */}
      <motion.section 
        id="register" 
        className="container mx-auto px-4 py-16 text-center relative"
        {...fadeInUp}
      >
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now!</h2>
          <p className="text-gray-300 mb-8">Don't miss this opportunity to showcase your skills and win exciting prizes.</p>
          
          <div className="bg-indigo-900 bg-opacity-50 p-4 rounded-lg mb-8">
            <p className="text-lg font-medium">Phase 1 Registration is now open!</p>
          </div>
          
          <a 
            href="https://forms.gle/n2ZNF8v5p95QNeydA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Registration Link
          </a>
          
          <div className="mt-12 p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
            <h3 className="font-bold text-xl mb-4">For queries, contact</h3>
            <p className="font-medium">P ARTHI DEVARANI</p>
            <div className="flex items-center justify-center mt-2">
              <Mail className="w-5 h-5 text-indigo-400 mr-2" />
              <a href="mailto:arthidevaraniece@rmkcet.ac.in" className="text-indigo-300 hover:text-indigo-200">
                arthidevaraniece@rmkcet.ac.in
              </a>
            </div>
            <p className="text-gray-400 mt-2">(Coding Club Coordinator)</p>
            <p className="text-gray-400 mt-1">Department of Electronics and Communication Engineering,</p>
            <p className="text-gray-400">R.M.K. College of Engineering and Technology</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 py-8 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© InnovateX 2025 Hackathon. All rights reserved.</p>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="R.M.K. College of Engineering and Technology" 
              className="h-16 mx-auto rounded-lg opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
