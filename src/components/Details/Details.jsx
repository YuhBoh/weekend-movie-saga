import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

export default function Details() {
  const details = useSelector(store => store.details);
  console.log('Details.jsx:', details);

  if(details.length < 1) {
    return (
      <p>Please go back</p>
    )
  }

  return (
    <main>
      <h1>Movie Details</h1>
      <section>
        <h3>{details[0].title}</h3>
        <h3>{details[0].description}</h3>
              <img src={details[0].poster} alt={details[0].title}></img>
        <h3>Genres</h3>
        {details.map(detail => {
          return (
            <p key={detail.id}>{detail.name}</p>
          )
        })}
      </section>
      <Link to='/'>Back to List</Link>
    </main>
  )
  
}