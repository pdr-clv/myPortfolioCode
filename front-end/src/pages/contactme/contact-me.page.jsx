import React, { useEffect } from 'react';

import FormContact from '../../components/form-contact/form-contact.component';
import WithToastProvider from '../../components/with-toast/with-toast.component';
import SocialLinks from '../../components/social/social.component';

import {
  ContactStyles,
  PageContainer,
  SocialContainer
} from './contact-me.styles.jsx';


const FormToasted = WithToastProvider(FormContact)

const ContactPage = () => {
  //This is for footer links, if we click on them, automatically will scrollTo top.
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);

  return (
    <ContactStyles>
      <PageContainer>
        <h1>Contact</h1>
        <p>For all enquiries, email me filling the form bellow.</p>
        <FormToasted placealert='top-center' timedismiss={10000} />
        <h4>Follow me in social network</h4>
        <SocialContainer>
          <SocialLinks />
        </SocialContainer>
      </PageContainer>
    </ContactStyles>
  )

}
export default ContactPage;