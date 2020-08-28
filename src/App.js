import React from 'react';
import './App.css';
import Greed from './Components/Greed.js';
import Welcome from './Components/Welcome';
import Subscribe from './Components/Subscribe';
import Counter from './Components/Counter';
import EventHandlingFunc from './Components/EventHandlingFunc'
import ClassHandlingFunc from './Components/ClassHandlingFunc';
import ParentComponent from './Components/ParentComponent';
import HelloWorld from './Components/listRendering';
import Form from './Components/Form';
import ConditionalRender from './Components/ConditionalRender';
import StyledComponents from './Components/StyledComponents';
import ClickCounter from './Components/HOC/ClickCounter';
import HoverCounter from './Components/HOC/HoverCounter';

function App() {
  return ( 
    <div className = "App" >

          {/* form component */}
          <Form></Form>

          <Greed name="Satwinder">
           <p>This is superman.!!!!!</p> 
           <p>This is Hero.!!!!!</p> 
          </Greed> 
          <Greed name="Saurav">
          <p>This is Villan.!!!!!</p>  
          </Greed> 
         
          <Welcome name="This is welcome component using class attribute" >  </Welcome>
          <Subscribe></Subscribe>

          <Counter></Counter>

          <EventHandlingFunc></EventHandlingFunc>

          <ClassHandlingFunc></ClassHandlingFunc>

          <ParentComponent></ParentComponent> 

          {/* list rendering */}
          <HelloWorld></HelloWorld>  

          <h1>Conditional Rendering</h1>
          <ConditionalRender></ConditionalRender>

          <h1>Styled components</h1>
          <StyledComponents></StyledComponents>

          <h1>Higher Order Component.</h1>
          {/* // In case of HOC props are not directly passed to below components. Instead they are passed to HOC component
          . In this case Updated Component. And from there we pass props to respective components. */}
          <ClickCounter name="satwinder"/>
          <HoverCounter name="talwinder"/>

          
         
    </div>
  );
}

export default App;
