
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  return (
    <>
     
      <h1>React core concept</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click 2</button>
      
    </>
  )
}

export default App
