import React,{useEffect, useState} from 'react';
import Flags from '../Components/Flags';

const api = 'https://restcountries.eu/rest/v2/alpha/';
const FlagPage =(props)=>{
    const [detailCountry, setDetailCountry] = useState([])

    useEffect(() => {
        props.match.params && props.match.params.code && fetchingCountries()
    }, [props.match.params.code])

    const fetchingCountries = async () => {
        const response = await fetch(api+props.match.params.code)
        const data = await response.json()
        setDetailCountry(data)
        console.log(data)
    }

    return (
        <div>
           {detailCountry && <Flags country={detailCountry} />} 
        </div>
    )
}

export default FlagPage
