// import { Fragment, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import useSWR from 'swr';

// import { getFilteredEvents } from '../../helpers/api-util';
// import EventList from '../../components/events/event-list';
// import ResultsTitle from '../../components/events/results-title';
// import Button from '../../pages/ui/button';
// import ErrorAlert from '../../pages/ui/error-alert';
// import Head from 'next/head';
// import ProductList from '@/components/Products/product-list';

// function FilteredEventsPage(props) {
//   const [loadedEvents, setLoadedEvents] = useState();
//   const router = useRouter();

//   const filterData = router.query.slug;

//   const { data, error } = useSWR(
//     'https://redux-b78d9-default-rtdb.firebaseio.com/events.json',
//     (url) => fetch(url).then(res => res.json())
//   );

//   useEffect(() => {
//     if (data) {
//       const events = [];

//       for (const key in data) {
//         events.push({
//           id: key,
//           ...data[key],
//         });
//       }

//       setLoadedEvents(events);
//     }
//   }, [data]);
//   const pageHeadData = (
//     <Head>
//         <title>Filtered Events</title>
//     </Head>
//   )

//   if (!loadedEvents) {
//     return <Fragment>
//       {pageHeadData}
//       <p className='center'>Loading...</p>
//       </Fragment>;
//   }

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

  

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12 ||
//     error
//   ) {
//     return (
//       <Fragment>
//         {pageHeadData}
//         <ErrorAlert>
//           <p>Invalid filter. Please adjust your values!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <button link='/products'>Show All Events</button>
//         </div>
//       </Fragment>
//     );
//   }

//   const filteredEvents = loadedEvents.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === numYear &&
//       eventDate.getMonth() === numMonth - 1
//     );
//   });

//   if (!filteredEvents || filteredEvents.length === 0) {
//     return (
//       <Fragment>
//         {pageHeadData}
//         <ErrorAlert>
//           <p>No events found for the chosen filter!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <button link='/events'>Show All Events</button>
//         </div>
//       </Fragment>
//     );
//   }

//   const date = new Date(numYear, numMonth - 1);

//   return (
//     <Fragment>
//       {pageHeadData}
//       {/* <ResultsTitle date={date} /> */}
//       <ProductList items={filteredEvents} />
//     </Fragment>
//   );
// }


// export default FilteredEventsPage;