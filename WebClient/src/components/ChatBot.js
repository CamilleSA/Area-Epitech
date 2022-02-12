import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


const config ={
    width: "400px",
    height: "500px",
    floating:true,
};

class ChatBote extends Component {

    render() {
        return (
<ChatBot
          steps={[
            {
                id:'welcome',
                message:'Welcoooome to Area !',
                trigger:'titouan',
            },
            {
                id:'titouan',
                message:'My name is Titouan',
                trigger:'intro',
            },
            {
             id:'intro', 
             message:'How are you today ?', 
             trigger:'intro-user',
            },
            {
             id:'intro-user', 
             options:[
               {value:'y', label:'Yes', trigger:'yes-response'},
               {value:'n', label:'No', trigger:'no-response'},
             ] 
            },
            {
             id:'yes-response', 
             message:'Great !', 
             trigger:'response-bot-yes',
            },
            {
             id:'no-response', 
             message:'Whats wrong ?', 
             trigger:'response-user',
            },
            {
                id:'response-user',
                user:true,
                trigger:'response-bot',
            },
            {
                id:'response-bot',
                message: "I don't care I'm not the Abbé pierre",
                trigger:'response-bot-yes',
            },
            {
                id:'response-bot-yes',
                message: "How can I help you ?",
                trigger:'response-user-help',
            },
            {
                id:'response-user-help',
                user:true,
                trigger:'response-help',
            },
            {
                id:'response-help',
                message:"First step : Select the apps you want to connect to start your custom setup.",
                trigger:'response-helpe',
            },
            {
                id:'response-helpe',
                message:"Second step: Choose your action and reaction for create Area",
                end:true,
            },

           ]}
           {...config}
          />
        )}
    }

export default ChatBote;