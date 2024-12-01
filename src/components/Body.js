import React from 'react'
import useBodyData from '../utils/useBodyData';
import Shimmer from '../utils/Shimmer';
import DataCards from './DataCards';
import Header from './Header';


const Body = () => {
  
  const apiData = useBodyData();
   
  return (
    (apiData == null) ? <Shimmer/> :
    <div>
      <div className="border border-black">
        <Header/>
        {
          apiData.map((objData)=>(
           <DataCards key={objData?.data?.title} resData={objData?.data} />
          ))
        }
      </div>
    </div>
  )
}

export default Body