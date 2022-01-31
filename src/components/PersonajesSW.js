import React from "react";
import { url } from "../helpers/url"

const PersonajesSW = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [filterPersonajes, setFilterCharacters] = React.useState("")

    const handleSearch = (event) => {
        setFilterCharacters(event.target.value)
    }
    React.useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setPersonajes(data.results))
    }, [])
    const PersonajesInput = personajes.filter(personajes => {
        return CharacterData.name.toLowerCase().includes
        (filterPersonajes.toLocaleLowerCase())
    })
    return (
        <div className="div-personajes">
            <nav className="nav">
                <input 
                type="search"
                name="data"
                value={filterPersonajes}
                onChange={handleSearch}
                placeholder="Buscar"
                />
            </nav>
            <div className="container-personajes">
                {
                    PersonajesInput.map(personajes => (
                        <div key={personajes.id}
                        className="personajes">
                        <img src={personajes.image} alt={personajes.name}/>
                        <p>{personajes.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PersonajesSW;