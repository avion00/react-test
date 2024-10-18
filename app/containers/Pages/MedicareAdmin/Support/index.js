import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import data from './data.json';
import './style.css';

function SupportManagement(props) {
  const title = brand.name + ' - Support Management';
  const description = brand.desc;
  const { intl } = props;

  const [userInput, setUserInput] = useState('');
  const [botMessages, setBotMessages] = useState([]);
  const [issueDescription, setIssueDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const botResponses = data.responses;

  // Reference for chatbox to scroll
  const chatboxRef = useRef(null);

  // Append a message
  const appendMessage = (sender, message) => {
    setBotMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  // Respond based on user input
  const respondToUser = (userMessage) => {
    let botResponse = botResponses.default;

    if (userMessage.includes('setup')) {
      botResponse = botResponses.setup;
    } else if (userMessage.includes('training')) {
      botResponse = botResponses.training;
    } else if (userMessage.includes('configuration')) {
      botResponse = botResponses.configuration;
    }

    appendMessage('Bot', botResponse);

    if (userMessage.includes('escalate')) {
      appendMessage('Bot', 'Your issue is being escalated. Please fill out the ticket form below.');
      document.getElementById('ticketing-section').scrollIntoView();
    }
  };

  // Send user message
  const handleSendMessage = () => {
    const trimmedMessage = userInput.trim().toLowerCase();
    if (trimmedMessage) {
      appendMessage('You', trimmedMessage);
      respondToUser(trimmedMessage);
      setUserInput(''); // Clear input
    }
  };

  // Handle ticket submission
  const handleTicketSubmission = (e) => {
    e.preventDefault();
    if (issueDescription && userEmail) {
      alert('Ticket submitted! We\'ll get back to you soon.');
      setIssueDescription('');
      setUserEmail('');
    } else {
      alert('Please fill out both the issue description and your email.');
    }
  };

  // Scroll to bottom of chatbox when new messages are added
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [botMessages]);

  // Append a default bot message on mount
  useEffect(() => {
    appendMessage('Bot', 'Hello! How can I assist you today?');
  }, []);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className="container admin support">
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          padding: '.75em 1em',
          backgroundColor: '#0f3c4c',
          color: '#fff',
          margin: '0 .6em',
          marginBottom: '1em'
        }}>Support Bot</h2>
        <section id="support-section" style={{
          padding: '0 .5em',
        }}>
          <div id="chat-box">
            <div className='bot-messages'
              id="bot-messages"
              ref={chatboxRef} // Add the reference here
              style={{
                height: '200px',
                overflowY: 'auto',
                overflowX: 'hidden',
                border: '1px solid rgb(125, 125, 125, .6)',
                padding: '1.5em',
                marginBottom: '10px',
                borderRadius: '.25em',
                margin: '.5em',
                backgroundColor: 'rgb(1, 250, 250, 0.02)',
              }}
            >
              {botMessages.map((msg, index) => (
                <p key={index}><strong>{msg.sender}:</strong> {msg.message}</p>
              ))}
            </div>
            <input
              type="text"
              id="user-input"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                width: 'calc(100% - 150px)',
                padding: '.75em 1em',
                margin: '.5em',
                borderRadius: '.25em',
                backgroundColor: 'rgb(1, 130, 220, 0.03)',
                border: '1px solid rgb(150, 150, 150, .6)',
                color: 'inherit'
              }}
            />
            <button id="send-message" onClick={handleSendMessage} style={{
              width: '120px',
              height: 'auto',
              padding: '.8em',
            }}>Send</button>
          </div>
        </section>

        {/* Ticketing System Section */}
        <section id="ticketing-section">
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '.75em 1em',
            backgroundColor: '#0f3c4c',
            color: '#fff',
            margin: '0 .7em',
            marginTop: '1.5em'
          }}
          >Escalate Unresolved Issues</h2>
          <form id="ticket-form" onSubmit={handleTicketSubmission}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '.5em'
            }}
          >
            <label htmlFor="issue-description" style={{
              padding: '.5em',
              fontSize: '20px',
              fontWeight: '600',
            }}>Issue Description:</label>
            <textarea
              id="issue-description"
              placeholder="Describe your issue..."
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              style={{
                borderRadius: '.25em',
                height: '200px',
                padding: '1em',
                font: 'inherit',
                margin: '.5em',
                backgroundColor: 'rgb(1, 130, 220, 0.03)',
                border: '1px solid rgb(150, 150, 150, .6)',
              }}
            ></textarea>

            <label htmlFor="user-email" style={{
              padding: '.5em',
              fontSize: '20px',
              fontWeight: '600',
            }}>Your Email:</label>
            <input
              type="email"
              id="user-email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              style={{
                borderRadius: '.25em',
                padding: '1em',
                font: 'inherit',
                margin: '.5em',
                backgroundColor: 'rgb(1, 130, 220, 0.03)',
                color: 'inherit',
                border: '1px solid rgb(150, 150, 150, .6)',
              }}
            />

            <button type="submit" style={{
              padding: '.75em 1.5em',
              fontSize: '.9em',
              margin: '1em .5em',
              width: 'fit-content',
              borderRadius: '.25em'
            }}>Submit Ticket</button>
          </form>
        </section>
      </div>
    </div>
  );
}

SupportManagement.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(SupportManagement);
