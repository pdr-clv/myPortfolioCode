import React, { useState, useEffect } from 'react';
import accordionAboutme from '../../data/accordion-aboutme.json';
import { AccordionContainer, AccordionButton, AccordionContent} from './accordion.styles';

const Accordion = () => {

  const [open, setOpen] = useState([]);
  const [AccordionNumItems, setNumItems] = useState([]);

  //useEffect to count how many items are in Accordion json, for later set the active (open) accordion with setOpen (array of open accordion). It is not very elegant, but works for small number of elements in the accordion component
  useEffect(() => {
    const numItems = accordionAboutme.length;
    let arrayNumItems = [];
    for (let i = 0; i<numItems; i++) {
      arrayNumItems.push(i);
    }
    setNumItems(arrayNumItems);
  }, []);

  const getArrayOpen = (index) => {
    let arrayOpen = [];
    AccordionNumItems.forEach(i => {
      if (i===index) {
        arrayOpen.push(!open[index])
      } else {arrayOpen.push(false)}})
    return arrayOpen;
  }

  return (
    <AccordionContainer>
      {
        accordionAboutme.map((element,index) =>{
          return (<div key = {index} ><AccordionButton 
            key={index+1} 
            onClick={() => setOpen(getArrayOpen(index))}
            selectedStatus={open[index]}
          >
            {element.accordionHeader}
            <i className="fas fa-caret-down"></i>
          </AccordionButton>
          <AccordionContent key={index} open={open[index]}>
          {
            element.accordionItems.map((accordionItem,indexp) => <p key = {indexp}>{accordionItem}</p>)
          }
          </AccordionContent>
          </div>)})
      }
    </AccordionContainer>
  )
};

export default Accordion;
