import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
    const handleLinkClick = () => {
      setShowMenu(false);
    };
  
    return (
      <div className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between gap-4 items-center">
          <button
            className="block md:hidden ml-4"
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </button>
          <nav className={`fixed inset-0 bg-white z-10 transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center space-y-6 p-6`}>
            <button
              className="self-end mr-4 mt-4"
              aria-label="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose className="text-2xl" />
            </button>
            <a
              href="#"
              className="hover:text-gray-600 text-xl"
              onClick={handleLinkClick}
            >
              StoryBooks
            </a>
            <a
              href="#"
              className="hover:text-gray-600 text-xl"
              onClick={handleLinkClick}
            >
              Novels
            </a>
            <a
              href="#"
              className="hover:text-gray-600 text-xl"
              onClick={handleLinkClick}
            >
              Educational books
            </a>
          </nav>
          <nav className="hidden md:flex gap-4 items-center">
            <h3>StoryBooks</h3>
            <h3 className="border rounded p-2">Novels</h3>
            <h3>Educational books</h3>
          </nav>
          <img src="../public/Books Logo.png" alt="" />
          <div className="flex items-center gap-4">
            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                  placeholder="Search title, authors..."
                  required
                />
              </div>
            </form>
            <button onClick={() => handleNavigate("/cart")}>
              <IoCartOutline className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  

interface BookCardProps {
  title: string;
  genre: string;
  price: string;
  imageUrl: string;
}

const BookCards: React.FC<BookCardProps> = ({ title, genre, price, imageUrl }) => {
  return (
    <div>
    <div className=' hidden p-4 md:flex flex-col items-center'>
      <div className="border rounded p-4 flex flex-col items-center">
        <img src={imageUrl} alt={title} className="w-32 h-48 object-cover mb-4" />
      </div>
      <div className="text-left mt-4">
        <h3 className="text-md font-semi-bold">{title}</h3>
        <p className="text-gray-600">{genre}</p>
      </div>
      <div className='flex items-center mt-2'>
        <p className="text-gray-800 font-medium">{price}</p>
        <button className="ml-2 px-2 py-1 bg-primary text-white rounded">Add to Cart</button>
      </div>
    </div>
    <div className='md:hidden p-4 sm:flex flex-row items-center gap-4'>
      <div className="border rounded p-4 flex  items-center">
        <img src={imageUrl} alt={title} className="w-36 h-48 object-cover mb-4" />
        <div className='flex flex-col text-left justify-center items-center'>
        <h3 className="text-md font-semi-bold">{title}</h3>
        <p className="text-gray-600">{genre}</p>
        <p className="text-gray-800 font-medium">{price}</p>
        <button className="ml-2 px-2 py-1 bg-primary md:bg-primary text-white rounded">Add to Cart</button>
    </div>
    </div>
      </div>
    </div>
  );
}

const books = [
  {
    title: 'Wilde in Love',
    genre: 'Romance',
    price: '₦15,000',
    imageUrl: '../public/img 3.jpeg',
  },
  {
    title: 'Solar Bones',
    genre: 'Horror',
    price: '₦15,000',
    imageUrl: '../public/img1.jpeg',
  },
  {
    title: 'Jaws',
    genre: 'Thriller',
    price: '₦15,000',
    imageUrl: '../public/img 2.jpeg',
  },
  {
    title: 'The Last Watch',
    genre: 'Adventure',
    price: '₦15,000',
    imageUrl: '../public/img4.jpeg',
  },
  {
    title: 'Enchanting Dragon Lord',
    genre: 'Fantasy',
    price: '₦15,000',
    imageUrl: '../public/img 5.jpeg',
  },
    {
        title: 'Spirit demon',
        genre: 'Fantasy',
        price: '₦15,000',
        imageUrl: '../public/hng image 1.jpg',
      },
      {
        title: 'Memory',
        genre: 'Romance',
        price: '₦15,000',
        imageUrl: '../public/hng image2.jpg',
      },
      {
        title: 'Harry potter',
        genre: 'Adventure',
        price: '₦15,000',
        imageUrl: '../public/hng image3.jpg',
      },
      {
        title: 'Thread',
        genre: 'Horror',
        price: '₦15,000',
        imageUrl: '../public/hng image4.jpg',
      },
      {
        title: 'Unseelie',
        genre: 'Thriller',
        price: '₦15,000',
        imageUrl: '../public/hng image 5.jpg',
      },
];

const BookList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
      {books.map((book, index) => (
        <BookCards key={index} {...book} />
      ))}
    </div>
  );
}

const Filter: React.FC = () => {
  return (
    <div className="mb-4 flex justify-between items-center text-center flex-wrap">
      
      <div className='mx-auto border rounded px-2 py-1 bg-white flex items-center gap-4'>
        <select className=" px-2 py-1">
          <option>All Genres</option>
          <option>Romance</option>
          <option>Horror</option>
          <option>Thriller</option>
          <option>Adventure</option>
          <option>Fantasy</option>
        </select>
        <p>|</p>
        <select className="px-2 py-1">
          <option>Latest Stock</option>
          <option>Oldest Stock</option>
        </select>
      </div>
    </div>
  );
}

const Pagination: React.FC = () => {
  return (
    <div className="mt-4 flex justify-center items-center">
      <button className="px-3 py-1 border rounded bg-secondary">1</button>
      <button className="ml-2 px-3 py-1 border rounded">2</button>
      <span className="ml-2">...</span>
      <button className="ml-2 px-3 py-1 border rounded">10</button>
    </div>
  );
}

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Novels</h1>
        <Filter />
        <BookList />
        <Pagination />
      </main>
    </div>
  );
}

export default ProductPage;
