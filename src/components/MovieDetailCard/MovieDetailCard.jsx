import { Route, Link ,Routes,useLocation } from "react-router-dom";

import { useRef } from "react";

import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

import css from './MovieDetailCard.module.css'

export default function MovieDetailCard ({cardDetails})  {
const location = useLocation();
const backLink = useRef(location.state?.from ?? "/")
 return(
    

    <>
    {cardDetails && (
    
   <>
    <Link className={css.btn} to={backLink.current} >Back</Link>
    <div className={css.wrapperPage}>
      <div className={css.wrapperImg}>
      <img className={css.img} src={`https://image.tmdb.org/t/p/w500${cardDetails.poster_path}`} 
      alt="" />
     </div>
    <div className={css.wrapperInfo}>   
    <h1> {cardDetails.original_title}</h1>
    <p>User score : {cardDetails.vote_average} %</p>
    <h2>Overview</h2>
    <p className={css.textOverview}>{cardDetails.overview}</p>
    <h2>Genres</h2>
    <p>{cardDetails.genres.map(({name})=> `${name} `)}</p>
    </div> 
    </div>
        <div className="">
    <p className={css.additional}>Additional information</p>
    <ul>
        <li className={css.cast}> <Link to='cast' > Cast   </Link>  </li>
        <li className=""> <Link to='reviews'> Reviews  </Link>   </li>
    </ul>  
    
    <Routes>
      <Route  path="cast" element={ <Cast/>} />
      <Route path="reviews" element={ <Reviews/>} />   
    </Routes>

    </div>
    
     
   </>
            
    )}
    
    </>

)

}