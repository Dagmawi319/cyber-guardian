import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting Cyber Guardian. We'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@cyberguardian.edu",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-CYBER",
      description: "Mon-Fri 9AM-5PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Digital Security Campus",
      description: "Cybersecurity Education Center"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with cybersecurity learning?",
      answer: "Begin with our Cyber Basics quiz to assess your current knowledge, then explore our interactive tools and educational resources."
    },
    {
      question: "Are the quizzes suitable for beginners?",
      answer: "Yes! We have quizzes designed for all skill levels, from complete beginners to advanced practitioners."
    },
    {
      question: "Can I use these resources for educational purposes?",
      answer: "Absolutely! Our platform is designed for educational use in schools, universities, and training programs."
    },
    {
      question: "Do you offer certification programs?",
      answer: "We're currently developing certification programs that will be available in the near future. Stay tuned for updates!"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-cyber-slide-up">
        <Shield className="h-16 w-16 text-primary mx-auto mb-6 animate-neon-flicker" />
        <h1 className="text-4xl font-bold neon-text mb-4">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about cybersecurity? Need help with our platform? 
          We're here to help you on your cyber defense journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="animate-cyber-scale-in">
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="neon-text flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="cyber-input"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="cyber-input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="cyber-input"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="cyber-input resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full cyber-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & FAQ */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="animate-cyber-scale-in" style={{ animationDelay: '0.1s' }}>
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="neon-text">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our cybersecurity education team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="text-primary animate-neon-flicker">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium neon-text-secondary">{info.title}</h3>
                      <p className="text-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="animate-cyber-scale-in" style={{ animationDelay: '0.2s' }}>
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="neon-text">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-medium neon-text-secondary mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="animate-cyber-scale-in" style={{ animationDelay: '0.3s' }}>
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="neon-text">Quick Links</CardTitle>
                <CardDescription>
                  Jump directly to what you're looking for
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="/quiz" className="block p-3 bg-muted/10 rounded border border-border hover:border-primary transition-colors">
                  <div className="font-medium neon-text-secondary">Take a Quiz</div>
                  <div className="text-sm text-muted-foreground">Test your cybersecurity knowledge</div>
                </a>
                <a href="/tools" className="block p-3 bg-muted/10 rounded border border-border hover:border-primary transition-colors">
                  <div className="font-medium neon-text-secondary">Explore Tools</div>
                  <div className="text-sm text-muted-foreground">Interactive security tools and demos</div>
                </a>
                <a href="/about" className="block p-3 bg-muted/10 rounded border border-border hover:border-primary transition-colors">
                  <div className="font-medium neon-text-secondary">Learn More</div>
                  <div className="text-sm text-muted-foreground">About our mission and team</div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="mt-16 text-center animate-cyber-slide-up">
        <Card className="cyber-card max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4 animate-neon-flicker" />
            <h3 className="text-xl font-bold neon-text mb-2">Security Emergency?</h3>
            <p className="text-muted-foreground mb-4">
              If you're experiencing an active cybersecurity incident, contact your local authorities 
              or cybersecurity incident response team immediately.
            </p>
            <p className="text-sm text-muted-foreground">
              This platform is for educational purposes only and does not provide emergency cybersecurity response services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;