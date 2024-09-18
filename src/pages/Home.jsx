import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"


export default function Home(){
    console.log(movies)
    return(
        <>
            <CardContainer>
                {movies.map( movie => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </CardContainer>
        </>
    )
}