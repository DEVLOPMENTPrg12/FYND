import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import'./Reseidience.css';
import data from '../../utils/accordion';

import 'bootstrap/dist/css/bootstrap.css';
import sliderSettings from '../../utils/common';


export default function Residencies(){
    return(
        <section className="r-wrapper">
            <div className="r-container">
                <div className="r-head ">
                    <span className="orange">Best Choices</span>
                    <span className="primary">Popular Residencies</span>
                </div>
                
                <Swiper {...sliderSettings}>
                    
                <div className='row row-cols-md-4'>
                {data.map((card,i)=>(   
                                    <div className='col mb-3 r-card '>
                                <img src={card.image} alt='home' className='card-header'/>
                                <span className='r-price card-body' >
                                    <span style={{color:'orange'}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primary card-title'>{card.name}</span>
                                <span className='secondary card-text'>{card.detail}</span>
                            </div>

                      ))}
                </div>
                     

                </Swiper>

            </div>
        </section>
    )
};
const SliderButtons =()=>{
    const swiper=useSwiper();
    return(
        <div  className='r-button'>
            <button onClick={()=>swiper.slidePrev()} >&lt;</button>
            <button onClick={()=>swiper.slideNext()} >&gt;</button>



        </div>
    )
}