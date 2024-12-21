import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Fitness App",
      description: "Cross-platform mobile app built with Flutter",
      image: "/api/placeholder/600/400"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration using OpenAI",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio website generator with custom themes",
      image: "/api/placeholder/600/400"
    }
  ];

  const skills = [
    {
      title: "App Development",
      description: "Flutter • React Native • iOS • Android",
      color: "text-purple-400"
    },
    {
      title: "Web Development",
      description: "React • Next.js • Node.js • MongoDB",
      color: "text-blue-400"
    },
    {
      title: "UI/UX Design",
      description: "Figma • Adobe XD • Sketch",
      color: "text-green-400"
    }
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: "$999",
      features: [
        "5 Pages",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "Mobile Friendly"
      ]
    },
    {
      title: "Professional",
      price: "$2499",
      features: [
        "10 Pages",
        "Advanced Design",
        "Advanced SEO",
        "CMS Integration",
        "E-commerce Features",
        "Custom Animations"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "Priority Support",
        "Custom Integration",
        "Advanced Security",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <FadeIn>
          <div className="container mx-auto px-6 relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              <TypeWriter text="Rehyan Yadav" speed={150} />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Cross Platform App Developer & Tech Innovator
            </p>
            <button
  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
  onClick={() => document.getElementById("connect").scrollIntoView({ behavior: "smooth" })}
>
  Get In Touch
</button>

          </div>
        </FadeIn>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-16 text-center">
              My Skills
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={index * 200}>
                <div className="p-6 bg-gray-900 rounded-xl transform hover:-translate-y-2 transition-all">
                  <h3 className={`text-2xl font-bold mb-4 ${skill.color}`}>
                    {skill.title}
                  </h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-16 text-center">
              Web Development Pricing
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FadeIn key={index} delay={index * 200}>
                <div className={`p-8 bg-gray-800 rounded-xl transition-all ${
                  plan.isPopular
                    ? "border border-blue-500 transform scale-105"
                    : "border border-purple-500/20 hover:border-purple-500"
                }`}>
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <p className="text-4xl font-bold mb-8">{plan.price}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-16 text-center">
              Featured Projects
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={index * 200}>
                <div className="group relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 bg-gray-900">
  <div className="container mx-auto px-6">
    <FadeIn>
      <h2 className="text-4xl font-bold mb-16 text-center">
        Connect With Me
      </h2>
    </FadeIn>
    <div className="max-w-2xl mx-auto">
      <FadeIn delay={200}>
        <div className="mb-8 text-center">
          <p className="text-xl mb-4">Mail us at:</p>
          <a
            href="mailto:codesalpha92@gmail.com"
            className="text-2xl text-purple-400 hover:text-purple-300 transition-colors"
          >
            codesalpha92@gmail.com
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={400}>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transform hover:-translate-y-1 transition-all group"
          >
            <Github className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
          </a>
          <a
            href="#"
            className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transform hover:-translate-y-1 transition-all group"
          >
            <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
          </a>
          <a
            href="#"
            className="p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transform hover:-translate-y-1 transition-all group"
          >
            <Mail className="w-8 h-8 text-pink-400 group-hover:text-pink-300" />
          </a>
        </div>
      </FadeIn>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Rehyan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;