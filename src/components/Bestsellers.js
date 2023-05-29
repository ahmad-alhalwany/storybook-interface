
import React from 'react';
import { BestsellersItem } from './BestsellersItem';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Bestsellers = (props) => {
  const server = 'http://localhost:6006/assets/images/';
  
  return (
    <>
      <div className='border rounded-5' style={{backgroundColor: "#ffffff"}}>
        <h1 className='ps-4 pt-4 pb-3' >
          Bestsellers
        </h1>
        <BestsellersItem name="Nike Air Max 270" type="Nike" price="$195.80" src={server + "NikeAirMax270.png"} first="true" />
        <BestsellersItem name="Nike Air Max 90" type="Nike" price="$195.80" src={server + "NikeAirMax90.png"} />
        <BestsellersItem name="Nike Air Max Plus" type="Nike" price="$195.80" src={server + "NikeAirMaxPlus.png"} />

      </div>
    </>
  );
};
  
