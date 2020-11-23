import React, {useState} from 'react';
import axios from 'axios';
import {ContactStyles} from './contact-me.styles.jsx';
//import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spinner/with-spinner.styles';

import { useToasts } from 'react-toast-notifications';


const ContactPage = () => {

  const innerMessageContent = {
    email:'',
    user:'',
    message:'',
    isPosting: false
  }

  const [messageContent,setMessageContent] = useState(innerMessageContent);

  const handleChange = (event) => {
    const {name,value} = event.target;
// si ponemos name entre [] asignará el valor de la propiedad name del input (password o email) al valor value del input.
    setMessageContent({...messageContent,[name]:value});
  };

  const { addToast } = useToasts();

  const { email, user, message, isPosting } = messageContent;

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
      setMessageContent(innerMessageContent);
      addToast('Message was succesfully sent', {
        appearance: 'success',
        autoDismiss: true,
      });

    } else {
      setMessageContent({...messageContent, isPosting: false });
      addToast('A fatal error ocurred', {
        appearance: 'error',
        autoDismiss: true,
      });
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
      </ContactStyles>
      }
    </div>
  )

}
export default ContactPage;