# My First Next.js App

##### February 2021

_I followed a short Next.js tutorial ([Fireship - Next.js Beginners Tutorial](https://www.youtube.com/watch?v=Sklc_fQBmcs)) and created a very basic app. I learnt a lot about Static Site Generation (SSG) v Server Side Rendering (SSR)._

## Main Learning Points:

- With client-side rendering, the browser is sent a HTML file with no rendered content. From there, the browser fetches the images, CSS files and finally JavaScript files. It then renders this content to the page to make it interactive. This rendering time can be slow and means that it takes much longer to reach the first page of content when the user first lands on the webpage. The content is also not reliably indexed by all search engines or read by social media link bots.

- Static Site Generation (sometimes known as pre-rendering) renders all the pages at build time. It's suited to sites where data doesn't change often and with a relatively small number of pages. Drawbacks are that data can become stale and it's harder to scale.

- Server-side rendering generates each page at request time. The HTML page is built each time it is requested by the user. It's good for apps where the data is changing a lot as it will always fetch the latest data on the server.

- Incremental Static Generation is somewhere in between! It regenerates singles pages in the background whenever a new request comes in within a certain time interval.

- Server-side data fetching is the most valuable feature in Next. It allows us to fetch data and render HTML on the server. The benefits are that the end user gets rendered content quicker and the content can be reliably crawled by bots.

- The `api` directory in Next.js is a special part of Next used for setting up routs that will only apply to the server. It's a useful feature when you have work that needs to be done on the backend or if you want to expose an API for your end user.

## Built with:

- HTML
- CSS
- JavaScript
- React
- Next.js
