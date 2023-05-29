
import React from 'react';

export const BestsellersItem = (props) => {

  return (
    <>
        <div className='rounded-5 m-3 p-3' style={{ backgroundColor: (props.first)?"#FEF2EE":""}}>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <img className="w-50" src={props.src} />
                </div>
                <div className='col-md-8'>
                    <div className="py-3" style={{color: "#FE805C"}}>
                        {props.name}
                    </div>
                    <div className="py-3" style={{color: "#AFAFBD"}}>
                        {props.type}
                    </div>
                    <div className="py-3">
                        <b>
                            {props.price}
                        </b>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
  
