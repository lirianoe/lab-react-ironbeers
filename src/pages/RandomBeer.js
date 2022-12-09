
import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(axiosResponse => {
            setRandomBeer(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar/>
            <div className="randomBeer">
                <div className="randomBeerImage">
                    <img src={randomBeer.image_url} alt="" />
                </div>
                <div className="randomBeerName">
                    <h1>{randomBeer.name}</h1>
                    <h2>{randomBeer.attenuation_level}</h2>
                </div>
                <div className="randomBeerTagline">
                    <h3>{randomBeer.tagline}</h3>
                    <h4><strong>{randomBeer.first_brewed}</strong></h4>
                </div>
                <div className="randomBeerDescription">
                    <h3>{randomBeer.description}</h3>
                    <h4>{randomBeer.contributed_by}</h4>
                </div>
                    

            </div>
           

            
            
        </div>
    );
}

export default RandomBeer;
