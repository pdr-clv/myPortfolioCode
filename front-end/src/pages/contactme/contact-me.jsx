import React, {useState} from 'react';
import axios from 'axios';
import {ContactStyles, Notification} from './contact-me.styles.jsx';
//import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spinner/with-spinner.styles';

const ContactPage = () => {

  const [messageContent,setMessageContent] = useState({
    email:'',
    user:'',
    message:'',
    isPosting: false,
    showNotification: false
  });

  const handleChange = (event) => {
    const {name,value} = event.target;
// si ponemos name entre [] asignará el valor de la propiedad name del input (password o email) al valor value del input.
    setMessageContent({...messageContent,[name]:value});
  };

  const { email, user, message, isPosting, showNotification } = messageContent;

  const submitForm = async (e) =>{
    setMessageContent({...messageContent, isPosting: true });
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
    
    if (reqResult.status === 200) {
      console.log(reqResult);
      setMessageContent({...messageContent, isPosting: false, showNotification:true });

    } else {
      setMessageContent({...messageContent, isPosting: false });
      alert('It ocurred an error. Message not sent');
    }
  };

  return (
      <div>
      {
        isPosting ? <SpinnerOverlay><SpinnerContainer /></SpinnerOverlay>
          :
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
        <Notification notification= {showNotification}>Message sent</Notification>
      </ContactStyles>
      }
    </div>
  )

}
export default ContactPage;