// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl animate-cyber-slide-up">
          <h1 className="text-6xl md:text-7xl font-bold neon-text mb-6 animate-neon-flicker">
            Defend Your Digital World
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master cybersecurity through interactive learning, hands-on tools, and expert guidance. 
            Become the guardian of your digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quiz" className="cyber-button inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg">
              Start Learning
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/tools" className="cyber-button inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg">
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold neon-text text-center mb-12 animate-cyber-slide-up">
            Your Cybersecurity Arsenal
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card animate-cyber-scale-in">
              <div className="text-center">
                <div className="text-primary mb-6 animate-neon-flicker">
                  <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold neon-text-secondary mb-4">Interactive Quizzes</h3>
                <p className="text-muted-foreground">
                  Test your knowledge with engaging cybersecurity quizzes covering basics, threats, and safety practices.
                </p>
              </div>
            </div>
            <div className="cyber-card animate-cyber-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                <div className="text-primary mb-6 animate-neon-flicker">
                  <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold neon-text-secondary mb-4">Security Tools</h3>
                <p className="text-muted-foreground">
                  Hands-on experience with password managers, VPNs, firewalls, and other essential security tools.
                </p>
              </div>
            </div>
            <div className="cyber-card animate-cyber-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <div className="text-primary mb-6 animate-neon-flicker">
                  <svg className="h-16 w-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold neon-text-secondary mb-4">Expert Learning</h3>
                <p className="text-muted-foreground">
                  Learn from cybersecurity experts through comprehensive guides, tips, and real-world scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Tips Carousel */}
      <section className="py-16 px-4 bg-cyber-darker/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold neon-text mb-12 animate-cyber-slide-up">
            Daily Cyber Defense Tips
          </h2>
          <div className="cyber-card animate-cyber-scale-in">
            <div className="space-y-8">
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-bold neon-text-secondary mb-3">Password Security</h3>
                <p className="text-muted-foreground">
                  Use unique, complex passwords for each account. Consider using a password manager to generate and store secure passwords safely.
                </p>
              </div>
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-bold neon-text-secondary mb-3">Email Safety</h3>
                <p className="text-muted-foreground">
                  Never click suspicious links or download attachments from unknown senders. When in doubt, verify the sender's identity through a separate channel.
                </p>
              </div>
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-bold neon-text-secondary mb-3">Software Updates</h3>
                <p className="text-muted-foreground">
                  Keep your operating system and software updated. Security patches often fix vulnerabilities that attackers could exploit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl animate-cyber-slide-up">
          <h2 className="text-4xl font-bold neon-text mb-6">
            Ready to Become a Cyber Guardian?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of learners who are building their cybersecurity skills through our interactive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quiz" className="cyber-button inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg">
              Take Your First Quiz
            </a>
            <a href="/login" className="cyber-button inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg">
              Create Account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
