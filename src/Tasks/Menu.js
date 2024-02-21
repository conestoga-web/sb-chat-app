import React from 'react';
import './Menu.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: left;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  color: #38ADC1;
  font-weight: bold;
  font-size: 1.5em;
  &:hover {
    color: lightblue;
  }
`;

const Menu = () => {
  return (
    <>
      <div className='tasks'>
        <h1>Task 1: API Integration and Basic Chat Setup</h1>
        <h3><span style={{color:"DarkGrey"}}>Objective: </span>Integrate Sendbird’s chat API into your application and establish a basic chat functionality where users can send and receive messages</h3>
        <ul>
          <li><StyledLink to="/task-1">Task 1</StyledLink></li>
          <ol>
            <li>Set up Sendbird’s SDK in your project following the official documentation.</li>
            <li>Initialize the chat service and connect a user to the chat system.</li>
            <li>Implement a basic text input field and submit button that allows the user to send messages.</li>
            <li>Display incoming messages in a simple chat interface.</li>
          </ol>
        </ul>
        <h1>Task 2: Enhancing the Chat Interface</h1>
        <h3><span style={{color:"DarkGrey"}}>Objective: </span>Improve the user interface of the chat to include timestamps for messages and a distinction between sent and received messages</h3>
        <ul>
          <li><StyledLink to="/task-2">Task 2</StyledLink></li>
          <ol>
            <li>Modify the chat interface to display messages in a conversational format, differentiating between messages sent by the user and messages received.</li>
            <li>Include timestamps next to each message.</li>
          </ol>
        </ul>
        <h1>Task 3: Implement a Feature - Typing Indicators</h1>
        <h3><span style={{color:"DarkGrey"}}>Objective: </span>Choose one of the following features to implement in your chat application: read receipts or typing indicators</h3>
        <ul>
          <li><StyledLink to="/task-3">Task 3</StyledLink></li>
          <ol>
            <li><b>Option 2: Typing Indicators</b></li>
            <ol style={{listStyleType:"lower-alpha"}}>
              <li>Implement a feature that shows a notification or indicator in the chat interface when the other user is typing.</li>
              <li>Ensure the indicator is only visible when the user is actively typing and disappears after a short period of inactivity.</li>
            </ol>
          </ol>
        </ul>
      </div>  
    </> 
  );
}

export default Menu;
