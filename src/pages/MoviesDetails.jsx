import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

import Loader from "components/Loader/Loader";

import MovieDetailCard from '../components/MovieDetailCard/MovieDetailCard'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0OTNiMDc2NzAyNDAyYmI0YmQwYzQwYjYzNzI3MiIsInN1YiI6IjY1NzMzNWIwOTQ1YzIwMDBlYTRmMzA1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zyY_TYg6LjGe4dC2xeUECK116MnCmKu6LICmBMoSyus'
  }
};
export default function MovieDetails ()  {
const [dataDetailsCard,setDataHomePage] = useState();
const [loader, setLoader] = useState(null);
const {moviesId} = useParams();

useEffect(() => {
    
async function getMovieDetails(param){
    
try{ 
  setLoader(true) 
const {data} =await axios.get(`https://api.themoviedb.org/3/movie/${param}?language=en-US`, options)
setDataHomePage(data);
}
catch (error) {
  console.error(error);
}finally{setLoader(null)} };

getMovieDetails(moviesId)

    

},[moviesId])
return(
  <>
 {loader && (<Loader/>)}
 <MovieDetailCard cardDetails={dataDetailsCard} />
 </>
)

}