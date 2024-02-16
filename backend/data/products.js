// //----
// No IDs
const products = [
  {
    name: 'Björk – Debut',
    image: '/images/bjork.jpeg',
    description:
      'Debut is the international debut studio album by Icelandic recording artist Björk, released in July 1993 by One Little Indian and Elektra Entertainment.',
    brand: 'One Little Indian',
    category: 'Electronics',
    price: 104.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Radiohead – The Bends',
    image: '/images/radiohead.jpeg',
    description:
      'The Bends is the second studio album by the English rock band Radiohead, released on 13 March 1995 by Parlophone.',
    brand: 'XL Recordings',
    category: 'Alternative Rock',
    price: 59.99,
    countInStock: 7,
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: 'Madonna – Erotica',
    image: '/images/madonna.jpeg',
    description:
      'Erotica is the fifth studio album by American singer Madonna, released on October 20, 1992, by Maverick and Sire Records.',
    brand: 'Sire Records',
    category: 'Electronics',
    price: 92.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Massive Attack – Mezzanine',
    image: '/images/massive-attack.jpeg',
    description:
      'Mezzanine is the third studio album by English electronic music group Massive Attack, released on 20 April 1998 by Circa and Virgin Records.',
    brand: 'Virgin Records',
    category: 'Electronics',
    price: 39.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'The Prodigy – The Fat Of The Land',
    image: '/images/prodigy.jpeg',
    description:
      'The Fat of the Land is the third studio album by English electronic music group the Prodigy, released on 30 June 1997 through XL Recordings.',
    brand: 'XL Recordings',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Daft Punk – Homework',
    image: '/images/daft-punk.jpeg',
    description:
      'Homework is the debut studio album by the French electronic music duo Daft Punk, released on 20 January 1997 by Virgin Records and Soma Quality Recordings.',
    brand: 'Virgin Records',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Kraftwerk – Die Mensch·Maschine',
    image: '/images/kraftwerk.jpeg',
    description:
      'The Man-Machine is the seventh studio album by German electronic music band Kraftwerk. It was released on May 1978 by Kling Klang in Germany and by Capitol Records elsewhere.',
    brand: 'Kling Klang Records',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
// //----

// // No IDs
// const products = [
//   {
//     name: 'Airpods Wireless Bluetooth Headphones',
//     image: '/images/airpods.jpg',
//     description:
//       'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
//     brand: 'Apple',
//     category: 'Electronics',
//     price: 89.99,
//     countInStock: 10,
//     rating: 4.5,
//     numReviews: 12,
//   },
//   {
//     name: 'iPhone 11 Pro 256GB Memory',
//     image: '/images/phone.jpg',
//     description:
//       'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
//     brand: 'Apple',
//     category: 'Electronics',
//     price: 599.99,
//     countInStock: 7,
//     rating: 4.0,
//     numReviews: 8,
//   },
//   {
//     name: 'Cannon EOS 80D DSLR Camera',
//     image: '/images/camera.jpg',
//     description:
//       'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
//     brand: 'Cannon',
//     category: 'Electronics',
//     price: 929.99,
//     countInStock: 5,
//     rating: 3,
//     numReviews: 12,
//   },
//   {
//     name: 'Sony Playstation 4 Pro White Version',
//     image: '/images/playstation.jpg',
//     description:
//       'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
//     brand: 'Sony',
//     category: 'Electronics',
//     price: 399.99,
//     countInStock: 11,
//     rating: 5,
//     numReviews: 12,
//   },
//   {
//     name: 'Logitech G-Series Gaming Mouse',
//     image: '/images/mouse.jpg',
//     description:
//       'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
//     brand: 'Logitech',
//     category: 'Electronics',
//     price: 49.99,
//     countInStock: 7,
//     rating: 3.5,
//     numReviews: 10,
//   },
//   {
//     name: 'Amazon Echo Dot 3rd Generation',
//     image: '/images/alexa.jpg',
//     description:
//       'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
//     brand: 'Amazon',
//     category: 'Electronics',
//     price: 29.99,
//     countInStock: 0,
//     rating: 4,
//     numReviews: 12,
//   },
// ];

// export default products;

//---
// // with IDs

// const products = [
//   {
//     _id: '1',
//     name: 'Airpods Wireless Bluetooth Headphones',
//     image: '/images/airpods.jpg',
//     description:
//       'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
//     brand: 'Apple',
//     category: 'Electronics',
//     price: 89.99,
//     countInStock: 10,
//     rating: 4.5,
//     numReviews: 12,
//   },
//   {
//     _id: '2',
//     name: 'iPhone 11 Pro 256GB Memory',
//     image: '/images/phone.jpg',
//     description:
//       'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
//     brand: 'Apple',
//     category: 'Electronics',
//     price: 599.99,
//     countInStock: 7,
//     rating: 4.0,
//     numReviews: 8,
//   },
//   {
//     _id: '3',
//     name: 'Cannon EOS 80D DSLR Camera',
//     image: '/images/camera.jpg',
//     description:
//       'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
//     brand: 'Cannon',
//     category: 'Electronics',
//     price: 929.99,
//     countInStock: 5,
//     rating: 3,
//     numReviews: 12,
//   },
//   {
//     _id: '4',
//     name: 'Sony Playstation 4 Pro White Version',
//     image: '/images/playstation.jpg',
//     description:
//       'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
//     brand: 'Sony',
//     category: 'Electronics',
//     price: 399.99,
//     countInStock: 11,
//     rating: 5,
//     numReviews: 12,
//   },
//   {
//     _id: '5',
//     name: 'Logitech G-Series Gaming Mouse',
//     image: '/images/mouse.jpg',
//     description:
//       'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
//     brand: 'Logitech',
//     category: 'Electronics',
//     price: 49.99,
//     countInStock: 7,
//     rating: 3.5,
//     numReviews: 10,
//   },
//   {
//     _id: '6',
//     name: 'Amazon Echo Dot 3rd Generation',
//     image: '/images/alexa.jpg',
//     description:
//       'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
//     brand: 'Amazon',
//     category: 'Electronics',
//     price: 29.99,
//     countInStock: 0,
//     rating: 4,
//     numReviews: 12,
//   },
// ];

// // module.exports = products;
// export default products;
