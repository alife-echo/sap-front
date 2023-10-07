export interface CardListProps {
    items: Array<{
      id: string;
      nameItem: string;
      littleDescription: string;
      questionsValidated: string;
      meetingLocation: string;
      image: string;
      userId: string;
    }>;
  }