import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import React from 'react'
import Pagina from "../PaginaBuscador/Pagina-busca";
import RepAud from "../reproductor/ReproductorAudio";
import VideoPlayer from "../reproductor/ReproductorVideo";
export const Routers = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pagina/>}/>
                <Route path="/repAudio" element={ <RepAud/>}/>
                <Route path="/repVideo" element={<VideoPlayer/>}/>
            </Routes>




        </Router>



    )


}
export default Routers;