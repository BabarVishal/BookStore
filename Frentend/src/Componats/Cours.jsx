import React, { useEffect, useState } from 'react';
import Card from '../Componats/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cours() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/user/Book');
        console.log(res.data); // Log the fetched data
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-40">
        <div>
          <h1>
            "Immerse yourself in the captivating world of literature with our selection of the best books. From timeless classics to contemporary masterpieces, each page invites you on a journey of discovery and imagination.

            Explore the depths of human emotions through compelling narratives and vivid characters. Whether you seek thrilling adventures, thought-provoking insights, or heartwarming tales, our curated collection offers something for every reader.

            Dive into gripping mysteries that keep you on the edge of your seat, or lose yourself in enchanting stories that transport you to faraway lands. With each turn of the page, you'll find yourself engrossed in tales of love, courage, and resilience.

            Experience the power of words as they weave intricate tapestries of storytelling, leaving a lasting impression on your mind and soul. Discover new perspectives, broaden your horizons, and enrich your life through the magic of literature.

            Let the best books be your companions on a journey of discovery, enlightenment, and sheer enjoyment. Open a book today and embark on an adventure that will stay with you long after the final chapter."
          </h1>
        </div>
        <br />
        <br />
        <div className="flex justify-center items-center">
          <Link to="/">
            <button className="bg-black-500 hover:bg-grey-900 text-white font-bold py-2 px-5 rounded-full border border-white-500">
              back
            </button>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
          {
          book.map((item) => (
            <Card key={item._id} item={item} />
          ))
          }
        </div>
      </div>
    </>
  );
}

export default Cours;
