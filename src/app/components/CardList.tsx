import React from 'react';
import { CardListProps } from '@/types/CardListProps';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';


function Card({ item }:CardProps) {
    let displayText = item.nameItem || '';

    if (displayText.length > 19) {
      displayText = displayText.substring(0, 19) + '...';
    }
  
  
    return (
      <div className="card flip-vertical-left">
        <figure>
          <img src={`data:image/png;base64,${item.image}`} alt={item.nameItem} />
        </figure>
        <h2 className="title-card text-xl">{displayText}</h2>
        <p className="p-card text-xs">{item.littleDescription}</p>
        <Link to={`/forum/${item.id}`} >
           <input className="bt-card" type="submit" value="É meu" />
        </Link>

      </div>
    );
  }



function CardList({ items }: CardListProps) {
  if (items.length === 0) {
    return <p className="p-card mt-message center-text text-3xl">Não existem itens perdidos no momento.</p>;
  }
 console.log(items)
  return (
    
    <section className="cards flex">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
}

export default CardList;
