import React from 'react'
import styled from 'styled-components'
import { sliderData } from '../utils/sliderData'
import Image from 'next/image'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//import { useSidebarContext } from '@/context/sidebar_context'

var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
ssr: false,
});

const Services = () => {

  // const { slide } = useSidebarContext()
  //  const slides = slide.find(item => item.id === parseInt(id));
  //const { products } = useSidebarContext()

  const options = {
margin: 0,
responsiveClass: true,
nav: true,
dots: true,
autoplay: false,
smartSpeed: 3000,
navClass: ["owl-prev", "owl-next"],
navText: [
'',
'',
],
responsive: {
0: {
items: 1,
},
400: {
items: 1,
},
600: {
items: 2,
},
700: {
items: 3,
},
// 1000: {
// items: 4,
// },
},
};
    return (
    <section className='slider-section'>
      <div className='slider-center'>
        <article className='header'>
          <h3>
            discover nakshi
          </h3>
          <p>
            our clothing photos
          </p>
        </article>
        <div className='services-center'>
          {/* <article className='service' key={id}>
                <Image className='icon' src={img} width={460} height={300}></Image>
                
                <h1>${price}</h1>
                <h4>{title}</h4>
                <p>{text}</p>
              </article> */}
            <OwlCarousel
              className="owl-theme"
              loop
              margin={4}
              nav={true}
              // navText={[
              //   '<img src="/images/Arrow_right.png" />',
              // '<img src="/images/Arrow_left.png" />',
              // ]}
              dots={false}
              animateIn={true}
              {...options}
              >
          {sliderData.map((service) => {
            const { id, img, price, title, text } = service
            return (
              <article className='service' key={id}>
                <Image alt='' className='icon' src={img} width={460} height={300}></Image>
                
                <h1>${price}</h1>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
          </OwlCarousel>
        </div>
      </div>
    </section>
  )
  
} 

// const Wrapper = styled.section`
// .slider-center {
//   width: 90vw;
//   margin: 0 auto;
//   max-width: 75rem;
// }
// .icon {
//     margin-top: 1.4rem;
// }
// h1{
//     margin-top: .6rem;
//     font-size: 2.5rem;
//     color: var(--mainWhite);
// }
//   h4 {
//     color: var(--mainWhite);
//     font-size: 1.2rem;
//     margin-top: .4rem;
//     text-transform: capitalize;
//   }
//   padding: 2rem 0;

//   background: var(--clr-grey-10);

//   .header {
//     text-align: center;
//     color: var(--mainBlack); 
//     /* max-width: 25rem; */
//   }
//     .header h3 {
 
//         text-transform: capitalize;
//     }
//     .header p {
//         font-size: 3rem;
//         color: var(--mainBlack); 
//     }
//   /* .header h3 {
//     margin-bottom: 2rem;
    
//   } */
//   p {
//     font-size: 1.1rem;
//     margin-bottom: 0;
//     line-height: 1.8;
//     letter-spacing: .8px;
//     color: var(--mainWhite);
//     text-transform: capitalize;
//   }
//   .services-center {
//     margin: 4rem .2rem 1.4rem .2rem;
//     display: flex;
//     /* gap: 2.5rem; */
    
//   }
//   .service {
//     background: var(--clr-primary-5);
//     text-align: center;
//     /* padding-bottom: 2rem; */
//     padding: 0.2rem 1.5rem 1.5rem 1.5rem;
//     /* border-radius: var(--radius); */
//     transition: .4s;
//     p {
//       color: var(--mainWhite);
//     }
//     &:hover {
//       background: var(--clr-grey-3);
//     }
//     animation: slide 16s infinite;
//     border: 1rem solid var(--clr-grey-10);
//   }
// @keyFrames slide {
//   0% {
//     transform: translateX(0);
//   }
//   25% {
//     transform: translateX(0);
//   }
//   30% {
//     transform: translateX(-100%);
//   }
//   50% {
//     transform: translateX(-100%);
//   }
//   55% {
//     transform: translateX(-200%);
//   }
//   70% {
//     transform: translateX(-200%);
//   }
//   80% {
//     transform: translateX(-300%);
//   }
//   100% {
//     transform: translateX(-300%);
//   }
// }

//   span {
//     width: 4rem;
//     height: 4rem;
//     display: grid;
//     margin: 0 auto;
//     place-items: center;
//     margin-bottom: 1rem;
//     border-radius: 50%;
//     background: var(--clr-primary-10);
//     color: var(--main-black);
//     svg {
//       font-size: 2rem;
//     }
//   }
  /* @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
  } */
//`
export default Services