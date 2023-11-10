import React from 'react';
import { CardListProps } from '@/types/CardListProps';
import { Link, Navigate, NavigateFunction, NavigateProps, To } from 'react-router-dom';
import { ItemResponseProps, ListItemResponseProps } from '@/types/ItemResponseProps';


function MessagesResponse({ response }:ItemResponseProps) {
    return (
      <>
             <div className="message mt-1_5">
                <p className="title-card text-xs text-rs-message">{response.useRes} - {response.date} - {response.time}</p>
                <p className="p-card text-xs text-rs">{response.textResponse}</p>
            </div>
      </>
    );
  }



function ItemMessageResponse({ responses }: ListItemResponseProps) {
  if(responses.length === 0) {
    return  (
      <div className="messages-container">
        <div className="message mt-1_5">
            <p className="title-card text-xs text-rs-message center-text ct">Não existem respostas para o item no momento</p>
        </div>
      </div>
         
    
    )  ;
  }
  return (
    
    <div className="messages-container">
      {responses.map((response)=> (
         <MessagesResponse key={response.id} response={response} />
      ))}
        
     </div>
  );
}

export default ItemMessageResponse;
