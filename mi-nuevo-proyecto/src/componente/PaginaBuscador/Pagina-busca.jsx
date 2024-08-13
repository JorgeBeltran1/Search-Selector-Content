import React, { useState } from "react";
import './styles.css'; // Importar el archivo CSS
import ITunesSearch from "../lector-Api/ApliRead";
import { useFetch } from "../lector-Api/UsarFetch";
import { sendAndReceiveJson } from "../lector-Api/FSAGD";
import { Button, Table, Modal, ModalBody, Form } from "react-bootstrap";


export default function Pagina() {
    const [searchTerm, setSearchTerm] = useState('Jack Johnson');
    const [selectedOption, setSelectedOption] = useState('all'); // Nueva variable de estado
    const [searchUrl, setSearchUrl] = useState(null); // Estado para la URL de búsqueda
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = () => {
        setLoading(true)
        let persona = `https://itunes.apple.com/search?term=${searchTerm.trimEnd().replace(/ {2,}/g, "+").replace(/ /g, "+").toLowerCase()}`;
        if (selectedOption!="all")
            {persona = persona+`&media=${selectedOption}`}
        console.log(persona);
        setSearchUrl(persona);
        sendAndReceiveJson(persona).then((responsedata)=> {
                setData(responsedata.results);
                console.log(data);
                setLoading(false)
            })
    };
    const mas = (track) => {console.log('====================================');
    console.log(track);
    console.log('====================================');};


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
                <option value="audiobook">Audio Libro</option>
            </select>
            <button onClick={handleSearch}>Search</button>

            {!loading? <Table striped bordered hover className="table">
                <thead>
                <tr>
                <th>Nombre de Artista </th>
                <th>Pais </th>
                <th>Fecha de Lanzamiento</th>
                <th>Media</th>
                <th> Nombre </th>
                <th> Imagén </th>
                <th> Mas Información </th>
                </tr>
            </thead>
            <tbody>
                {data.map((track)=>(
                    <tr key={track.trackId}>
                        <td>{track.artistName}</td>
                        <td>{track.country}</td>
                        <td>{track.releaseDate.substring(0,10)}</td>
                        <td> {track.kind === "song" ? (<>Musica</>) : track.wrapperType === "audiobook" ? (<>Audio Libro</>) : ( <>Pelicula</>)}</td>

                        <td>{track.trackName? <>{track.trackName}</>:<>{track.collectionName}</>}</td>
                        <td><img src={track.artworkUrl60} alt="Imagen No Disponible" /></td>
                        <td>  <button onClick={() => mas(track)}>Mas</button></td>

                    </tr>
                ))}
                
            </tbody>
            </Table>: <div>cargando</div> }
            
            

        </div>
    );
}
