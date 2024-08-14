import React, { useState } from "react";
import './styles.css';
import { sendAndReceiveJson } from "../lector-Api/FSAGD";
import { Table, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaMusic, FaFilm } from 'react-icons/fa';
import { GiAudioCassette } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Pagina() {
    const [searchTerm, setSearchTerm] = useState('Jack Johnson');
    const [selectedOption, setSelectedOption] = useState('all');
    const [selectedOption1, setSelectedOption1] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'artistName', direction: 'asc' }); // Estado para el ordenamiento
    const itemsPerPage = 10;
    const navigate = useNavigate();

    const handleSearch = () => {
        setLoading(true);
        let persona = `https://itunes.apple.com/search?term=${searchTerm.trimEnd().replace(/ {2,}/g, "+").replace(/ /g, "+").toLowerCase()}`;
        if (selectedOption !== "all") {
            persona = persona + `&media=${selectedOption}`;
        }
        persona = persona + `&limit=${selectedOption1}`;

        sendAndReceiveJson(persona).then((responsedata) => {
            setData(responsedata.results.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            }));

            setLoading(false);
            setCurrentPage(1);

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

    const handleOptionChange1 = (event) => {
        setSelectedOption1(event.target.value);
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

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });

        setData((prevData) => {
            return [...prevData].sort((a, b) => {
                let aValue = a[key];
                let bValue = b[key];

                if (key === 'trackName') {
                    aValue = a.trackName ? a.trackName : a.collectionName;
                    bValue = b.trackName ? b.trackName : b.collectionName;
                }

                if (key === 'kind') {
                    aValue = a.kind || a.wrapperType;
                    bValue = b.kind || b.wrapperType;
                }

                if (aValue < bValue) return direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        });
    };

    const renderSortIcon = (key) => {
        if (sortConfig.key === key) {
            if (sortConfig.direction === 'asc') {
                return <FontAwesomeIcon icon={faArrowUp} />;
            } else {
                return <FontAwesomeIcon icon={faArrowDown} />;
            }
        }
        return null;
    };

    return (
        <div className="container">
            <h1>iTunes Search</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {console.log(e.target.value);
                    setSearchTerm(e.target.value)}}
                placeholder="Ingresa las considencias"
            />
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="all">Todo</option>
                <option value="music">Musica</option>
                <option value="movie">Pelicula</option>
                <option value="audiobook">Audio Libro</option>
            </select>
            <select value={selectedOption1} onChange={handleOptionChange1}>
                <option value="" disabled hidden>Número resultados Mostrados</option>
                <option value="50">50</option>
                <option value="25">25</option>
                <option value="100">100</option>
                <option value="200">200</option>
            </select>
            <button className="search-btn" onClick={handleSearch}>Buscar <FaSearch /></button>
            {!loading ? (
                data.length === 0 ? (<>
                    {searchTerm===""?<p style={{ color: 'red' }}>Debe ingresar una coincidencia</p>:<p>Inicia tu Búsqueda</p>}
                    </>
                    
                ) : (
                    <>
                        {renderPagination()}
                        <Table striped bordered hover className="table">
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('artistName')}>
                                        Nombre de Artista {renderSortIcon('artistName')}
                                    </th>
                                    <th onClick={() => handleSort('releaseDate')}>
                                        Fecha de Lanzamiento {renderSortIcon('releaseDate')}
                                    </th>
                                    <th onClick={() => handleSort('kind')}>
                                        Media {renderSortIcon('kind')}
                                    </th>
                                    <th onClick={() => handleSort('trackName')}>
                                        Nombre {renderSortIcon('trackName')}
                                    </th>
                                    <th>Imagén</th>
                                    <th>Más Información</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((track) => (
                                    <tr key={track.trackId}>
                                        <td>{truncateText(track.artistName, 40)}</td>
                                        <td>{track.releaseDate.substring(0, 10)}</td>
                                        <td>{track.kind === "song" ? <FaMusic /> : track.wrapperType === "audiobook" ? <GiAudioCassette /> : <FaFilm />}</td>
                                        <td>{track.trackName ? truncateText(track.trackName, 50) : truncateText(track.collectionName, 50)}</td>
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
                <div><img src={"https://media.tenor.com/CoTlwd0htiEAAAAi/space-bob-loading.gif"} alt="Loading animation" /><br/>
                {searchTerm===""?<p style={{ color: 'red' }}>Debe ingresar una coincidencia</p>:<></>}</div>
            )}
        </div>
    );
}
