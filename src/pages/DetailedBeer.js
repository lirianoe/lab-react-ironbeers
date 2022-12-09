import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailedBeer = () => {

    let { Id } = useParams()
    const [beerDetail, setBeerDetail] = useState([])
    
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${Id}`)
        .then(axiosResponse => {
            setBeerDetail(axiosResponse.data)
        })
        .catch(err => console.log(err))
    })

    return (
        <div>
            <div className="randomBeer">
                <div className="randomBeerImage">
                    <img src={beerDetail.image_url} alt="" />
                </div>
                <div className="randomBeerName">
                    <h1>{beerDetail.name}</h1>
                    <h2>{beerDetail.attenuation_level}</h2>
                </div>
                <div className="randomBeerTagline">
                    <h3>{beerDetail.tagline}</h3>
                    <h4><strong>{beerDetail.first_brewed}</strong></h4>
                </div>
                <div className="randomBeerDescription">
                    <h3>{beerDetail.description}</h3>
                    <h4>{beerDetail.contributed_by}</h4>
                </div>
                    

            </div>
        </div>
    );
}

export default DetailedBeer;
