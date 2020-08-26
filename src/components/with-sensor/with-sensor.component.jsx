import React from 'react';
import VizSensor from 'react-visibility-sensor';

import styles from './with-sensor.styles.css';


const WithSensor = WrappedComponent => {
  const Sensor = ({ sensorActivePage }) => {
    return (<VizSensor className={styles.Viz} onChange={()=>{
      sensorActivePage(); 
      console.log('sensor on/off');}
    }>
        <WrappedComponent className={styles.insideDiv}/>
      </VizSensor>)
  };
  return Sensor;
};

export default WithSensor;