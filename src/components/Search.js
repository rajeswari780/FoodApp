import { useEffect, useState } from "react"
import styles from './css/Search.module.css'
const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '4927ba7cff454c339da21654d93be3f8';
// 8680924345raji@gmail.com - 'f5cf07a69a044fbe917b0939cfd20bbb';
//rajimurugan1002@gmail.com - '98a2034d24f44985889677fd07f9ea82';

//useEffact - hook that lets your component to sink with external api
    //syntax useEffect(()=>{},[]); 
    //1st param - callback function
    //2nd param - dependency list (array)
    //2nd param consist of state variable for which our callback function should react to
    //fetch api will fetch data from external api
    //the await will wait till it receives the response
    //function should be declared async when await is used
    
export default function Search({setFoods}){
    const [query,setQuery] = useState("pizza");
    
    useEffect(()=>{
        async function Search(){
            let response = await fetch(URL+'?query='+query+'&apiKey='+API_KEY);
            let data = await response.json();
            setFoods(data.results);
        }
        Search();
    },[query]);
    return <div>
        <div className={styles.input_search}>
            <input
                onChange={function(e){return setQuery(e.target.value)}}
                type="text"
                value={query}
                className={styles.search}
            />
        </div>
    </div>
}