import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { findAllGames, findAllGamesById } from './api/game.api.js'

 function App() {
   findAllGamesById(5).then(response => console.log(response)).catch( (error) => console.log(error))
  return (
   
  <div>
    

    {/*
  <style>{`
  .button1{
    //color: purple;
   // background-color: black;
    
  }

  .buttonContainer{
    float:right;
    margin-right:20px;
    margin-bottom:20px;
  }
    `}
    
  </style>

  <h1>Testing Api </h1>

  <div className="buttonContainer">
    <input/>
    <Button className='button1'>Test</Button>
  </div>

  <h5 style={{float:"left"}}>Game Info</h5>

  <table class="table table-striped table-dark table-bordered table-hover">
      <thead>
      <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Platform</th>
          <th scope="col">Rating</th>
          <th scope="col">Developer</th>
          <th scope="col">Summary</th>
          <th scope="col" >Release Date</th>
          <th scope="col">Score</th>

      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>findAllGames(1);</td>
          <td>PC</td>
          <td>M</td>
          <td>Rockstar</td>
          <td>Summarizing some shit</td>
          <td>2-22-2022</td>
          <td>75</td>
      </tr>
      </tbody>
  </table>


  <h5>Critic Review</h5>

  <table class="table table-striped table-dark table-bordered table-hover">
      <thead>
      <tr>
          <th scope="col">#</th>
          <th scope="col">Publication</th>
          <th scope="col">GameId</th>
          <th scope="col">Review</th>
          <th scope="col">Review_Date</th>
          <th scope="col">Score</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>IGN</td>
          <td>2</td>
          <td>Review Review Review</td>
          <td>2-22-2022</td>
          <td>83</td>
      </tr>
      </tbody>
  </table>

  <h5>User Review</h5>

  <table class="table table-striped table-dark table-bordered table-hover">
      <thead>
      <tr>
          <th scope="col">#</th>
          <th scope="col">User_Name</th>
          <th scope="col">GameId</th>
          <th scope="col">Review</th>
          <th scope="col">Review_Date</th>
          <th scope="col">Score</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>TestYmCTest</td>
          <td>2</td>
          <td>Review Review Review</td>
          <td>2-22-2022</td>
          <td>83</td>
      </tr>
      </tbody>
  </table>

*/}

</div>
  );
}

export default App;
