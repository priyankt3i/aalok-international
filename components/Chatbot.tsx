import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const websiteContent = `
Aalok International is New England's first Indian boutique, a fusion-wear powerhouse dedicated to providing one-of-a-kind evening gowns for weddings, proms, galas, and any special event for women, men, and children. Our passion is to blend traditional Indian artistry with contemporary fashion, creating timeless pieces.

Our Services include:
- Designer Collections: Exquisite, ready-to-wear gowns for women, men, and children for any formal occasion.
- Custom Tailoring: Bespoke designs created from raw saree fabrics, tailored to your exact style and fit preferences. Our master tailors work with you every step of the way to bring your dream outfit to life, ensuring a perfect fit and a one-of-a-kind design.
- Expert Alterations: Perfecting the fit of your cherished garments to ensure you look and feel your best.
- Threading: Specialty in threading eyebrows, face, etc.
- Waxing: Professional waxing services for smooth skin.
- Skin Treatments: Rejuvenating facials and skin treatments by our licensed beauticians, available by appointment.
- Makeup: Professional makeup application for your special day.
- Henna: Intricate, beautiful Henna artistry for your special day.

We are closed on Thanksgiving weekend (Thurs & Frid), Christmas Day, and New Years Day.
We are currently having a sale: 20%-50% off on many items (jewelry and clothing). Gift items range from gorgeous phone purses, scarves, to jumka earrings and elegant sarees!
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.VITE_GEMINI_API_KEY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: `You are a helpful AI assistant for Aalok International, an Indian ethnic fashion and beauty store. Your goal is to answer questions about the store's products and services based *only* on the provided website content. If a question cannot be answered from the provided content, politely state that you don't have information on that topic. Do not invent information. Respond as humanly as possible.

                Website Content:
                ${websiteContent}

                User Query: ${input}` },
              ],
            },
          ],
        }),
      });

      const data = await response.json();
      const botResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request.";
      const botMessage: Message = { text: botResponseText, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with Gemini API:', error);
      const errorMessage: Message = { text: 'There was an error connecting to the chatbot. Please try again later.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="fixed bottom-4 right-4 bg-gray-200 text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-300 transition-colors z-50"
          onClick={toggleChatbot}
        >
          <img src="/icons/chatbot.png" alt="Chatbot Icon" className="h-8 w-8" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-lg flex flex-col z-50">
          <div className="p-4 border-b border-gray-200 text-lg font-semibold text-gray-800 flex justify-between items-center">
            Aalok Chatbot
            <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-indigo-100 text-right ml-auto' : 'bg-gray-100 text-left mr-auto'
                }`}
                style={{ maxWidth: '80%' }}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="mb-2 p-2 rounded-lg bg-gray-100 text-left mr-auto" style={{ maxWidth: '80%' }}>
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              className="flex-grow w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ask about our products or services..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <button
              className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex-shrink-0"
              onClick={handleSendMessage}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
