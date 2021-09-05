import React from 'react';
// import './hero.css'
import '../styles/tailwind.css'

export default function Hero({ name, description, ctaText, imageUrl}) {
  return (
    <div className="flex">
      <div className="mr-6 max-w-lg">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="mb-2">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {ctaText} </button>
      </div>
      <div className="hero-image-container">
        <img src={imageUrl} alt={name} className="max-w-lg w-96 rounded-lg"/>
      </div>
    </div>
  );
}