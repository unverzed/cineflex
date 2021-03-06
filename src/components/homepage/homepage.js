import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./home.css";

export default function Home() {
    const [movie, setMovies] = useState([]);
    
    useEffect(() => {
    const requisition = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

    requisition.then(response => {
        setMovies(response.data);
        console.log(response)
    });
    }, []);

    return (
        <main>
            <div className="home">
             <h1 className="home-tittle">Selecione o filme</h1>
            </div>
             <div className="all-movies">
                {movie.map((movies) => (
                <Link to={`/sessoes/${movies.id}`} key={movies.id}>
                <img src={movies.posterURL} className="movie-poster"/>
                </Link>
                ))}
             </div>
        </main>
        
    )
}

