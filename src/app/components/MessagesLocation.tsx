import { MessageProps } from '@/types/MessageLocationProps';
import { MessagePropsList } from '@/types/MessageLocationProps';
import React from 'react';
import '../globals.css';


const MessageMeetingLocation = ({message}:MessageProps) => {
  return (
    <>
            <div className="message mt-1_5 m-1">
              <h2 className="title-card text-xs">DE:#{message.userSend} - {message.date} - {message.time}</h2>
              <p className="p-card text-xs mt-1">{message.meetingLocation}</p>
            </div>
    </>
  );
};

const MessagesList = ({message}:MessagePropsList) => {
    if(message.length === 0){
        return (
          <>
                <p className='p-card  center-text mt-message text-3xl'>Não Existem Mensagens no momento</p>
          </>  
        )
    }
    return ( 
        <>
        <main>
            <section className="flex flex-col">
                {
                    message.map((message) => (
                        <MessageMeetingLocation key={message._id} message={message}/>
                    ))
                }
            </section>
        </main> 
        </>
    )
}
export default MessagesList;