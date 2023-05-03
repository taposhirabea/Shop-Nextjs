import styles from './cartItem.module.css'
//import AmountButtons from '../AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../context/cartContext'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Image from 'next/image'

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount, increaseAmount, decreaseAmount } = useCartContext()
  // const increase = () => {
  //   toggleAmount(id, 'inc')
  // }
  // const decrease = () => {
  //   toggleAmount(id, 'dec')
  // }

  return (
    <article className={styles.cartItemSection}>
      <div className={styles.title}>
        <Image src={image} alt={name} className={styles.img} width={100} height={150}/>
        <div>
          <h5 className={styles.name}>{name}</h5>
        
          <h5 className={styles.priceSmall}>{(price)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{(price)}</h5>
     

      <div className={styles.amountBtns}>
        <button type='button' className={styles.amountBtn} onClick={() => {decreaseAmount(id, amount)}}>
        <FaMinus />
      </button>
      <h2 className={styles.amount}>{amount}</h2>
      <button type='button' className={styles.amountBtn} onClick={() => {increaseAmount(id)}}>
        <FaPlus />
      </button>

      </div>
      <h5 className={styles.subtotal}>{(price * amount)}</h5>
      <button className={styles.removeBtn} onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </article>
    
  )
}

// const Wrapper = styled.article`
// .amount-btns{
//   display: grid;
//   width: 140px;
//    justify-items: center;
//    grid-template-columns: repeat(3, 1fr);
//   align-items: center;
// }
// button {
//     background: transparent;
//     border-color: transparent;
//     cursor: pointer;
//     padding: 1rem 0;
//     width: 2rem;
//     height: 1rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .subtotal {
//     display: none;
//   }
//   .price {
//     display: none;
//   }
//   display: grid;
//   grid-template-columns: 200px auto auto;
//   grid-template-rows: 75px;
//   gap: 3rem 1rem;
//   justify-items: center;
//   margin-bottom: 3rem;
//   align-items: center;
//   .title {
//     grid-template-rows: 75px;
//     display: grid;
//     grid-template-columns: 75px 125px;
//     align-items: center;
//     text-align: left;
//     gap: 1rem;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: cover;
//   }
//   h5 {
//     font-size: 0.75rem;
//     margin-bottom: 0;
//   }

//   .color {
//     color: var(--clr-grey-5);
//     font-size: 0.75rem;
//     letter-spacing: var(--spacing);
//     text-transform: capitalize;
//     margin-bottom: 0;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     span {
//       display: inline-block;
//       width: 0.5rem;
//       height: 0.5rem;
//       background: red;
//       margin-left: 0.5rem;
//       border-radius: var(--radius);
//     }
//   }
//   .price-small {
//     color: var(--clr-primary-5);
//   }
//   .amount-btns {
//     width: 75px;
//     button {
//       width: 1rem;
//       height: 0.5rem;
//       font-size: 0.75rem;
//     }
//     h2 {
//       font-size: 1rem;
//     }
//   }
//   .remove-btn {
//     color: var(--clr-white);
//     background: transparent;
//     border: transparent;
//     letter-spacing: var(--spacing);
//     background: var(--clr-red-dark);
//     width: 1.5rem;
//     height: 1.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: var(--radius);
//     font-size: 0.75rem;
//     cursor: pointer;
//   }
//   @media (min-width: 776px) {
//     .subtotal {
//       display: block;
//       margin-bottom: 0;
//       color: var(--clr-grey-5);
//       font-weight: 400;
//       font-size: 1rem;
//     }
//     .price-small {
//       display: none;
//     }
//     .price {
//       display: block;
//       font-size: 1rem;
//       color: var(--clr-primary-5);
//       font-weight: 400;
//     }
//     .name {
//       font-size: 0.85rem;
//     }
//     .color {
//       font-size: 0.85rem;
//       span {
//         width: 0.75rem;
//         height: 0.75rem;
//       }
//     }
//     grid-template-columns: 1fr 1fr 1fr 1fr auto;
//     align-items: center;
//     grid-template-rows: 75px;
//     img {
//       height: 100%;
//     }
//     .title {
//       height: 100%;
//       display: grid;
//       grid-template-columns: 100px 200px;
//       align-items: center;
//       gap: 1rem;
//       text-align: left;
//     }
//     .amount-btns {
//       width: 100px;
//       button {
//         width: 1.5rem;
//         height: 1rem;
//         font-size: 1rem;
//       }
//       h2 {
//         font-size: 1.5rem;
//       }
//     }
//   }
// `

export default CartItem