export interface ItemResponseProps {
    response: {
      id?: string;
      date?: string;
      useRes?:string;
      time?: string;
      textResponse?: string;
      itemId?: string;
      userId?: string;
    };
  }
export interface ListItemResponseProps {
    responses: Array<{
        id?: string;
        date?: string;
        time?: string;
        useRes?:string;
        textResponse?: string;
        itemId?: string;
        userId?: string;
      }>;
  }


