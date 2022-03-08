import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { findAllGames, findAllGamesById } from './api/game.api.js'
/* import {
   useState,
    useEffect,
     //useReducer 
    } from 'react'; */
import Webpages from './views/webPages';

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}

function App(){
  /* const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    findAllGames().then(res => res.data)
    .then(
        (data) => {
            
            setIsLoaded(true);
            setError(error);
            setData(data);
        }
    )
  }, []) */

return(
<div>
  <Webpages />
</div>
);

{/*
  if(error){
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded){
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '200px',
  }}><h1>Loading...</h1></div>;
  } else {
      return(
        <reactRouter.BrowserRouter>
          <reactRouter.Router exact path="/" component={GameInfo}/>
        </reactRouter.BrowserRouter>
       <div>
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
        {data.map( data => (
          <tr>
            <th key={data.id}scope="row">{data.id}</th>
            <td>{data.title}</td>
            <td>{data.platform}</td>
            <td>{data.rating}</td>
            <td>{data.developer}</td>
            <td>{data.summary}</td>
            <td>{data.releaseDate}</td>
            <td>{data.score}</td>
          </tr>
        ))}
      
      </tbody>
  </table>
  </div>
      )
  }
}

//function tableTest(){
  //let test = await findAllGamesById(5).then((response) => { return response })

  //return (
   
   <div>
  
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
          <th scope="col"></th>
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
          <td>GTA</td>
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


</div>
*/}
  //); 
}
export default App;
