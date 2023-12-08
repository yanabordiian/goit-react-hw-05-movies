import { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from 'components/Loader/Loader';
import HomePageLists from 'components/HomePageLists/HomePageLists';  

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWY0OTNiMDc2NzAyNDAyYmI0YmQwYzQwYjYzNzI3MiIsInN1YiI6IjY1NzMzNWIwOTQ1YzIwMDBlYTRmMzA1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zyY_TYg6LjGe4dC2xeUECK116MnCmKu6LICmBMoSyus'
    }
}

export default function HomePage() {
  const [dataHomePage, setDataHomePage] = useState(null);
  const [loader, setLoader] = useState(null);


    useEffect(() => {

        async function getDataAPI() {
            try {
                setLoader(true)
                const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
                setDataHomePage(data);
            }
            catch (error) {
                console.error(error);
            } finally { setLoader(null) }
        };
    
        getDataAPI()

    }, []);
    return(
  <div>
 

{loader && (<Loader/>)}
    {dataHomePage && (
        <HomePageLists dataList={dataHomePage.results}/>  
    )}
      
  
  
  </div>
  


)

}