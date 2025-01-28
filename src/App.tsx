import { Code, Layout, Server, Smartphone, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Section } from './components/Section';
import { SkillCard } from './components/SkillCard';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './hooks/useTheme';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer & UI/UX Designer";

  useEffect(() => {
    setIsVisible(true);
    let currentText = '';
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
        setTimeout(typeText, 50);
      }
    };

    setTimeout(typeText, 500);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300">
        <ThemeToggle />
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed-more" />
        </div>
        
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent animate-pulse" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 backdrop-blur-3xl" />
          </div>
          
          <div className={`text-center relative z-10 px-4 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full glow bg-gradient-to-r from-primary-500 to-purple-500 p-1 floating">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 text-primary-500 animate-spin-slow">
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient animate-gradient">
                John Doe
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 typing-cursor">
                {typedText}
              </p>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-125">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-125">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-125">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section title="About Me" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 glow card-hover">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate developer with 5+ years of experience in creating beautiful and functional web applications.
                I specialize in React, Node.js, and modern web technologies. My approach combines technical expertise with
                creative problem-solving to build exceptional digital experiences.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Skills" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard
                icon={<Code className="w-8 h-8" />}
                title="Frontend Development"
                description="React, Vue.js, TypeScript, Tailwind CSS"
                technologies={['React', 'Vue.js', 'TypeScript', 'Tailwind']}
              />
              <SkillCard
                icon={<Server className="w-8 h-8" />}
                title="Backend Development"
                description="Node.js, Python, PostgreSQL, MongoDB"
                technologies={['Node.js', 'Python', 'PostgreSQL', 'MongoDB']}
              />
              <SkillCard
                icon={<Layout className="w-8 h-8" />}
                title="UI/UX Design"
                description="Figma, Adobe XD, User Research"
                technologies={['Figma', 'Adobe XD', 'Sketch', 'Principle']}
              />
              <SkillCard
                icon={<Smartphone className="w-8 h-8" />}
                title="Mobile Development"
                description="React Native, Flutter"
                technologies={['React Native', 'Flutter', 'iOS', 'Android']}
              />
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Get in Touch" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative z-10 max-w-md mx-auto">
            <form className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 glow card-hover">
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:text-white backdrop-blur-lg transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-gray-300 bg-white/50 dark:bg-gray-700/50 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:text-white backdrop-blur-lg transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Section>

        {/* Footer */}
        <footer className="relative overflow-hidden bg-gray-900 text-gray-400 py-12">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <p className="text-gradient font-medium">© 2024 John Doe. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;