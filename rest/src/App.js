import {useEffect, useState} from "react";
import axios from 'axios'

const url = "https://restcountries.com/v3.1/all";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [findCountry, setFindCountry] = useState([])

    useEffect(() => {
        axios.get(url).then(response => setCountries(response.data))
    }, [])


    const handleSearch = (e) => {
        e.preventDefault();
        const country = e.target.value;
        setSearch(country);
        const filterCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
        if (country.length === '') {
            setFindCountry([])
        } else {
            setFindCountry(filterCountries)
        }
    }

    const match = ()=>{
        if(findCountry.length > 10){
            console.log("first match", findCountry.length)
            return(<div>Too many matches</div>)
        }

        if(findCountry.length >1 && findCountry.length <10){
            console.log("second match", findCountry.length)
            return(

            findCountry.map(country => {
                return (
                    <div key={country.name.common}>
                        {country.name.common}
                    </div>
                )
            }))
        }

        if(findCountry.length >0 && findCountry.length <=1){
            console.log("third match", findCountry.length)
            return(
            findCountry.map(country => {
                return (
                    <div key={country.name.common}>
                        {country.name.common}<br/>
                        {country.area}
                        <h3>languages</h3>
                        {<img src={country.flags.png} alt={country.name.common}/>}
                    </div>
                )
            }))
        }
    }

    console.log(search);
    console.log(countries);
    return (
        <div>
            <h1>all Countries</h1>
            <label htmlFor="">search: </label>
            <input type="text" value={search} onChange={handleSearch}/>

            {match()}

        </div>
    );
}

export default App;
