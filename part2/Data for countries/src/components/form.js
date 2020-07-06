import React, {useState, useEffect} from "react"
import axios from "axios"

const Weather = ({name}) => {
    const [temperature, setTemp] = useState(0)
    const [address, setAdd] = useState("")
    const [speed, setSpeed] = useState(0)
    const [direction, setDi] = useState("")
    const api_key = process.env.REACT_APP_API_KEY;  
    useEffect(response => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`)
            .then((response) => {
                setTemp(response.data.current.temperature)
                setAdd(response.data.current.weather_icons)
                setSpeed(response.data.current.wind_speed)
                setDi(response.data.current.wind_dir)
            })        
    },[])
    return(
        <>
        <h1>Weather in {name}</h1>
        <h3>temperature {temperature} celcius</h3>
        <img src={address} alt="weather" />
        <h3>wind: {speed} direction {direction}</h3>
        </>
    )
}


const Check = ({aray}) => {
    const [array, setArray] = useState(aray)
    useEffect(() => {
        setArray(aray)
    },[aray])
    
    const handle = (name) =>{
        const filter = array.filter(x => x.name === name)
        setArray(filter)
    }

    if (array.length > 10) {
        return(
            <>
            "Too many matches, specify another query"
            </>
        )
    }
    else if (array.length < 10 && array.length !== 1) {

        return (
            <>
            {array.map((x, index) => {
                return (
                    <div key={index + 1}>
                        <p>{x.name} <button onClick={() => handle(x.name)}>show</button></p>
                    </div>
                )
            })}
            </>

        )
    }
    else if (array.length === 1) {
        
        return (
            <>
            {array.map((x, index) => {
                return (
                    <div key={index + 1}>
                        <h1>{x.name}</h1>
                        <p>capital {x.capital}</p>
                        <p>population {x.population}</p>
                        <h2>languages</h2>
                        <ul>
                            {x.languages.map((lang, index) => <li key={index+1} >{lang.name}</li>)}
                        </ul>
                        <img src={x.flag} alt="flag" style={{width:"128px"},{height:"128px"}}/>
                        <Weather name={x.name} />
                    </div>
                )
            })}
            </>
        )
    }
    else if (array.length === 0) {
        return (
            <>
            </>
        )
    }
    
}

const Form = ({array}) => {
    const [search, setSearch] = useState("")
    const [newcountry, setCountry] = useState([])

    const detect = (event) => {
        setSearch(event.target.value);
    }
    useEffect(() => {
        const regex = new RegExp(search,"gi")
        const filter = array.filter(x => x.name.match(regex))
        setCountry(filter)
        if (search === "") {
            setCountry([])
        }
    },[search])
    return (
        <form>
            <div>
                find countries <input value={search} onChange={detect} />
            </div>
            <div>
                <Check aray={newcountry} />
            </div>
        </form>
    )
}

export default Form