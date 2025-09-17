import { Shield, Target, Zap, Users, Globe, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Comprehensive Learning",
      description: "Interactive quizzes and hands-on tools to master cybersecurity fundamentals"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Real-World Scenarios",
      description: "Practice with simulated cyber threats and security challenges"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Cutting-Edge Technology",
      description: "Stay updated with the latest cybersecurity trends and technologies"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Community Driven",
      description: "Learn alongside fellow cyber defenders in our educational community"
    }
  ];

  const stats = [
    { label: "Security Topics", value: "50+" },
    { label: "Interactive Quizzes", value: "15+" },
    { label: "Cyber Tools", value: "10+" },
    { label: "Learning Hours", value: "100+" }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Cybersecurity Expert",
      specialization: "Penetration Testing",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      role: "Security Analyst",
      specialization: "Threat Intelligence",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      role: "Network Security",
      specialization: "Infrastructure Protection",
      avatar: "MR"
    },
    {
      name: "Emily Davis",
      role: "Security Educator",
      specialization: "Training & Awareness",
      avatar: "ED"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-cyber-slide-up">
        <div className="flex justify-center mb-6">
          <Shield className="h-24 w-24 text-primary animate-neon-flicker" />
        </div>
        <h1 className="text-5xl font-bold neon-text mb-6">About Cyber Guardian</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Empowering the next generation of cybersecurity professionals through interactive learning, 
          hands-on practice, and comprehensive education. Join us in defending the digital world.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <Card className="cyber-card animate-cyber-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl neon-text mb-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4 animate-neon-flicker" />
                <h3 className="text-xl font-bold neon-text-secondary mb-2">Global Security</h3>
                <p className="text-muted-foreground">
                  Building a safer digital world through education and awareness
                </p>
              </div>
              <div className="text-center">
                <Lock className="h-16 w-16 text-primary mx-auto mb-4 animate-neon-flicker" />
                <h3 className="text-xl font-bold neon-text-secondary mb-2">Privacy Protection</h3>
                <p className="text-muted-foreground">
                  Teaching individuals how to protect their digital privacy and data
                </p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4 animate-neon-flicker" />
                <h3 className="text-xl font-bold neon-text-secondary mb-2">Community Building</h3>
                <p className="text-muted-foreground">
                  Creating a community of cyber-aware individuals and professionals
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="cyber-card text-center animate-cyber-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="text-4xl font-bold neon-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold neon-text text-center mb-12">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="cyber-card animate-cyber-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="text-primary animate-neon-flicker mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="neon-text-secondary">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold neon-text text-center mb-12">Meet Our Cyber Experts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="cyber-card text-center animate-cyber-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <span className="text-2xl font-bold neon-text">{member.avatar}</span>
                </div>
                <CardTitle className="neon-text-secondary">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
                <Badge variant="outline" className="text-primary border-primary mt-2">
                  {member.specialization}
                </Badge>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="mb-16">
        <Card className="cyber-card animate-cyber-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl neon-text mb-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We envision a world where every individual has the knowledge and tools to protect themselves 
              in the digital realm. Through innovative education and practical training, we're building 
              the next generation of cyber guardians who will safeguard our digital future.
            </p>
            <div className="pt-6">
              <h3 className="text-xl font-bold neon-text-secondary mb-4">Future Plans</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-muted/10 rounded border border-border">
                  <h4 className="font-medium neon-text mb-2">Advanced Simulations</h4>
                  <p className="text-muted-foreground">Real-world cyber attack simulations for hands-on learning</p>
                </div>
                <div className="p-4 bg-muted/10 rounded border border-border">
                  <h4 className="font-medium neon-text mb-2">Certification Programs</h4>
                  <p className="text-muted-foreground">Industry-recognized cybersecurity certifications</p>
                </div>
                <div className="p-4 bg-muted/10 rounded border border-border">
                  <h4 className="font-medium neon-text mb-2">Mobile Learning</h4>
                  <p className="text-muted-foreground">Learn cybersecurity on-the-go with our mobile app</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center animate-cyber-slide-up">
        <Card className="cyber-card">
          <CardContent className="pt-8">
            <h2 className="text-2xl font-bold neon-text mb-4">Join the Cyber Guardian Community</h2>
            <p className="text-muted-foreground mb-6">
              Ready to become a digital defender? Start your cybersecurity journey with our interactive quizzes and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quiz" className="cyber-button inline-flex items-center px-6 py-3 rounded-lg font-medium">
                Take a Quiz
              </a>
              <a href="/tools" className="cyber-button inline-flex items-center px-6 py-3 rounded-lg font-medium">
                Explore Tools
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;