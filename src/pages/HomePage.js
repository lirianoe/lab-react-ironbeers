
import { Link } from "react-router-dom";
import beersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'

const HomePage = () => {
    return (
        <div className="links">
            <Link className="link" to='beers'>
                <img src={beersImg} alt="Beer" />
                <div className="linkText">
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum ducimus officiis eaque fugit facilis non sapiente cupiditate nesciunt eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, consequuntur.</p>
                </div>
                
            </Link>
                
            <Link className="link" to='/random-beer'>
                <img src={randomBeerImg} alt="Random Beer" />
                <div className="linkText">
                <h1>Random</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum ducimus officiis eaque fugit facilis non sapiente cupiditate nesciunt eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis.</p>
                </div>
                
            </Link>
            
            <Link className="link" to='/new-beer'>
                <img src={newBeerImg} alt="New Beer" />
                <div className="linkText">
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum ducimus officiis eaque fugit facilis non sapiente cupiditate nesciunt eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, ullam.</p>
                </div>
                
            </Link>
            
        </div>
    );
}

export default HomePage;
