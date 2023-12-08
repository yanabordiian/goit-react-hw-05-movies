import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom";  //? робота з рядком
import axios from "axios";

import Loader from "components/Loader/Loader";

import HomePageLists from '../components/HomePageLists/HomePageLists'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0OTNiMDc2NzAyNDAyYmI0YmQwYzQwYjYzNzI3MiIsInN1YiI6IjY1NzMzNWIwOTQ1YzIwMDBlYTRmMzA1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zyY_TYg6LjGe4dC2xeUECK116MnCmKu6LICmBMoSyus'
  }
};
export default function Movies ()  {
 
 const form = useRef();
 const [searchParamsURL, setSearchParamsURL] = useSearchParams();
 const [dataSearchPar, setDataSearchPar] = useState(null);
 const [loader, setLoader] = useState(null);
 const query = searchParamsURL.get("query");



    
 useEffect(()=>{
     if (!query) {return};
     async function getFilmData(){
    try {
  setLoader(true)      
  const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,options)
  setDataSearchPar(data.results);
    }
    catch (error) {
        console.log(error)
    }finally{ setLoader(null); }};

getFilmData()
     
 },[query])
const handleClick = (e) => {
    e.preventDefault();
    
    const forma = form.current;
    const value = forma.elements.query.value.trim().toLowerCase();
    if (value){setSearchParamsURL({query:value});}
    forma.reset();
};
    return (
    
    <div>
    
        <form
          onSubmit={handleClick}
          ref={form}
          action=""
          style={{
          margin: '30px',
  }}>
        <label style={{ marginBottom: '10px' }}>
            <input required name="query" type="text"
              style={{
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #FF4500',
      }}/>
        </label>
       
          <button type="submit"
            style={{
      margin: '10px',
      padding: '10px',
      fontSize: '18px',
      backgroundColor: '#FF4500',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}>Search</button>
    </form>
    
    <div>
    {loader && (<Loader/>)}   
    {dataSearchPar && dataSearchPar.length > 1 && query && (<div>
        
           <HomePageLists dataList={dataSearchPar} />         

    </div>)}

    </div>

    </div>

)

}