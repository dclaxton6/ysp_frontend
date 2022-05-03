import { findAllPlatforms} from '../../../api/game.api.js'
import {
    useState,
     useEffect,
     } from 'react';
const LegacyPlatforms = () => {
    const [platforms, setPlatforms] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        findAllPlatforms().then(res => res.data).then((platforms) => { 
            setPlatforms(platforms);
        }).catch(error => {
            setError(error);
        })
    }, [])
    if(error){
        return <div>Error: {error.reason}</div>;
      } else {
    
    return(
        <div className="col-3 float-right mt-5 ms-5">
            <div className="browse-platform   floatLeft">
                <span>LEGACY PLATFORMS</span>
                <ul className="paddingZero text-center row">
                     {platforms.filter(platform => {
                        return platform.legacyStatus === true
                    }).map( platforms => (
                        <div  className="col-6 border-top p-left-zero">
                            <a href=''><li className="text-dark">{platforms.platformName}</li></a>
                        </div>
                    ))}
                   {/* @TODO: figure out how to have this div only appear if the amount of platforms is odd */}
                    <div  className="col-6 border-top p-left-zero">
                        <li className=" "></li>
                    </div>
                </ul>
            </div>    
        </div>
    )
    }
}

export default LegacyPlatforms;