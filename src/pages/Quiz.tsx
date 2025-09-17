import { useState } from 'react';
import { Clock, Award, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  timeLimit: number;
}

const quizzes: Quiz[] = [
  {
    id: 'cyber-basics',
    title: 'Cyber Basics',
    description: 'Test your fundamental cybersecurity knowledge',
    timeLimit: 300,
    questions: [
      {
        id: 1,
        question: 'What does VPN stand for?',
        options: ['Virtual Private Network', 'Very Personal Network', 'Verified Protection Network', 'Visual Privacy Node'],
        correct: 0,
        explanation: 'A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet.'
      },
      {
        id: 2,
        question: 'Which of these is the strongest password?',
        options: ['password123', 'P@ssw0rd!', 'Tr0ub4dor&3', 'correct-horse-battery-staple-2024!'],
        correct: 3,
        explanation: 'Long passphrases with numbers and symbols are generally stronger than complex but shorter passwords.'
      },
      {
        id: 3,
        question: 'What is phishing?',
        options: ['A water sport', 'A type of malware', 'Fraudulent emails to steal data', 'A network protocol'],
        correct: 2,
        explanation: 'Phishing involves sending fraudulent communications that appear to come from a reputable source to steal sensitive data.'
      }
    ]
  },
  {
    id: 'malware-threats',
    title: 'Malware & Threats',
    description: 'Learn about different types of cyber threats',
    timeLimit: 400,
    questions: [
      {
        id: 1,
        question: 'What is ransomware?',
        options: ['Free software', 'Malware that encrypts files for money', 'A type of antivirus', 'Email protection'],
        correct: 1,
        explanation: 'Ransomware is malicious software that encrypts files and demands payment for decryption keys.'
      },
      {
        id: 2,
        question: 'What does a Trojan horse do?',
        options: ['Protects your computer', 'Disguises itself as legitimate software', 'Speeds up your system', 'Backs up files'],
        correct: 1,
        explanation: 'A Trojan horse appears to be legitimate software but contains malicious code that can harm your system.'
      },
      {
        id: 3,
        question: 'What is a zero-day exploit?',
        options: ['A security patch', 'Attack on unknown vulnerability', 'Daily security scan', 'Password reset'],
        correct: 1,
        explanation: 'A zero-day exploit targets security vulnerabilities that are unknown to security vendors and have no patches available.'
      }
    ]
  },
  {
    id: 'safety-practices',
    title: 'Cyber Safety Practices',
    description: 'Best practices for staying safe online',
    timeLimit: 350,
    questions: [
      {
        id: 1,
        question: 'How often should you update your passwords?',
        options: ['Never', 'Once a year', 'Every 3-6 months', 'Daily'],
        correct: 2,
        explanation: 'Security experts recommend updating passwords every 3-6 months, or immediately if a breach is suspected.'
      },
      {
        id: 2,
        question: 'What is two-factor authentication?',
        options: ['Using two passwords', 'Two security methods for login', 'Having two accounts', 'Double encryption'],
        correct: 1,
        explanation: 'Two-factor authentication requires two different authentication methods, like a password and a code from your phone.'
      },
      {
        id: 3,
        question: 'What should you do with suspicious emails?',
        options: ['Forward to friends', 'Click links to investigate', 'Delete without opening', 'Reply asking for info'],
        correct: 2,
        explanation: 'Suspicious emails should be deleted without opening attachments or clicking links to avoid potential malware.'
      }
    ]
  }
];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const { toast } = useToast();

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(quiz.timeLimit);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < selectedQuiz!.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = (finalAnswers: number[]) => {
    setShowResult(true);
    const score = finalAnswers.reduce((acc, answer, index) => {
      return acc + (answer === selectedQuiz!.questions[index].correct ? 1 : 0);
    }, 0);
    
    toast({
      title: "Quiz Completed!",
      description: `You scored ${score}/${selectedQuiz!.questions.length}`,
    });
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return acc + (answer === selectedQuiz!.questions[index].correct ? 1 : 0);
    }, 0);
  };

  if (!selectedQuiz) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-cyber-slide-up">
          <h1 className="text-4xl font-bold neon-text mb-4">Cyber Security Quizzes</h1>
          <p className="text-xl text-muted-foreground">
            Test your cybersecurity knowledge and become a digital guardian
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quizzes.map((quiz, index) => (
            <Card key={quiz.id} className="cyber-card animate-cyber-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Award className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-primary border-primary">
                    {quiz.questions.length} Questions
                  </Badge>
                </div>
                <CardTitle className="neon-text">{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {Math.floor(quiz.timeLimit / 60)} minutes
                </div>
                <Button 
                  onClick={() => startQuiz(quiz)}
                  className="w-full cyber-button"
                >
                  Start Quiz
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / selectedQuiz.questions.length) * 100);
    
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="cyber-card animate-cyber-scale-in text-center">
            <CardHeader>
              <Award className="h-16 w-16 text-primary mx-auto mb-4 animate-neon-flicker" />
              <CardTitle className="text-3xl neon-text">Quiz Complete!</CardTitle>
              <CardDescription className="text-lg">
                {selectedQuiz.title} Results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold neon-text mb-2">{percentage}%</div>
                <div className="text-xl text-muted-foreground">
                  {score} out of {selectedQuiz.questions.length} correct
                </div>
              </div>
              
              <div className="quiz-progress">
                <div 
                  className="quiz-progress-bar" 
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="space-y-2 text-left">
                <h3 className="font-semibold text-lg neon-text-secondary">Review:</h3>
                {selectedQuiz.questions.map((question, index) => (
                  <div key={question.id} className="p-3 bg-muted/10 rounded border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Q{index + 1}</span>
                      <Badge variant={answers[index] === question.correct ? "default" : "destructive"}>
                        {answers[index] === question.correct ? "Correct" : "Wrong"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{question.question}</p>
                    <p className="text-xs text-cyber-teal">{question.explanation}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button onClick={resetQuiz} className="flex-1 cyber-button">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Try Another Quiz
                </Button>
                <Button onClick={() => startQuiz(selectedQuiz)} variant="outline" className="flex-1 cyber-glow">
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Quiz Header */}
        <div className="flex items-center justify-between mb-8 animate-cyber-slide-up">
          <div>
            <h1 className="text-3xl font-bold neon-text">{selectedQuiz.title}</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {selectedQuiz.questions.length}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Clock className="h-4 w-4 mr-2" />
              Time: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
            <div className="quiz-progress mb-2">
              <div 
                className="quiz-progress-bar" 
                style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <Card className="cyber-card animate-cyber-scale-in">
          <CardHeader>
            <CardTitle className="text-xl">
              {selectedQuiz.questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className={`w-full text-left justify-start p-4 h-auto cyber-glow ${
                  selectedAnswer === index ? 'bg-primary text-primary-foreground shadow-cyber' : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={resetQuiz} className="cyber-glow">
            Exit Quiz
          </Button>
          <Button 
            onClick={nextQuestion} 
            disabled={selectedAnswer === null}
            className="cyber-button"
          >
            {currentQuestion === selectedQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;