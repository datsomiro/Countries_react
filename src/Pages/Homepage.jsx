import React, {useEffect, useState} from 'react';
import Countries from '../Components/Countries';

const api = 'https://restcountries.eu/rest/v2/all';
const apiByName = 'https://restcountries.eu/rest/v2/name/';


const Homepage = () => {
    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        fetchingCountries()
    }, [])

    const fetchingCountries = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setAllCountries(data)
        console.log(data)
    }

   

    const handleSetSearchValue = (e) => {

    };

    const handleKeyPress = (e) => {

    };

    const handleSearchByName = async () => {
            const response = await fetch(apiByName+searchValue)
            const data = await response.json()
            setAllCountries(data)
            console.log(data)
    };



    return (
        <div>
            {allCountries.length ? (
                allCountries.map((c, index) => (
                    <Countries country={c} key={index} />
                ))
            ) : (
                <span>No countries</span>
            )}
        </div>
    );
}

export default Homepage
