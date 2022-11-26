import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Stuff from './components/Stuff'
import Card from './Card'
import Btn from './Btn'


let myName = 'Fay';
let myAge = 18;

function Header() {
  return <h1>Hello World</h1>
}
// function App() {
//   return <Stuff>
//     <Nav name = {myName} age = {myAge}/>
//   </Stuff>
// }


function App() {
  return (
    <div className = 'App'>
      <h1>Task: You are to add three cards</h1>
      <Card h2="A h2 card text" h3="A h3 card text"/>
      <Card h2="Second h2 card text" h3="Second h3 card text"/>
      <Card h2="Third h2 card text" h3="Third h3 card text"/>

      <Btn/>
    </div>
  )
}


export default App;
