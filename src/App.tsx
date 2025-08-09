import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, ExternalLink, Award, Code, Briefcase, GraduationCap, User, Home, Contact } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [ 'about', 'skills', 'training', 'projects', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavItem = ({ id, icon: Icon, label }: { id: string; icon: any; label: string }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === id
          ? 'bg-orange-500 text-white shadow-lg'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-blue-900">Ashwin A</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <NavItem id="home" icon={Home} label="Home" />
              <NavItem id="about" icon={User} label="About" />
              <NavItem id="skills" icon={Code} label="Skills" />
              <NavItem id="training" icon={Briefcase} label="Training" />
              <NavItem id="projects" icon={Award} label="Projects" />
              <NavItem id="certifications" icon={GraduationCap} label="Certifications" />
              <NavItem id="achievements" icon={Award} label="Achievements" />
              <NavItem id="contact" icon={Contact} label="Contact" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <NavItem id="home" icon={Home} label="Home" />
              <NavItem id="about" icon={User} label="About" />
              <NavItem id="skills" icon={Code} label="Skills" />
              <NavItem id="training" icon={Briefcase} label="Training" />
              <NavItem id="projects" icon={Award} label="Projects" />
              <NavItem id="certifications" icon={GraduationCap} label="Certifications" />
              <NavItem id="achievements" icon={Award} label="Achievements" />
              <NavItem id="contact" icon={Contact} label="Contact" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Ashwin A
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8">
                Electronics & Communication Engineering Student
              </p>
              <p className="text-lg md:text-xl max-w-4xl mx-auto text-blue-100 leading-relaxed mb-12">
                Seeking an opportunity where I can make the best of my potential, learn, adapt, gain experience, and work with the highest ethical standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Education</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Degree:</strong> B.E. Electronics and Communication Engineering</p>
                  <p className="text-gray-700"><strong>Institution:</strong> Agni College of Technology</p>
                  <p className="text-gray-700"><strong>CGPA:</strong> 8.23</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-500" size={20} />
                    <span className="text-gray-700">ashwin@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-500" size={20} />
                    <span className="text-gray-700">+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="text-orange-500" size={20} />
                    <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Python', 'PCB Designing', 'Android Studio', 'Fusion 360', 'Arduino (Nano, Uno)'
            ].map((skill, index) => (
              <div key={skill} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Code className="text-orange-500 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Internships Section */}
      <section id="training" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training & Internships</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'NLCIL',
                field: 'Telecommunications',
                description: 'Gained hands-on experience in telecommunications systems and network infrastructure.'
              },
              {
                title: 'Lucas TVS',
                field: 'CNC Machining',
                description: 'Learned precision manufacturing techniques and computer-controlled machining processes.'
              },
              {
                title: 'Spark Invotech',
                field: 'Smart Incubator Development',
                description: 'Worked on IoT-based incubator systems with automated monitoring and control features.'
              }
            ].map((training, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Briefcase className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{training.title}</h3>
                <p className="text-orange-600 font-medium mb-3">{training.field}</p>
                <p className="text-gray-700">{training.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Irrigation System',
                type: 'Embedded + IoT',
                description: 'Automated irrigation system using sensors and IoT connectivity for efficient water management.'
              },
              {
                title: 'Smart Solar Tracker',
                type: 'Embedded System',
                description: 'Solar panel tracking system that maximizes energy efficiency by following sun movement.'
              },
              {
                title: 'Automated Incubator',
                type: 'Control System',
                description: 'Temperature and humidity controlled incubator with automated monitoring and alerts.'
              }
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <Award className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-orange-600 font-medium mb-3">{project.type}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'NPTEL - Sensors & Actuators (ELITE)',
              'Python Skill Rack',
              'Prompt Engineering',
              'Telecommunication Systems',
              'Embedded Workshop'
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <GraduationCap className="text-orange-500 mb-3" size={28} />
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                position: '1st Prize',
                event: 'Project Expo',
                description: 'Won first place for innovative project presentation and technical excellence.'
              },
              {
                position: '2nd Prize',
                event: 'Project Competition',
                description: 'Achieved second position in competitive project development challenge.'
              },
              {
                position: '3rd Prize',
                event: 'Blockchain Presentation',
                description: 'Secured third place for comprehensive blockchain technology presentation.'
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <Award className="text-orange-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{achievement.position}</h3>
                <p className="text-orange-600 font-medium mb-3">{achievement.event}</p>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-orange-500" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">ashwin@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-orange-500" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-orange-500" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200">
            © 2024 Ashwin A. All rights reserved. | Electronics & Communication Engineering Student
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;