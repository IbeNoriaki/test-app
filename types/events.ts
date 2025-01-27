export type EventType = 'POINT_PURCHASE' | 'TOKEN_ISSUE' | 'TOKEN_PUMP';

interface BaseEvent {
  id: string;
  type: EventType;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
}

interface PointPurchaseEvent extends BaseEvent {
  type: 'POINT_PURCHASE';
  amount: number;
  purchasers?: {
    imageUrl: string;
    profileUrl: string;
  }[];
}

interface TokenIssueEvent extends BaseEvent {
  type: 'TOKEN_ISSUE';
  tokenSymbol: string;
}

interface TokenPumpEvent extends BaseEvent {
  type: 'TOKEN_PUMP';
  tokenSymbol: string;
  amount: number;
  creator: {
    name: string;
    avatar: string;
  };
}

export type Event = PointPurchaseEvent | TokenIssueEvent | TokenPumpEvent; 