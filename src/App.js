import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Stuff from './components/Stuff'


function Header() {
  return <h1>Hello World</h1>
}
function App() {
  return <Stuff>
    <Nav name = 'Howdy'/>
  </Stuff>
}



export default App;
