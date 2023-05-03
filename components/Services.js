import React from 'react'
import styled from './services.module.css'
import { services } from '../utils/navbarData'

const Services = () => {
  return (
    <section className={styled.serviceSection}>
      <div className={styled.sectionCenter}>
        <div className={styled.servicesCenter}>
          {services.map((service) => {
            const { id, icon, title, text, texts } = service
            return (
              <article className={styled.service} key={id}>
                <span className={styled.icon}>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
                <p>{texts}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   h3,
//   h4 {
//     color: var(--clr-primary-1);
//     text-transform: capitalize;
//     margin-bottom: 1.3rem;
//   }
//   padding: 2rem 0;
//   background: var(--clr-primary-10);
//   .header h3 {
//     margin-bottom: 1rem;
//   }
//   p {
//     margin-bottom: 0;
//     line-height: 1.8;
//   }
//   .services-center {
//     /* margin-top: .5rem; */
//     display: grid;
//     gap: .2rem;
//     margin: .4rem 0;
//   }
//   .service {
//     text-align: center;
//     padding: 1.5rem 2rem;
//     border-radius: var(--radius);
//     font-weight: 900;
//     p {
//       color: var(--mainBlack);
//     }
//   }
//   span {
//     width: 4rem;
//     height: 3rem;
//     display: grid;
//     margin: 0 auto;
//     place-items: center;
//     margin-bottom: 1rem;
//     border-radius: 50%;
//     background: var(--clr-primary-10);
//     color: var(--clr-primary-1);
//     svg {
//       font-size: 2rem;
//     }
//   }
//   @media (min-width: 992px) {
   
//   }
//   @media (min-width: 576px) {
//     .services-center {
//       grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//     }
//   }
//   @media (min-width: 1280px) {
//     padding-bottom: 1rem;
//     /* .section-center {
//       transform: translateY(5rem);
//     } */
//   }
// `
export default Services