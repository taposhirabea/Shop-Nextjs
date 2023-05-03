import { Fragment } from 'react';
import Head from 'next/head';

import { getEventById, getFeaturedEvents } from '../../utils/api-util';
import Image from 'next/image';

import AddToCart from '@/components/AddToCart';
import { useRouter } from 'next/router';
import { useCartContext } from '@/context/cartContext';
import ProductContent from '@/components/Products/product-content';

function EventDetailPage(props) {
  const product = props.selectedEvent;
  const router = useRouter()
  const { addToCart} = useCartContext()

  if (!product) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        {/* <title>All Events</title> */}
        <title>{product.name}</title>
      </Head>
      {/* <EventSummary name={product.name} />
      
      <EventLogistics
        date={product.date}
        address={product.location}
        image={product.image}
        imageAlt={product.name}
      />
      <EventContent>
        <p>{product.description}</p>
      </EventContent> */}

      <div className='section section-center page'>
        {/* <Link to='/products' className='btn'>
          back to products
        </Link> */}
        <div className='product-center'>
          {/* <ProductImages images={product.image} /> */}
          <Image src={product.image} alt={product.image}  width={500} height={400}/>
          <section className='content'>
            <h2 className=''>{product.name}</h2>
            <h5 className='price'>${product.price}</h5>
             <ProductContent>
              <span className='desc'>{product.description}</span>
            </ProductContent>
            <hr/>
            <button type='button' className='btn' onClick={() => {
          addToCart(product);
          //console.log(id,product, amount)
          // router.push("/cartPage");
        }}
        >
          Add To Cart</button>
            {/* <AddToCart className='btn'/> */}
            {/* <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p> */}
            <hr />
            {/* {stock > 0 && <AddToCart product={product} />} */}
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const product = await getEventById(productId);

  return {
    props: {
      selectedEvent: product
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const products = await getFeaturedEvents();

  const paths = products.map(product => ({ params: { productId: product.id } }));

  return {
    paths: paths,
    fallback: 'blocking'
  };
}

export default EventDetailPage;