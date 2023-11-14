export interface MessageProps{
    message:{
        _id?:string;
        date?:string;
        time?:string;
        meetingLocation?:string;
        userSend?:string;
        userId?:string;
    }
}
export interface MessagePropsList{
    message: Array<{
        _id?:string;
        date?:string;
        time?:string;
        meetingLocation?:string;
        userSend?:string;
        userId?:string;
    }>
}