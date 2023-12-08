import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import css from './Cast.module.css'


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0OTNiMDc2NzAyNDAyYmI0YmQwYzQwYjYzNzI3MiIsInN1YiI6IjY1NzMzNWIwOTQ1YzIwMDBlYTRmMzA1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zyY_TYg6LjGe4dC2xeUECK116MnCmKu6LICmBMoSyus'
  }
};

export default function Cast () {
const { moviesId } = useParams();
    const [dataCast, setDataCast] = useState();
useEffect(()=>{
    
async function getDataCast (){
    
if(!moviesId){return}

try{
    
const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/credits?language=en-US`,options)
setDataCast(data.cast)
}
catch (error) {
    console.error(error)
}};

getDataCast ()
    
},[moviesId])

    
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
return(
    <div>
    {dataCast && (
         <ul className={css.list}>
    {dataCast.map(({character,profile_path,name}) => (
        <li key={`${character} ${name}`} className={css.item}>
            <div className={css.wrapper}>
            <div className={css.photoCard}>
            <img className={css.img}  src={profile_path ? [`https://image.tmdb.org/t/p/w500/${profile_path} `] : defaultImg} width="190" height="230" alt="" />
            </div>
            <p className={css.text}>{name}</p>
            <p className={css.text}>Character : {character}</p>
            </div>
        </li>
    ))}
    </ul>
    )}
   
    
    </div>
)

}