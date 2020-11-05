import React from 'react';
import {Link} from 'react-router-dom';



const Countries = ({country}) =>  {
    return (
        <Link 
            to={`/${country.alpha3Code}`}>
            <div>
                <img        src={country.flag} alt={country.name}></img>
                <h3>Name:       {country.name}          </h3>
                <h4>Population: {country.population}    </h4>
                <h4>Region:     {country.region}        </h4>
                <h4>Capitale:   {country.capital}      </h4>
            </div>
        </Link>
        )
    
}

export default Countries
