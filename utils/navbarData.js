
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'our address',
    text:
      'Lefreak Building, 2 AlBahr St, Down Santa Monica, Los Angeles',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'opening hours',
    text:
      'Mon - Fri: 10 AM - 11 PM',
    texts: 
      'Sat - Sun: 9 AM - 1 PM',
  },
    
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'private dinning',
    text:
      'Email: info@baume.com',
    texts:
      'Phone: 02 015680721',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`