import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import React from 'react'
import Pagina from "../PaginaBuscador/Pagina-busca";
export const Routers = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pagina/>}/>


            </Routes>




        </Router>



    )


}
export default Routers;