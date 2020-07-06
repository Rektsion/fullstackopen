import React, {useState, useEffect} from "react"



const Filter = ({array}) => {
    const[newfilter, setFilter] = useState("")
    const[newP, setNew] = useState([])
    const handleFilter = (event) => {
        setFilter(event.target.value)
        
        
    }
    useEffect(() => {
            const regex = new RegExp(newfilter, "gi");
            const filter = array.filter(person => person.name.match(regex))
            setNew(filter)
            if (newfilter === "") {
                setNew([])
            }
    },[newfilter])
    
    return (
        <>
            <form>
                <div>
                    filter shown with: <input onChange={handleFilter} value={newfilter} />
                </div>
            </form>
            {newP.map(x => <p>{x.name} {x.number}</p>)}
        </>
    )
}

export default Filter;