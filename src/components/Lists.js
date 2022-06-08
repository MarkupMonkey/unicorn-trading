import React, { useState } from 'react';

export default function Lists(props) {
    const [state, changeState] = useState(props.id);

  return (
    <section className={`list ${state % 2 === 1 ? "row" : "row-reverse"}`}> 
    <picture className="list-image" >
    <img src={props.img} alt=""  />
    </picture>
    <article className='list-content'>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </article>
</section>
  )
}
