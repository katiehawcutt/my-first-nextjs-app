//this file displays an infinite number of cars that might be dynamically generated under the /cars url. This is called a dynamic route.
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head"; // allows you to add a title and metatags to improve search engine optimization

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1>Hello {id}</h1>
      <img src={car.image} width="300px" />
    </>
  );
}

//simulated fetching data from an external source (db or api) by adding json files to the public directory - cars.json returns an array of id's and then each car has an individual response which contains an image, color and the id.

//SERVER SIDE RENDERING

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();
  return {
    props: { car: data },
  };
}

//STATIC GENERATION

// //getStaticProps() tells Next.js to pre-render page. When you build the site, Next.js will automatically call the function and send the result as props to the component
// export async function getStaticProps({ params }) {
//   //we get the id of the car requested from the params argument of the function. Thn use fetch() to make a request to localhost to request the json file with that id.
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);

//   //convert the file to json
//   const data = await req.json();

//   // return an object which has a props property for each prop which can then be accessed by the component
//   return {
//     props: { car: data },
//   };
// }

// //because we're working with a dynamic route the below function tells Next which dynamic pages to render. In order to pre-render all the car/id's Next needs to know those id's in advance. The way we give it that information is by implementing the getStaticPaths() function. This function can also request data from an api or db and it's job is to return a paths object that contains an array with ever route for this dynamic url

// export async function getStaticPaths() {
//   const req = await fetch(`http://localhost:3000/cars.json`);
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
