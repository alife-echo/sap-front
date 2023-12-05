import React from 'react';
import { CardListProps } from '@/types/CardListProps';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';


function Card({ item }:CardProps) {
    let displayText = item.nameItem || '';
    let displayDescriptionText = item.littleDescription || ''
    if (displayText.length > 19) {
      displayText = displayText.substring(0, 19) + '...';
    }
    if(displayDescriptionText.length >= 75){
        displayDescriptionText = displayDescriptionText.substring(0,75) + '...'
    }
  
    return (
      <div className="card flip-vertical-left">
        <figure>
          <img src={item.image} alt={item.nameItem} />
        </figure>
        <h2 className="title-card text-xl">{displayText}</h2>
        <p className="p-card text-xs">{displayDescriptionText}</p>
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
