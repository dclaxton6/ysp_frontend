import {findAllGenres} from '../../../api/game.api.js'
import {
    useState,
     useEffect,
     } from 'react';
const TopGames = () => {
    console.log("test 5")
    const[genres, setGenres] = useState([]);
    useEffect(() => {
        findAllGenres().then(res => res.data).then((genres) => {
            setGenres(genres);
        })
    }, [])

    return(
        <div className="col-8 row">
            <div className="bg-dark text-light mb-2">TOP GAMES</div>
            
                <div className="col-2 ">
                    <a href="#">
                        <img src="https://images.unsplash.com/photo-1634034379073-f689b460a3fc?ixlib=rb-1.2
                            .1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="img-fluid" alt="filler"/>   
                    </a> 
                </div>
                <div className="col border-bottom content-body mb-5 bg-light">
                    
                    <div className="col-10 row">
                        <div className="col-10">
                            <div style={{fontSize:20}} className="col-1 floatLeft">#1</div>
                            <div style={{fontSize:20}} className="col-6 fontBold "><a href="#" className="text-dark">God of War</a></div>
                            <div style={{fontSize:14, color: "#999"}} className="col-12 floatLeft">April 20, 2018</div>
                            <div className="summary col-12">The God of War has changed... and this is not the Kratos you know.
                                A difficult and unfamiliar road awaits as you explore a stunning retelling of a classic story. 
                                oin Kratos as he adventures through a deep and reflective journey of growth, violence and... </div>
                        </div>

                        <div className="col-2 score-wrap">
                            <div style={{fontSize:25}} className="score game_positive score-wrap">93</div>
                        </div>

                    </div>

                </div>
            <div className=" browse-genre text-center col-3">
                <span className="genre-label ">Browse by Genre</span>
                <ul className="paddingZero">
                    
                    {genres.map( genres => (
                        <a><li>{genres.genre}</li></a>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TopGames;