import { useState } from 'react';
import { 
  Shield, 
  Key, 
  Globe, 
  Zap, 
  Lock, 
  Eye, 
  EyeOff, 
  Copy, 
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const tools: Tool[] = [
  {
    id: 'password-manager',
    title: 'Password Manager',
    description: 'Generate and check strong passwords for maximum security',
    icon: <Key className="h-8 w-8" />,
    category: 'Authentication'
  },
  {
    id: 'vpn-info',
    title: 'VPN Guide',
    description: 'Learn about Virtual Private Networks and online privacy',
    icon: <Globe className="h-8 w-8" />,
    category: 'Privacy'
  },
  {
    id: 'antivirus-scanner',
    title: 'Security Scanner',
    description: 'Simulate antivirus scanning and threat detection',
    icon: <Shield className="h-8 w-8" />,
    category: 'Protection'
  },
  {
    id: 'firewall-demo',
    title: 'Firewall Demo',
    description: 'Understanding network firewalls and traffic filtering',
    icon: <Zap className="h-8 w-8" />,
    category: 'Network Security'
  },
  {
    id: '2fa-auth',
    title: 'Two-Factor Authentication',
    description: 'Learn about 2FA and multi-factor authentication',
    icon: <Lock className="h-8 w-8" />,
    category: 'Authentication'
  }
];

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState([12]);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [scanning, setScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);
  const { toast } = useToast();

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = lowercase + uppercase + numbers;
    if (includeSymbols) chars += symbols;
    
    let newPassword = '';
    for (let i = 0; i < passwordLength[0]; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    setPassword(newPassword);
    toast({
      title: "Password Generated!",
      description: "Your secure password has been created.",
    });
  };

  const checkPasswordStrength = (pwd: string) => {
    let score = 0;
    const feedback = [];
    
    if (pwd.length >= 8) score += 1;
    else feedback.push("Add more characters (minimum 8)");
    
    if (/[a-z]/.test(pwd)) score += 1;
    else feedback.push("Add lowercase letters");
    
    if (/[A-Z]/.test(pwd)) score += 1;
    else feedback.push("Add uppercase letters");
    
    if (/[0-9]/.test(pwd)) score += 1;
    else feedback.push("Add numbers");
    
    if (/[^a-zA-Z0-9]/.test(pwd)) score += 1;
    else feedback.push("Add special characters");
    
    const strength = score <= 2 ? 'Weak' : score <= 4 ? 'Medium' : 'Strong';
    const color = score <= 2 ? 'destructive' : score <= 4 ? 'secondary' : 'default';
    
    return { score, strength, color, feedback };
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Password copied to clipboard.",
    });
  };

  const simulateScan = () => {
    setScanning(true);
    setScanResults([]);
    
    const mockResults = [
      { name: 'System Files', status: 'clean', time: 1000 },
      { name: 'Downloads Folder', status: 'clean', time: 1500 },
      { name: 'Browser Cache', status: 'warning', time: 2000 },
      { name: 'Temporary Files', status: 'clean', time: 2500 },
      { name: 'Registry Entries', status: 'clean', time: 3000 },
    ];

    mockResults.forEach((result, index) => {
      setTimeout(() => {
        setScanResults(prev => [...prev, result]);
        if (index === mockResults.length - 1) {
          setScanning(false);
          toast({
            title: "Scan Complete!",
            description: "Security scan finished successfully.",
          });
        }
      }, result.time);
    });
  };

  const renderPasswordManager = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Password Generator */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="neon-text-secondary">Password Generator</CardTitle>
            <CardDescription>Create strong, secure passwords</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Password Length: {passwordLength[0]}</Label>
              <Slider
                value={passwordLength}
                onValueChange={setPasswordLength}
                max={32}
                min={8}
                step={1}
                className="mt-2"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="symbols"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="symbols">Include symbols</Label>
            </div>
            <Button onClick={generatePassword} className="w-full cyber-button">
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Password
            </Button>
            {password && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Input value={password} readOnly className="cyber-input font-mono" />
                  <Button onClick={() => copyToClipboard(password)} size="icon" variant="outline" className="cyber-glow">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <PasswordStrengthIndicator password={password} />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Password Checker */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="neon-text-secondary">Password Strength Checker</CardTitle>
            <CardDescription>Analyze your password security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="check-password">Enter password to check</Label>
              <Input
                id="check-password"
                type="password"
                placeholder="Enter your password"
                className="cyber-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {password && <PasswordStrengthIndicator password={password} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const PasswordStrengthIndicator = ({ password }: { password: string }) => {
    const analysis = checkPasswordStrength(password);
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Strength:</span>
          <Badge variant={analysis.color as any}>{analysis.strength}</Badge>
        </div>
        <div className="quiz-progress">
          <div 
            className="quiz-progress-bar" 
            style={{ width: `${(analysis.score / 5) * 100}%` }}
          />
        </div>
        {analysis.feedback.length > 0 && (
          <ul className="text-xs text-muted-foreground space-y-1">
            {analysis.feedback.map((item, index) => (
              <li key={index} className="flex items-center">
                <XCircle className="h-3 w-3 mr-2 text-destructive" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const renderSecurityScanner = () => (
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="neon-text-secondary">Security Scanner Demo</CardTitle>
        <CardDescription>Simulate a comprehensive security scan</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={simulateScan} 
          disabled={scanning}
          className="w-full cyber-button"
        >
          {scanning ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Shield className="h-4 w-4 mr-2" />
              Start Security Scan
            </>
          )}
        </Button>
        
        {scanResults.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium neon-text-secondary">Scan Results:</h4>
            {scanResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted/10 rounded border border-border">
                <span className="text-sm">{result.name}</span>
                <div className="flex items-center">
                  {result.status === 'clean' ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="ml-2 text-xs capitalize">{result.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderToolContent = () => {
    switch (selectedTool) {
      case 'password-manager':
        return renderPasswordManager();
      case 'antivirus-scanner':
        return renderSecurityScanner();
      case 'vpn-info':
        return (
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="neon-text-secondary">VPN Protection Guide</CardTitle>
              <CardDescription>Understanding Virtual Private Networks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-medium neon-text">What is a VPN?</h4>
                <p className="text-muted-foreground">
                  A Virtual Private Network (VPN) creates a secure, encrypted connection between your device and the internet, protecting your data from hackers and surveillance.
                </p>
                <h4 className="font-medium neon-text">Benefits:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encrypts your internet traffic</li>
                  <li>• Hides your IP address and location</li>
                  <li>• Protects on public Wi-Fi networks</li>
                  <li>• Bypasses geographical restrictions</li>
                  <li>• Prevents ISP tracking</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );
      case 'firewall-demo':
        return (
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="neon-text-secondary">Firewall Protection</CardTitle>
              <CardDescription>Network security and traffic filtering</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-medium neon-text">How Firewalls Work:</h4>
                <p className="text-muted-foreground">
                  Firewalls act as barriers between your network and the internet, monitoring and controlling incoming and outgoing traffic based on security rules.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded">
                    <h5 className="font-medium text-green-400">Allowed Traffic</h5>
                    <ul className="text-sm text-muted-foreground mt-2">
                      <li>• HTTPS websites</li>
                      <li>• Email services</li>
                      <li>• Trusted applications</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded">
                    <h5 className="font-medium text-red-400">Blocked Traffic</h5>
                    <ul className="text-sm text-muted-foreground mt-2">
                      <li>• Malicious websites</li>
                      <li>• Suspicious downloads</li>
                      <li>• Unauthorized access</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case '2fa-auth':
        return (
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="neon-text-secondary">Two-Factor Authentication</CardTitle>
              <CardDescription>Enhanced account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-medium neon-text">What is 2FA?</h4>
                <p className="text-muted-foreground">
                  Two-Factor Authentication adds an extra layer of security by requiring two different authentication methods to verify your identity.
                </p>
                <h4 className="font-medium neon-text">Common 2FA Methods:</h4>
                <div className="grid gap-3">
                  <div className="flex items-center p-3 bg-muted/10 rounded border border-border">
                    <Lock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">SMS Codes</div>
                      <div className="text-sm text-muted-foreground">Receive codes via text message</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-muted/10 rounded border border-border">
                    <Shield className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Authenticator Apps</div>
                      <div className="text-sm text-muted-foreground">Generate time-based codes</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-muted/10 rounded border border-border">
                    <Key className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Hardware Keys</div>
                      <div className="text-sm text-muted-foreground">Physical security devices</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-cyber-slide-up">
        <h1 className="text-4xl font-bold neon-text mb-4">Cybersecurity Tools</h1>
        <p className="text-xl text-muted-foreground">
          Interactive tools to learn and practice cybersecurity concepts
        </p>
      </div>

      {!selectedTool ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card 
              key={tool.id} 
              className="cyber-card cursor-pointer animate-cyber-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedTool(tool.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-primary animate-neon-flicker">
                    {tool.icon}
                  </div>
                  <Badge variant="outline" className="text-primary border-primary">
                    {tool.category}
                  </Badge>
                </div>
                <CardTitle className="neon-text">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full cyber-button">
                  Explore Tool
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              onClick={() => setSelectedTool(null)} 
              variant="outline" 
              className="cyber-glow"
            >
              ← Back to Tools
            </Button>
          </div>
          {renderToolContent()}
        </div>
      )}
    </div>
  );
};

export default Tools;