import React from 'react'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartStore'

const AccordianContent = ({ data }) => {
    const dispatch = useDispatch()

    const handleCartItem=(i)=>{
        dispatch(addItems(i))
    }
    

    return <>
        {
            data.map((i) => (
                <div key={i?.card?.info?.id} className='rounded-xl flex  min-h-44 justify-between px-5 py-2 border-b border-solid border-black'>
                    <div className="info w-9/12 px-5 py-2 gap-1">
                        <p className='font-semibold text-lg'>{i?.card?.info?.name}</p>
                        <p className='font-normal'>₹{i?.card?.info?.price / 100}</p>
                        <p className='text-green-600 font-medium'>⭐{i?.card?.info?.ratings?.aggregatedRating?.rating}({i?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
                        <p>{i?.card?.info?.description}</p>
                    </div>
                    <div className="img w-40  h-24 relative   ">
                        <img className=' object-cover h-36  w-40 cursor-pointer rounded-xl  ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + i?.card?.info?.imageId} alt="" />
                        <button className='bg-white absolute top-28 left-11  w-20 border-2 border-solid border-green-500 py-1 font-bold text-green-500 rounded-2xl active:scale-90' onClick={()=> handleCartItem(i)} >Add+</button>
                    </div >
                </div>
            ))
        }
    </>
}

export default AccordianContent
// {/* <li key={i?.card?.info?.id}> {i?.card?.info?.id}-- {i?.card?.info?.name} --  Rs.{i?.card?.info?.price / 100} </li> */ }