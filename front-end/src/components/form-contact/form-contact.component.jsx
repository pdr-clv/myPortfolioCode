import React, {useState} from 'react';
import { FormStyles, SpanCounter, SubmitInput, SubmitDiv } from './form-contact.styles';
import axios from 'axios';
import Spinner from '../with-spinner/with-spinner.component';
import TextInput from '../form-elements/text-input.component';
import TextArea from '../form-elements/text-area.component';

import { useToasts } from 'react-toast-notifications';

const FormContact = () => {
  
  const innerMessageContent = {
    email:'',
    user:'',
    message:'',
    charLimit:50,
    messageCharLimit:1400,
    isPosting: false
  }

  const [messageContent,setMessageContent] = useState(innerMessageContent);

  const handleChange = (event) => {
    const {name,value} = event.target;
    // si ponemos name entre [] asignará el valor de la propiedad name del input (password o email) al valor value del input.
    setMessageContent({...messageContent,[name]:value});
  };

  // for toast alert messages
  const { addToast } = useToasts();
  // we desestructured
  const { email, user, message, charLimit, messageCharLimit, isPosting } = messageContent;

  const submitForm = async (e) =>{
    
    e.preventDefault();
    //Validation if statements
    if (email.length === 0 || user.length === 0 || message.length === 0 ) {
      addToast('Please, all fields are required.',{
        appearance: 'error',
        autoDismiss: true
      });
      return;
    }

    if (message.length > messageCharLimit) {
      addToast(`Please type less than ${messageCharLimit} characters in message field`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }

    if (email.length > charLimit || user.length > charLimit ) {
      addToast(`Fields Email and Name must be below ${charLimit} characters`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    } 
    //Axios request. Start spinner with isPosting set to true, until axios request is completely done.
    setMessageContent({...messageContent, isPosting: true });
    try {
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
        setMessageContent(innerMessageContent);
        addToast(reqResult.data.message, {
          appearance: reqResult.data.status,
          autoDismiss: true,
        });
  
      } else {
        setMessageContent({...messageContent, isPosting: false });
        addToast(reqResult.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    } catch (err) {
      setMessageContent({...messageContent, isPosting: false });
      addToast(err.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
    
  };

  return (
    <div>
    {
      isPosting ? <Spinner />
        :
        <FormStyles onSubmit={submitForm}>
          <TextInput
            type='email'  
            name="email" 
            value={ email } 
            label='Email'
            onChange={ handleChange }
          />
          <TextInput 
            type="text" 
            name="user" 
            value= { user}
            label='Name'
            onChange={ handleChange }
          />
          <TextArea
            name="message" 
            value={ message } 
            label='Message'
            onChange={ handleChange }
          />
          <SpanCounter>Characters: {message.length}/{messageCharLimit}</SpanCounter>
          <SubmitDiv>
            <SubmitInput type="submit" value='Send'/>
          </SubmitDiv> 
        </FormStyles>
    }
    </div>
  )

}
export default FormContact;