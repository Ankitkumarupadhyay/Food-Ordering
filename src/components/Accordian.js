import React from 'react'
import AccordianContent from './AccordianContent'

const Accordian = ({ data , showItems ,setind}) => {
  
    
    // console.log(data);

    return <>
        <div className="accordian bg-slate-200 border rounded-2xl my-2">
            <div className="accHeader  shadow-lg  cursor-pointer flex justify-between font-semibold text-2xl px-10 py-5  " onClick={()=> setind()} >
                <p>{data.title} ({data.itemCards.length})</p>
                <p  >{showItems ? "⬆️" : "⬇️"} </p>
            </div>
            <div className="accContent">
            {showItems && <AccordianContent data={data?.itemCards} /> }
            </div>

        </div>
    </>
}

export default Accordian
