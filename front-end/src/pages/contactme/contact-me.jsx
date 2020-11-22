import React, {useState} from 'react';
import axios from 'axios';
import {ContactStyles} from './contact-me.styles.jsx';

const ContactPage = () => {

  const [messageContent,setMessageContent] = useState({
    email:'',
    user:'',
    message:''
  });

  const handleChange = (event) => {
    const {name,value} = event.target;
// si ponemos name entre [] asignará el valor de la propiedad name del input (password o email) al valor value del input.
    setMessageContent({...messageContent,[name]:value});
  };

  const { email, user, message } = messageContent;

  const submitForm = async (e) =>{
    e.preventDefault();
    const reqResult = await axios({
      url: 'sendmail',
      method:'post',
      data: {
        email,
        user,
        message
      }
    });
    console.log(reqResult);
    if (reqResult.status === 200) {
      alert('Message sent correctly, you will get soon a confirmation e-mail');
    } else {
      alert('It ocurred an error. Message not sent');
    }
  };

  return (
    <ContactStyles>
      <form onSubmit={submitForm}>
        <input 
          type="text" 
          name="email" 
          value={ email } 
          placeholder='Email Address'
          onChange={ handleChange }
        />
        <input 
          type="text" 
          name="user" 
          value= { user}
          placeholder='Enter your name'
          onChange={ handleChange }
        />
        <textarea 
          type="text" 
          name="message" 
          value={ message } 
          placeholder='Type your message'
          onChange={ handleChange }
        />
        <input type="submit" value='Submit'/>
      </form>
    </ContactStyles>
  )

}
export default ContactPage;