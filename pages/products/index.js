import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../utils/api-util';
import ProductList from '@/components/Products/product-list';
import Filters from '@/components/Filters';
import { useProductsContext } from '@/context/products_context';


function AllEventsPage(props) {
 const { events } = props;
 //const {events} = useProductsContext()
 const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <Fragment>
      
      <Head>
        <title>Next Js</title>
      </Head>
      {/* <ProductList items={events} /> */}
      <section className='page'>

      <div className='products-center products'>
          <Filters items={events} selectedGenre={selectedGenre}
            onSelect={setSelectedGenre}/>
          <div>
          <ProductList items={events} selectedGenre={selectedGenre}/>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default AllEventsPage;