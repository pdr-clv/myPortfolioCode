import React, { useState } from 'react';
import { AccordionContainer, AccordionButton, AccordionContent} from './accordion.styles';
const Accordion = () => {
  const [open, setOpen] = useState([false,false,false]);

  return (
    <AccordionContainer>
      <AccordionButton onClick={()=>setOpen([!open[0],false,false])}>Frontend</AccordionButton>
      <AccordionContent open={open[0]}>
        <p>My recent experience nowadays is focused in react.js for front end, with strong knowledge of javascript to fetch data from backend, also I use styled-components for styles. Styling a web, creating responsive styles and placing all elements in the right place it is a job must be done with accurancy, and takes much time. This makes the difference between good and normal frontend developers.</p>
        <p>Thanks to react, everytime it is faster to re-use your components from previous projects, and you can gain time in frontend developing, scalability and good understanding for the rest of the team</p>
        <p>React applications are very fast to any element changeable of website, renders only the necessary elements, withouth reloading whole website. React redux it is brilliant to optimize even more this re-rendering elements.</p>
        <p>I believe React has the solution of many problems I found in my previous projects developed with pure javascript.Despite this, I think another frameworks like Angular or Vue provides similar solutions. I think I can adapt to any of other frontend frameworks. After learning the first framework, everything goes faster later for another one. I admit I'd like to improve in future testing performances and typescript to make code asier to debug.</p>
        <p>React also is </p>
      </AccordionContent>
      <AccordionButton onClick={()=>setOpen([false,!open[1],false])}>Frontend1</AccordionButton>
      <AccordionContent open={open[1]}>
        <p>My recent experience nowadays is focused in react.js for front end, with strong knowledge of javascript to fetch data from backend, also I use styled-components for styles. Styling a web, creating responsive styles and placing all elements in the right place it is a job must be done with accurancy, and takes much time. This makes the difference between good and normal frontend developers.</p>
        <p>Thanks to react, everytime it is faster to re-use your components from previous projects, and you can gain time in frontend developing, scalability and good understanding for the rest of the team</p>
      </AccordionContent>
      <AccordionButton onClick={()=>setOpen([false,false,!open[2]])}>Frontend2</AccordionButton>
      <AccordionContent open={open[2]}>
        <p>My recent experience nowadays is focused in react.js for front end, with strong knowledge of javascript to fetch data from backend, also I use styled-components for styles. Styling a web, creating responsive styles and placing all elements in the right place it is a job must be done with accurancy, and takes much time. This makes the difference between good and normal frontend developers.</p>
        <p>Thanks to react, everytime it is faster to re-use your components from previous projects, and you can gain time in frontend developing, scalability and good understanding for the rest of the team</p>
        <p>React applications are very fast to any element changeable of website, renders only the necessary elements, withouth reloading whole website. React redux it is brilliant to optimize even more this re-rendering elements.</p>
        <p>I believe React has the solution of many problems I found in my previous projects developed with pure javascript.Despite this, I think another frameworks like Angular or Vue provides similar solutions. I think I can adapt to any of other frontend frameworks. After learning the first framework, everything goes faster later for another one. I admit I'd like to improve in future testing performances and typescript to make code asier to debug.</p>
        <p>React also is </p>
      </AccordionContent>
    </AccordionContainer>
  )
};

export default Accordion;
