import React, { useState } from "react";
import './styles.css'; // Importar el archivo CSS

export default function Pagina() {
    const [searchTerm, setSearchTerm] = useState('Jack Johnson');
    const [results, setResults] = useState(null);
    const [selectedOption, setSelectedOption] = useState('all'); // Nueva variable de estado

    const handleSearch = async () => {
        let persona = `https://itunes.apple.com/search?term=${searchTerm.trimEnd().replace(/ {2,}/g, "+").replace(/ /g, "+").toLowerCase()}`;
        if (selectedOption!="all")
            {persona = persona+`&media=${selectedOption}`}
        console.log(persona);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="container">
            <h1>iTunes Search</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter artist name"
            />
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="all">Todo</option>
                <option value="music">Musica</option>
                <option value="movie">Pelicula</option>
                
            </select>
            <button onClick={handleSearch}>Search</button>
            {results && (
                <pre>{JSON.stringify(results, null, 2)}</pre>
            )}
        </div>
    );
}
