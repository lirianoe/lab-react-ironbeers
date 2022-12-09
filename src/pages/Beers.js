import Navbar from "../component/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Beers = () => {
const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(axiosResponse => {
            setBeers(axiosResponse.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar/>

            {beers.map(singleBeer => {
                return (
                    <Link className="singleBeerLink" to={`/beers/${singleBeer._id}`}>
                    <div className="singleBeer">
                        <div className="beerImage">
                        <img src={singleBeer.image_url} alt="beer" />
                        </div>
                        <div className="beerText">
                        <h1>{singleBeer.name}</h1>
                        <h2>{singleBeer.tagline}</h2>
                        <p> <strong>Created By:</strong> {singleBeer.contributed_by}</p>
                        <hr />
                        </div>
                        
                    </div>
                    </Link>
                   
                )
            })}
            
        </div>
    );
}

export default Beers;
