import React, { useEffect } from 'react';

const AllCountries = ({filteredData}) => {
  console.log("Allcountries", filteredData);

          filteredData.map((country) => {
            return (
              <div key={country.name.common}>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                {console.log("hello")}

                <h3>languages</h3>
                <ul>
                  {Object.values(country.languages).map(lang => <li>{lang}</li>)}
                </ul>

                <img src={country.flags.png} alt=''/>


              </div>

            );
          }
    )



}

export default AllCountries;