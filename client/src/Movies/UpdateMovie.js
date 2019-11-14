import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ETIME } from 'constants';

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: ["", "", ""],
};

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "metascore") {
            value = parseInt(value, 10);
        }
        setMovie({ ...movie, [e.target.name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // maybe an if statement for loading here? 
    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                onChange={changeHandler}
                placeholder="Title"
                value={movie.title}
                />
                <input
                type="text"
                name="director"
                onChange={changeHandler}
                placeholder="Director"
                value={movie.director}
                />
                <input 
                type="text"
                name="metascore"
                onChange={changeHandler}
                placeholder="Metascore"
                value={movie.metascore}
                />
                <input 
                type="text"
                name="stars"
                onChange={changeHandler}
                placeholder="Stars"
                value={movie.stars}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateMovie;