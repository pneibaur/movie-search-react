import React from "react";
import './App.css';
import MovieDisplay from './Components/MovieDisplay';
import Form from './Components/Form';


function App() {
  const apiKey = "#"
  // below is State to hold the movie data
  const [movie, setMovie] = React.useState(null)
  // this is called async/await block (native to ES6). you use these in tandem. and you're telling JS
  // that this function needs to happen asynchronosly. using await specifies what to wait for. 
  const getMovie = async(searchTerm) =>{
    // make fetch request and store response. similar to ajax call. 
    // await tells JS to wait until the fetch returns with data (otherwise it would return a promise until it resolved.)
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    // parses json response into a JS object that we can use! 
    // the ".json()" is considered a long-running function just like "fetch". so you need to use "await" with it. 
    const data = await response.json();
    // puts the found movie into Movie State. 
    setMovie(data)
  }
  // we pass the "getMovie" function as a prop dow to the form. 
  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      <MovieDisplay/>
    </div>
  );
}

export default App;
