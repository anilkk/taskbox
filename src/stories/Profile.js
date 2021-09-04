import React from 'react';
const imageStyle = {
  maxWidth: '200px',
};
export default function Profile({ name, role, company,  imageUrl}) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="profile" style={imageStyle}/>
      </div>
      <h2>Name: {name}</h2>
      <h3>Role: {role}</h3>
      <h3>Company: {company}</h3>
    </div>
  );
}