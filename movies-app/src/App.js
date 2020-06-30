import React, {useState} from 'react';
import Search from './components/Search'


function App() {
  // s is our search query when we type and search our movie
  const [state, setState] = useState({
    s: "",
    results:[],
    selected:{}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  // handle our value when we are typing
  const handleInput = (event) =>{
    let s = event.target.value;
    setState(previousState => {
      return {...previousState, s: s}

      console.log(state.s)
    })


  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput}/>
      </main>
  
    </div>
  );
}

export default App;
