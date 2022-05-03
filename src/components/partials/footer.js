import '../../css/gameMain.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitterSquare, faFacebook} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div style={{'padding-top':'10px'}} className="bg-dark row">
                <div style={{fontSize:".7em", color:"#5d5d5d"}} className="row text-center mb-2  providers">
                   <div  className="">
                   <a href="" >Music title date, credits, and images provided by AMG</a>
                    <span>  |  </span>
                    <a href="" >Music title date, credits, and poster art provided by IMDb</a>
                    <span>  |  </span>
                    <a href="" >Video and Images provided by IVA </a>
                   </div>
                    
                    <div><a href="" >We Deal With Criticism</a></div>

                </div>
                <ul style={{fontWeight:"bold", fontSize:".8em"}}className=" list-inline text-center">
                    <a href="" className="list-inline-item">MOVIES</a>
                    <a href="" className="list-inline-item">TV</a>
                    <a href="" className="list-inline-item">MUSIC</a>
                    <a href="" className="list-inline-item">PS4</a>
                    <a href="" className="list-inline-item">XBOXONE</a>
                    <a href="" className="list-inline-item">SWITCH</a>
                    <a href="" className="list-inline-item">PC</a>
                    <a href="" className="list-inline-item">WIIU</a>
                    <a href="" className="list-inline-item">3DS</a>
                    <a href="" className="list-inline-item">PS VITA</a>
                    <a href="" className="list-inline-item">IOS</a>
                    <a href="" className="list-inline-item">REPORTS</a>
                    <a href="" className="list-inline-item">RSS FEEDS</a>
                </ul>
                <ul className="list-inline text-center">
                <li className="list-inline-item"><a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook} className="twitter-icon" style={{color:"#5d5d5d"}}/></a></li>
                <li className="list-inline-item"><a href="http://www.instagram.com"><FontAwesomeIcon icon={faInstagram} className="twitter-icon" style={{color:"#5d5d5d"}}/></a></li>
                <li className="list-inline-item"><a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitterSquare} className="twitter-icon" style={{color:"#5d5d5d"}}/></a></li>
                </ul>
                
                <div className="text-center row" style={{"padding-bottom":"2.1rem"}}>
                <ul className="list-inline text-center">
                    <div>
                        <a className="list-inline-item" href="http://www.facebook.com">Careers</a>
                        <a className="list-inline-item" href="http://www.instagram.com">FAQ</a>
                        <a className="list-inline-item" href="http://www.twitter.com">About Metacritic</a>
                        <a className="list-inline-item" href="http://www.facebook.com">Help & Support</a>
                        <a className="list-inline-item" href="http://www.instagram.com">Contact</a>
                    </div>
                    <div>
                        <a className="list-inline-item" href="http://www.twitter.com">Do Not Sell My Information</a>
                        <a className="list-inline-item" href="http://www.facebook.com">Privacy Policy</a>
                        <a className="list-inline-item" href="http://www.instagram.com">Cookie Setting</a>
                        <a className="list-inline-item" href="http://www.twitter.com">Terms of Use</a>
                        <a className="list-inline-item" href="http://www.facebook.com">Gamespot</a>
                   </div>
                </ul>
                {/* <span  style={{color:"#5d5d5d"}}> © 2022 METACRITIC, A RED VENTURES COMPANY. ALL RIGHTS RESERVED</span> */}
                </div>
            </div>
    )
}
export default Footer;