import React, { useState } from "react";
import './styles.css';
import { sendAndReceiveJson } from "../lector-Api/FSAGD";
import { Table, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaMusic, FaFilm } from 'react-icons/fa';
import { GiAudioCassette } from 'react-icons/gi';
export default function Pagina() {
    const [searchTerm, setSearchTerm] = useState('Jack Johnson');
    const [selectedOption, setSelectedOption] = useState('all');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    const handleSearch = () => {
        setLoading(true);
        let persona = `https://itunes.apple.com/search?term=${searchTerm.trimEnd().replace(/ {2,}/g, "+").replace(/ /g, "+").toLowerCase()}`;
        if (selectedOption !== "all") {
            persona = persona + `&media=${selectedOption}`;
        }
        sendAndReceiveJson(persona).then((responsedata) => {
            setData(responsedata.results);
            setLoading(false);
            setCurrentPage(1); // Reiniciar a la primera página después de la búsqueda
        });
    };

    const mas = (track) => {
        if (track.wrapperType === "audiobook") {
            navigate('/repAudioLib', { state: { track } });
        }
        if (track.kind === "song") {
            navigate('/repAudio', { state: { track } });
        }
        if (track.kind === "feature-movie") {
            navigate('/repVideo', { state: { track } });
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <Pagination className="pagination-container">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className={`page-btn ${number === currentPage ? 'active' : ''}`}
                        onClick={() => handlePageChange(number)}
                    >
                        {number === currentPage ? `Página ${number}` : number}
                    </button>
                ))}
            </Pagination>

        );
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
                <button className="search-btn" onClick={handleSearch}>Buscar <FaSearch /></button>
            
            {!loading ? (
                data.length === 0 ? (
                    <p>Inicia tu Búsqueda</p>
                ) : (
                    <>
                        {renderPagination()}
                        <Table striped bordered hover className="table">
                            <thead>
                                <tr>
                                    <th>Nombre de Artista</th>

                                    <th>Fecha de Lanzamiento</th>
                                    <th>Media</th>
                                    <th>Nombre</th>
                                    <th>Imagén</th>
                                    <th>Más Información</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((track) => (
                                    <tr key={track.trackId}>
                                        <td>{track.artistName}</td>

                                        <td>{track.releaseDate.substring(0, 10)}</td>
                                        <td>{track.kind === "song" ? <FaMusic /> : track.wrapperType === "audiobook" ? <GiAudioCassette /> : <FaFilm />}</td>
                                        <td>{track.trackName ? track.trackName : track.collectionName}</td>
                                        <td><img src={track.artworkUrl60} alt="Imagen No Disponible" /></td>
                                        <td><button onClick={() => mas(track)}>Más</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="pagination-container">
                            {renderPagination()}
                        </div>
                    </>
                )
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );

}
