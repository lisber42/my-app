import React from 'react';
import Movie from './Movie';

const ListFilmes = (props) => {
    return(
        <div clasName="container">
        <div className="row">
            <div className="col s12">
                {
                    props.movies.map((movie, i) => {
                        return(
                            <Movie key={i}  image={movie.poster_path} title={movie.title}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )    
}

export default ListFilmes;