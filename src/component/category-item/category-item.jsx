import { useState, useEffect } from "react";
import { movieService } from "../../service/movie-service";
import './category-item.scss'

export const CategoryItem = ({ name }) => {
    const [movies, setMovies] = useState([])

    const getMovies = (categoryName) => {
        movieService.getMovieByCategory(categoryName)
            .then(response => response.data)
            .then(data => {
                setMovies(data.movies)
            }
            ).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getMovies(name);
    }, []);

    return <div className="category-item">
        <div>{name}</div>
        {movies.map(item => (<h1>{item.name}</h1>))}
    </div>
}