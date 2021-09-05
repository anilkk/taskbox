import React from 'react';
import '../styles/tailwind.css';

export default function Profile({ name, role, company,  imageUrl}) {
  return (
    <div className="flex flex-col">
      <div>
        <img src={imageUrl} alt="profile" className="max-w-xs w-60 rounded-lg" />
      </div>
      <h1 className="text-xl"><span className="font-bold">Name: </span>{name}</h1>
      <h3 className="text-xl"><span className="font-bold">Role: </span>{role}</h3>
      <h3 className="text-xl"><span className="font-bold">Company: </span>{company}</h3>
    </div>
  );
}