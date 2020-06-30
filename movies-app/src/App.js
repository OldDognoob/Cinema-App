import React, {useState} from 'react';
import Search from './components/Search'
import axios from 'axios';
import Results from './components/Result';


function App() {
  // s is our search query when we type and search our movie
  const [state, setState] = useState({
    s: "",
    results:[],
    selected:{}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";
   
  // search request
  const search = (event) =>{
    if (event.key === "Enter"){
      axios(apiurl + "&s=" + state.s).then(({data}) =>{
        let result = data.Search;

        setState(prevState =>{
          return{...prevState, results: result}
        })
      });
    }
  }

  // handle our value when we are typing
  const handleInput = (event) =>{
    let s = event.target.value;

    setState(previousState => {
      return {...previousState, s: s}
    })


  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search="search"/>
        <Results results={state.results}/>
      </main>
  
    </div>
  );
}

export default App;
