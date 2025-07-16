import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface ChatBotProps {
  language: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC<ChatBotProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: "Chat with us",
      placeholder: "Type your message...",
      send: "Send",
      initialMessage: "Hello! I'm here to help you with your immigration questions. How can I assist you today?",
      loadingMessage: "Thinking...",
      errorMessage: "I apologize, but I'm having trouble responding right now. Please try again or contact us directly at +45 50 47 60 37."
    },
    da: {
      title: "Chat med os",
      placeholder: "Skriv din besked...",
      send: "Send",
      initialMessage: "Hej! Jeg er her for at hjælpe dig med dine immigrationsspørgsmål. Hvordan kan jeg hjælpe dig i dag?",
      loadingMessage: "Tænker...",
      errorMessage: "Jeg beklager, men jeg har problemer med at svare lige nu. Prøv venligst igen eller kontakt os direkte på +45 50 47 60 37."
    }
  };

  const t = content[language as keyof typeof content];

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen || !chatContainerRef.current) return;
      
      // Check if the mouse is inside the chat container
      const chatContainer = chatContainerRef.current;
      const isInsideChat = chatContainer.contains(e.target as Node);
      
      if (isInsideChat) {
        // Prevent page scrolling when scrolling inside the chat
        e.preventDefault();
        
        // Calculate scroll direction and amount
        const scrollAmount = e.deltaY;
        chatContainer.scrollTop += scrollAmount;
      }
    };

    // Add event listener
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // Clean up event listener
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen]);

  const initializeGemini = () => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        console.error('Gemini API key not found');
        return null;
      }
      return new GoogleGenAI({ apiKey });
    } catch (error) {
      console.error('Error initializing Gemini:', error);
      return null;
    }
  };

  const formatResponse = (text: string) => {
    // Convert markdown-like formatting to HTML
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
      .replace(/\n\n/g, '<br/><br/>') // Paragraphs
      .replace(/\n/g, '<br/>') // Line breaks
      .replace(/\-\s(.*?)(<br\/>|$)/g, '• $1<br/>'); // Bullet points

    // Format headings
    formattedText = formattedText.replace(/^(.*?):<br\/>/g, '<strong>$1:</strong><br/>');

    // Format lists
    formattedText = formattedText.replace(/(•.*?)<br\/>/g, '<li>$1</li>');
    formattedText = formattedText.replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>');
    
    // Remove duplicate ul tags
    formattedText = formattedText.replace(/<\/ul><ul>/g, '');

    return formattedText;
  };

  const getGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      const ai = initializeGemini();
      if (!ai) {
        throw new Error('Failed to initialize Gemini AI');
      }

      const systemPrompt = language === 'da' 
        ? `Du er en hjælpsom AI-assistent for Nordic Legal Consulting, et advokatfirma specialiseret i familiesammenføring og Schengen-visa. 
           Svar på dansk og giv nyttige oplysninger om:
           - Familiesammenføring i Danmark, Sverige og Tyskland
           - EU-ret og visa-ansøgninger
           - Opholdstilladelser
           - Juridisk rådgivning
           
           Kontaktoplysninger:
           - Telefon: +45 50 47 60 37
           - Email: info@nordiclegalconsulting.com
           - Adresse: København, Danmark
           - Åbningstider: 9:00 - 17:00
           
           Hold svarene klart formateret med:
           * Fed skrift for overskrifter og vigtige punkter
           * Punktform til lister
           * Klare afsnit
           * Korrekt grammatik og tegnsætning
           
           Hvis du ikke kan svare på et spørgsmål, henviser du til at kontakte firmaet direkte.`
        : `You are a helpful AI assistant for Nordic Legal Consulting, a law firm specializing in family reunification and Schengen visas.
           Respond in English and provide useful information about:
           - Family reunification in Denmark, Sweden, and Germany
           - EU law and visa applications
           - Residence permits
           - Legal guidance
           
           Contact information:
           - Phone: +45 50 47 60 37
           - Email: info@nordiclegalconsulting.com
           - Address: Copenhagen, Denmark
           - Office hours: 9:00 - 17:00
           
           Keep responses well-formatted with:
           * Bold text for headings and important points
           * Bullet points for lists
           * Clear paragraphs
           * Proper grammar and punctuation
           
           If you cannot answer a question, refer them to contact the firm directly.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: `${systemPrompt}\n\nUser question: ${userMessage}`,
      });

      return formatResponse(response.text || t.errorMessage);
    } catch (error) {
      console.error('Error getting Gemini response:', error);
      return t.errorMessage;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Add loading message
    const loadingMessage: Message = {
      id: Date.now() + 1,
      text: t.loadingMessage,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, loadingMessage]);

    try {
      const botResponse = await getGeminiResponse(inputText);
      
      // Remove loading message and add actual response
      setMessages(prev => {
        const withoutLoading = prev.slice(0, -1);
        const botMessage: Message = {
          id: Date.now() + 2,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };
        return [...withoutLoading, botMessage];
      });
    } catch (error) {
      // Remove loading message and add error message
      setMessages(prev => {
        const withoutLoading = prev.slice(0, -1);
        const errorMessage: Message = {
          id: Date.now() + 2,
          text: t.errorMessage,
          sender: 'bot',
          timestamp: new Date()
        };
        return [...withoutLoading, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const initialMessage: Message = {
        id: 1,
        text: t.initialMessage,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-200 z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatContainerRef}
          className="fixed bottom-6 right-6 w-80 h-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="w-6 h-6 mr-2" />
              <h3 className="font-semibold">{t.title}</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {message.sender === 'bot' ? (
                      <div 
                        className="text-sm whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: message.text }}
                      />
                    ) : (
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                placeholder={t.placeholder}
                disabled={isLoading}
                className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-800 placeholder-gray-500 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;