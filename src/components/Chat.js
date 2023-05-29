
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import {input} from 'reactstrap';

export const Chat = (props) => {
  const server = 'http://localhost:6006/assets/images/';

  return (
  <>
      <div className='p-5 position-relative' style={{backgroundColor: "#4643D3" ,borderRadius: "24px 24px 0px 0px"}}>

        <div className='position-absolute top-0 end-0 pt-4 pe-5  ' >
          <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
        </div>
        <div className="row">
          <div className='col-md-2; '>
            <img src={server + props.src} />
          </div>
          <div className='col-10 text-white '>
            <h3 >
              {props.name}
            </h3>
            <h5 className='opacity-50 '>
              {props.prof}
            </h5>
          </div>
        </div>
        <div className='position pt-4 pe-4'>
        <h3 className='text-white'>
          { props.text }
        </h3>
        </div>
        </div>
          
          
        <div className=' px-5 position-relative' style={{backgroundColor: "#ffffff", height: "100px" ,borderRadius: "0px 0px 24px 24px" }}>
          <input className='h-100 w-75 border-0' placeholder="Type your message..." type="text"  />
          <button className='btn w-25 position  pt-1 pe-0' type="submit" style={{fontSize: "25px",color: "#5856D7" }}  >send</button>
        </div>
     
    
      
  </>
  );
};
