import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Menu, X, ArrowRight, Code, Cloud, Users, Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import './App.css'

// Import images
import heroImage from './assets/XoKJn7y8Mwp1.jpg' // Tech innovation hero
import aboutImage from './assets/AtFrsrFH8Zts.jpg' // Team collaboration
import officeImage from './assets/B95hMF9nyhMp.jpg' // Modern office
import serviceImage1 from './assets/QLxXKDL0Fo0o.png' // Software development
import serviceImage2 from './assets/ijssQVXlqYEE.jpg' // Cloud computing
import serviceImage3 from './assets/Vq30aPVcQwGd.png' // Tech consulting
import teamImage1 from './assets/TWCkzIbzamml.jpg' // Team meeting
import teamImage2 from './assets/OwmDbnOG8ggY.jpg' // Tech team

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">
              Bilnycklar Tech
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Bilnycklar Tech
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            Empowering businesses with cutting-edge technology solutions
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in-up animation-delay-500">
            We deliver innovative software development, cloud computing, and technology consulting services that drive digital transformation and business growth.
          </p>
          <Button 
            size="lg" 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg animate-fade-in-up animation-delay-700"
            onClick={() => scrollToSection('services')}
          >
            Explore Our Services
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Bilnycklar Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to helping businesses navigate the digital landscape with innovative solutions and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={aboutImage} 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                At Bilnycklar Tech, we believe in the transformative power of technology. Our mission is to empower businesses of all sizes with innovative solutions that drive growth, efficiency, and competitive advantage in today's digital economy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with strategic thinking to deliver solutions that not only meet current needs but also position our clients for future success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="text-cyan-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation</h4>
                    <p className="text-gray-600">We stay at the forefront of technology trends to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-cyan-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Collaboration</h4>
                    <p className="text-gray-600">We work closely with our clients as partners in their digital transformation journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="text-cyan-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Excellence</h4>
                    <p className="text-gray-600">We maintain the highest standards in code quality, security, and performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={officeImage} 
                alt="Modern office workspace" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={serviceImage1} 
                    alt="Software Development" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="text-blue-600" size={24} />
                  <span>Software Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Custom software solutions tailored to your business needs. From web applications to mobile apps, we build scalable, secure, and user-friendly software that drives results.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Web Application Development</li>
                  <li>• Mobile App Development</li>
                  <li>• API Development & Integration</li>
                  <li>• Legacy System Modernization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={serviceImage2} 
                    alt="Cloud Computing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="text-blue-600" size={24} />
                  <span>Cloud Computing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Harness the power of cloud technology to improve scalability, reduce costs, and enhance security. We help you migrate, optimize, and manage your cloud infrastructure.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Cloud Migration Services</li>
                  <li>• Infrastructure as Code</li>
                  <li>• DevOps & CI/CD</li>
                  <li>• Cloud Security & Monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={serviceImage3} 
                    alt="Technology Consulting" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="text-blue-600" size={24} />
                  <span>Technology Consulting</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strategic technology guidance to help you make informed decisions. Our experts provide insights on technology trends, architecture design, and digital transformation strategies.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Digital Transformation Strategy</li>
                  <li>• Technology Architecture Review</li>
                  <li>• Process Optimization</li>
                  <li>• Team Training & Support</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              onClick={() => scrollToSection('contact')}
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals who make innovation possible at Bilnycklar Tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <img 
                src={teamImage1} 
                alt="Development Team" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Development Team</h3>
              <p className="text-gray-600">
                Our skilled developers bring years of experience in cutting-edge technologies and best practices to every project.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={teamImage2} 
                alt="Strategy Team" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategy Team</h3>
              <p className="text-gray-600">
                Our strategic consultants help align technology solutions with business objectives for maximum impact and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with technology? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@bilnycklar.tech</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Tech Hub, Innovation District</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Github size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    We'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Company
                      </label>
                      <Input placeholder="Your Company" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">Bilnycklar Tech</div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with cutting-edge technology solutions
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">
                © 2024 Bilnycklar Tech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

