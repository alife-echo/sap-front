import React from 'react';
import { CardListProps } from '@/types/CardListProps';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';


function CardResponse({ item }:CardProps) {


    return (
      <>
        <figure>
        <img className='img-forum' alt='' src={`data:image/png;base64,${item.image}`}/>
        </figure>
        <h2 className="title-card title-rs text-xl">{item.nameItem}</h2>
        <div className="questions-container">
            <p className="p-card text-xs text-rs mt-1">{item.questionsValidated}</p>
        </div>
        <form className="flex flex-col" method='post' action='/send-response-item'>
            <textarea name="res_item" className="input-textArea m-1 styles-input" placeholder="Ex: A) Nome Atlas, B)Cinza"></textarea>
            <input type="submit" className="bt-card" value="Enviar" />
        </form>
      </>
    );
  }



function ItemResponse({ item }: CardProps) {
  return (
    
    <div className="info-item">
        <CardResponse key={item.id} item={item} />
     </div>
  );
}

export default ItemResponse;
