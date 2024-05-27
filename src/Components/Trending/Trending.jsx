import React from 'react'
import Linen from "../../images/LinenShirt.jpg"
import Polo from "../../images/PoloTshirt.jpg"
import SShirt from "../../images/SummerShirt.jpg"
import PWear from "../../images/PartyWearShirt.jpg"
import { Link } from 'react-router-dom'
import './Trending.css'
const Trending = () => {
    const datas =[
        {
            id:1,
            image:Linen,
            title:'BREZZY LINEN',
            link:'/linen',
            name:"linen"
        },
        {
            id:2,
            image:Polo,
            title:'POLOS',
            link:'/linen',
            name:"polo"
        },{
            id:3,
            image:SShirt,
            title:'SUMMER LOVE',
            link:'/linen',
            name:"summer"
        },
        {
            id:4,
            image:PWear,
            title:'PARTY HARD',
            link:'/linen',
            name:'party'
        },
    ]
  return (
    <section className='trending mt-12 flex flex-col items-center'>
        <div>
           <h1 className='font-b'>TRENDING NOW</h1> 
        </div>
   <div className="grid md:grid-cols-4 xsm:grid-cols-2 mt-6">
    {
        datas.map((data) => (
            <Link to={data.link} key={data.id} className='md:p-2 xsm:p-[6px] relative parent '>
                <img src={data.image} className='svg-ds-2'></img>
                <h2 className='absolute md:text-[32px] xsm:text-[24px] font-sb'>{data.title}</h2>
            </Link>
            
        ))
    }
    </div>  
      </section>
  )
}

export default Trending