import React, { useEffect } from 'react';

import FormContact from '../../components/form-contact/form-contact.component';
import WithToastProvider from '../../components/with-toast/with-toast.component';
import SocialLinks from '../../components/social/social.component';

import {
  ContactStyles,
  PageContainer,
  SocialContainer,
  InfoDiv,
  InfoDetail
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
        <p>Follow me in social network</p>
        <SocialContainer>
          <SocialLinks />
        </SocialContainer>
        <InfoDiv>
          <InfoDetail>
            <p>Address:</p>
            <p>Planernaya Ulitsa D14 K.2</p>
          </InfoDetail>
          <InfoDetail>
            <p>My CV:</p>
            <p>Here it is my C.V.</p>
          </InfoDetail>
          <InfoDetail>
            <p>Nationality:</p>
            <p>Spanish</p>
          </InfoDetail>
          <InfoDetail>
            <p>Degree:</p>
            <p>Physics</p>
          </InfoDetail>
          <InfoDetail>
            <p>Age:</p>
            <p>43 years</p>
          </InfoDetail>
        </InfoDiv>
      </PageContainer>
    </ContactStyles>
  )

}
export default ContactPage;