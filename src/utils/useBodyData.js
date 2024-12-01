import {useState,useEffect} from 'react'

const useBodyData = () => {
  const[apiData, setApiData] = useState(null);
   
     useEffect(()=>{
      fetchApiData();
     },[]);

    const fetchApiData  = async ()=>{
     const data = await fetch("https://www.reddit.com/r/reactjs.json");
     const jsonData = await data.json();
      setApiData(jsonData?.data?.children);
    }
    return apiData; 
}

export default useBodyData