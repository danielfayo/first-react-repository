import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Stuff from './components/Stuff'
import Input from './Card'
import Btn from './Btn'
import Dog from './components/Dog'


// function App() {
//   return <Stuff>
//     <Nav name = {myName} age = {myAge}/>
//   </Stuff>
// }


function App() {
  const [inputNum, setInputNum] = useState(0);
  return (
    <>
    {/* <Input setInputNum={children} inputNum={children}/> */}
    <Input setInputNum={setInputNum}>
      <Stuff inputNum={inputNum}/>
    </Input>
    
    </>

    /*<div className = 'App'>
      <h1>Task: You are to add three cards</h1>
      <Card h2="A h2 card text" h3="A h3 card text"/>
      <Card h2="Second h2 card text" h3="Second h3 card text"/> 
      <Card h2="Third h2 card text" h3="Third h3 card text"/>

      <Btn/>
      <Dog/>
    </div>*/
  );
}


export default App;
