import {Link, useParams} from "react-router-dom"
import{useState, useEffect} from "react"
import {APIKey} from "../../config/key"
import {Container} from  "./style"

function Details(){

    var {id} = useParams()

    var [movie, setMovie] = useState({})
    var image_path ="https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`) //consumir a api. . . 
          .then(response=>response.json())
          .then(data=>{

              var movie={
                  id,
                  title: data.title,
                  sinopse: data.overview,
                  image: `${image_path}${data.poster_path}`,
                  releaseDate: data.release_date
              }
              setMovie(movie)
          })
      }, [id])

    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span className="sinopse">Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Release date: {movie.releaseDate}</span>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details