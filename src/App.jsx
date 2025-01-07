import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "teste 1",
      category: "trampo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "teste 2",
      category: "trampo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "teste 3",
      category: "trampo",
      isCompleted: false,
    },


  ])
  
 return <div className='App'>
<div>

</div>



 </div>;
}
export default App;
