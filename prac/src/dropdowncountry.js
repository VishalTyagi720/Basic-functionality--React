import React, { useState } from "react";


function DropdownCountry () {

    const countries = [
        {name: 'India', value: 'IN', cities: [
            'Mumbai',
            'Delhi',
            'Uttar Pardesh',
            'Punjab'
        ]},
        {name: 'Pakistan', value: 'PK', cities: [
            'Lahore',
            'Karachi',
            'Punjab',
        ]},
        {name: 'United States', value: 'US', cities: [
            'Ohio',
            'Washingtoon DC',
            'New Gersy',
            'Florida',
            'Taxas'
        ]},
        {name: 'Australia', value: 'AUS', cities: [
            'frhjmjfsfv',
            'rutkmh',
            'dbymdnbjrymhnm',
            'ffggtjye',
            'fjiljg'
        ]},
        {name: 'England', value: 'END', cities: [
            'fwrhnmd',
            'bnmjtsanh',
            'o9ogtsy',
            'wegrbrrrrrr',
            'egrrwb'
        ]},
        {name: 'China', value: 'CHN', cities: [
            'Beijing',
            'bhkjnfx',
            'fnhmjdh',
            'thnefs',
            'crwgwbnhmd'
        ]},
    ]

    const [country, setcountry] = useState(0);
    const [city, setcity] = useState(countries[0].cities);

    const handlecountry = (e) => {
        // console.log(e.target.value)
        const value = e.target.value
        setcountry(value)

        handlecities(value)
    }

    const handlecities = (value) => {
        setcity(countries[value].cities)
        console.log(countries[value].cities)
    }

    return (
        <div>
            <form>
                <label htmlFor="countries">Choose your Country: </label>
                <select id="countries" name="countries" onChange={handlecountry}>
                    {countries.map((item, index) => {
                        return (
                            <option key={index} value={index}>{item.name}</option>
                        )
                    })}
                </select>
                &nbsp;&nbsp;&nbsp;
                <label htmlFor="cities">Choose your City: </label>
                <select id="cities" name="cities">
                    {city.map((item, index) => {
                        return (<option key={index} value={item}>{item}</option>)
                    })}
                </select>
            </form>
            <br/>
        </div>
    )
}


export default DropdownCountry;