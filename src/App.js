import Item from './components/Item';
import Card from './components/card';

const App = () =>{
  return(
    <>
    <h1>My first application with React</h1>
    <ul>
      <Item>
        Item I
      </Item>
      <Item>
        Item II
      </Item>
      <Item>
        Item III
      </Item>
    </ul>
    <Card />
    </>
  )
}

export default App;