
import React, { useState , useEffect} from 'react';
import Header from './Header';
import FAQ from './FAQ';
import tawkTo from "tawkto-react";
function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is your name',
      answer: 'My name is Apoorv Dubey',
      open: true
    },
    {
      question: 'In which college you are studying?',
      answer: 'I am studying in IIT Bhubaneswar majoring in Electrical engineering',
      open: false
    },
    {
      question: 'when you are going to pass out ?',
      answer: 'I will passout in 2022',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }
   


  const tawkToPropertyId = '608597a162662a09efc1f5c5'
  
  // Direct Chat Link
  // https://tawk.to/chat/608597a162662a09efc1f5c5/1f44tgklj
  const tawkToKey = '1f44tgklj'
  
  useEffect(() => {
      tawkTo(tawkToPropertyId, tawkToKey)
  }, [])


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      
    </div>
  );
}

export default App;