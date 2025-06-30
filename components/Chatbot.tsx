import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const websiteContent = `
# AaLOK International

---

## About

Welcome to AaLOK International, New England's first Indian boutique, located at 404 Moody St, Waltham, MA 02453. We are a fusion-wear powerhouse dedicated to providing one-of-a-kind evening gowns for weddings, proms, galas, and any special event for women, men, and children. Our passion is to blend traditional Indian artistry with contemporary fashion, creating timeless pieces that make you shine. This website showcases our portfolio of designs and the breadth of services we proudly offer.

---

## Services

AaLOK International is your one-stop shop for all your fashion and beauty needs, ready to make your day even more special.

* **Designer Collections:** Exquisite, ready-to-wear gowns for women, men, and children for any formal occasion.
* **Custom Tailoring:** Bespoke designs created from raw saree fabrics, tailored to your exact style and fit preferences.
* **Expert Alterations:** Perfecting the fit of your cherished garments to ensure you look and feel your best.
* **Threading:** Specialty in threading eyebrows, face, and more.
* **Waxing:** Professional waxing services for smooth skin.
* **Skin Treatments:** Rejuvenating facials and skin treatments by our licensed beauticians, available by appointment.
* **Makeup:** Professional makeup application for your special day.
* **Henna:** Intricate, beautiful Henna artistry for your special day.

---

## Portfolio

A glimpse into the world of AaLOK International, featuring designs for women, men, and children.

* Anarkali
* Salwaar
* Saree
* Ghaghra
* Anarkali Collection

### Your Vision, Our Craft (Custom Designs)

In addition to our designer fashion, AaLOK offers tailored designs created based on your unique preferences. We begin with raw, exquisite saree fabrics and cut them to the style and fit you request. Our master tailors work with you every step of the way to bring your dream outfit to life, ensuring a perfect fit and a one-of-a-kind design.

---

## Gallery

View our full gallery of designs.

---

## Contact

### Owner
* Pushpa Karna

# A Media Platform Sharing Diverse & Inspiring Stories Of Women Around The Globe

---

## Women-Owned Small Business Stories: The Fashion Edition

“Fashion is like drinking a Red Bull - it keeps me energized, 24/7!” We are excited to launch our new series, **Small Business Stories**, spotlighting women-owned small businesses and female founders around the world. We kick-off with **Small Business Stories: The Fashion Edition**, with three lovely Boston-based fashion entrepreneurs, **Ambika Mangtani, Vidhi Dalia, and Pushpa Karna**. They each bring their unique perspective on running a fashion business, tips for small business owners, and how fashion empowers women.

---

*Pushpa Karna, Ambika Mangtani, and Vidhi Dalia (L-R)*

---

### 1. Tell us your stories. What inspired you to start your fashion businesses?

**Ambika:** I have a background in accounting, but fashion is my true calling! I started learning craftsmanship at an early age, and that sowed the seeds for my interest in fashion. I became skilled at Henna, embroidery, knitting, crochet, jewelry making and of course stitching. As I honed these skills, and started producing designs, I realized that not only did I enjoy doing it but my work was appreciated by others. Having these skills and producing many designs, I decided to start **IndofashionZ** in 2011. I am always grateful to my friends, family and people who trusted me and supported me to become the successful entrepreneur that I am today. Every entrepreneur needs to stay in tune with current trends and I have managed to keep up with the changing fashions and styles. I take pride in offering the latest styles to my clients. In addition owning a fashion boutique, I am also a partner in **GlitznBlitz** event decoration, and I manage my real estate company. My true love is fashion which is expressed through my boutique.

**Pushpa:** It is said that necessity is the mother of invention. It was the case for **AALOK INTERNATIONAL**. When my daughters were in their early twenties, we could not find any desi or cultural clothes that they were able to wear and enjoyed wearing. It was a simple goal but it quickly became more than just clothing. Fashion, or beauty is something that makes you feel encouraged and confident and healthy, in my opinion. (When we think back of when we are tired and stressed out or sad, then nice clothing jewelry changes our mood.) Fashion and beauty has always been a power of women from a very ancient time. And I realized that opening a store where people of all backgrounds and dreams could come and find a form of expression in fashion and beauty was very important.

---

### 2. Tell us your favorite part of running your business?

**Vidhi:** I have always been passionate about playing with colors, shades and color combinations from a very young age. After completing my education in computer sciences and worked as a graphic designer for a few years, I am so glad that I could follow my passion for makeup and create distinguished looks on different faces, diverse models, brides and celebrity actors. My favorite part of being a makeup artist is meeting many people in my journey, making new connections, and learning about their culture and ritual. I really enjoy every bit of my work by creating different looks and meeting new people every day.

**Ambika:** Fashion is like drinking a Red Bull - it keeps me energized, 24/7! We’ve all heard it before: “If you do what you love, then work doesn’t feel like work.” I love helping each one of my clients find their unique style and look their very best. Being in the fashion industry gives me the opportunity to be in touch with contemporary styles from various parts of the world. I specialized in, and enjoy creating Indo-Western fusion style. I love everything about this industry! Starting from the photo shoot for my brand, launching fashion shows, hosting exhibitions at various venues. I’m so passionate about the fashion industry that I somehow find an excuse to get involved in our community events, like organizing the fashion show for Dawat fundraising event, the exquisite Dream Catcher event’s fashion show, and being one of the sponsors at the Miss India New England pageant. I am very excited to share that I am the fashion designer/ stylist for NRILIFE Productions’s upcoming web series - ‘Grey Stories’ in which I got the opportunity to work with famous Bollywood celebrities!

*Credits: Yahoo Search*

**Pushpa:** This store is not just a place to come and buy something but a place where we help brides and grooms dress for a new life. We bring a new sense of culture to internationally open minded people from all over the world. There are so many new beginnings and moments we help our customers with. AaLOK is a place to come to when something as simple as threading is needed, to as complex as a wedding. It is a place where everyone feels empowered, intelligent, peaceful, and beautiful.

---

### 3. What is your top tip to others looking to start a small business in fashion/beauty?

**Pushpa:** Our life is not only what we take from it but what we put into it. It has never been about the hard work but about the importance of the work and how it can benefit our families, our community, and our world.

**Ambika:** Follow your passion & true calling. Find what you really enjoy, and then commit to it. Don’t be shy to take the first step. Success will follow if you stay on the path. Social media has opened many doors to market your products. Communicate well with your clients, find how you can provide better service to them. Introduce your ideas/vision gracefully without imposing so that they get a clear picture to decide.

**Vidhi:** I can tell you that there is no perfect formula for starting a small business. I’ve learned that the best business advice usually forces you to think in a new way. Opening your own business is often a learn-as-you-go process. But, the more smart decisions you make early on, the better chances to be successful. I highly recommend starting your makeup career by working for someone else to get experience or or as a volunteer in some project to create your portfolio. If your first makeup job is an internship or an assistantship, you’ll get your foot in the door while learning from established professionals. Another important thing is appreciate anyone and everyone who helps you or gives you a chance for this will come back around, and one day soon, you will be the one giving chances and opportunities. You can be kind and caring towards others and that contributes to your success & blessings both. Remind yourself of that every day!

---

### 4. How does fashion & beauty empower women?

**Vidhi:** Unfortunately, stereotype expectation of the perfect image still prevails in our society. This has led to people setting unrealistically high standards for themselves, which is especially the case with the young women. The problem that arises when people are unable to live up to such expectations is the loss of confidence and the feeling of incomplete/imperfection, leading to severe mental health issues, such as anxiety and depression. I feel it's really important for a woman to stand for herself in a very confident way. I recommend using makeup to your advantage. Never try to hide your natural beauty with a mask of heavy makeup; rather, use it as a tool to highlight the most attractive aspects of your face. When you start feeling more beautiful on the outside, you will soon realize just how quickly your confidence can grow and how your inner beauty shines too. If, however, you are unable to focus on anything but your flaws, perhaps a makeover would be a brilliant idea. Try changing your beauty routine or getting a new haircut that compliments your face. Only when you devote more attention to accepting yourself, you can truly let your power and confidence shine.

**Ambika:** Women have come out from their comfort zone and have achieved great success even in fields that nobody possibly could imagine. Women hold a prominent place in the fashion industry today. Women in the fashion industry get to express themselves with their designs and creativity. Looking our best is an expression of our confidence, intellect and individuality indeed. It’s a celebration of our success. We women are the trend setters today!

**Pushpa:** Women are an embodiment of intelligence, power, and peace. Back in 1962-1963, I would create and design clothing. I started by opening old dresses to see how it was cut and stitched. My dream of designing clothing came true on July 28, 2000. It has now been twenty years since I opened AALOK. Yes, it took time but I am living my dream today. It is an example that we should never give up.

---

### Bios:

**Pushpa:** She is the founder of Aalok International in Waltham, MA, which sells lovely South-Asian dresses and more. A lovely line by Pushpa’s granddaughter, “I have to say, that’s quite a mission that my grandmother is on. I’m proud that she’s led the way for so, so many other women who I know started working at AaLOK and moved on to build their own stores. AaLOK has been a beginning for so many peoples livelihoods and moments of happiness. My Nani, Pushpa Karna, is truly a dream catcher.”


### Get In Touch
* **Address** 404 Moody St, Waltham, MA 02453
* **Phone:** +1 (234) 567-890
* **Email:** info@aalokfashion.com, aalokfashion@yahoo.com

### Our Hours

* **Tuesdays - Saturdays:** 11 AM - 8 PM
* **Sundays:** 1 PM - 7 PM
* **Closed:** Mondays, All State & Federal Holidays, Thanksgiving weekend (Thursday & Friday), Christmas Day, and New Year's Day.

---

## Current Sale!

We are celebrating you, the customer, with **20%-50% off** on many items, including jewelry and clothing! Gift items range from gorgeous phone purses, scarves, to jumka earrings and elegant sarees.

---

© 2025 Aalok International. All Rights Reserved.
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
      const response = await fetch('/api/chat', { // Send request to local server endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `You are a helpful AI assistant for Aalok International, an Indian ethnic fashion and beauty store. Your goal is to answer questions about the store's products and services based *only* on the provided website content. If a question cannot be answered from the provided content, politely state that you don't have information on that topic. Do not invent information.

          Website Content:
          ${websiteContent}

          User Query: ${input}`,
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
