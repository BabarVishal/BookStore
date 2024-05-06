import React from 'react'
import './Freebook.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Card from './Card'

function Freebook() {

    const filterData = list.filter((data) => data.category === "Free")
    console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
   <>
   <div className='freebook '>
    <h1>Free offered Courses</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae. Dolorem odio atque vitae?</h2>
   </div>
   <br />
   <br />
   <div className='Freebook'>
   <Slider {...settings}>
        {filterData.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </Slider>
   </div>
   </>
  )
}

export default Freebook
