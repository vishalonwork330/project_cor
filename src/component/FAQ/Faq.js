import React, { useState } from "react";
import "./Faq.css";

const FAQSection = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does an investor gain access to MF Utility??",
      answer:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      question: "Will investors be able to have multiple Common Account Numbers?",
      answer:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      question: "How does an investor gain access to MF Utility?",
      answer:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="heading">FAQ</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${openQuestionIndex === index ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span className="faq-toggle">
                {openQuestionIndex === index ? "-" : "+"}
              </span>
            </div>
            {openQuestionIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQSection;
