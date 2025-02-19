export interface User {
    name: string;
    points: number;
  }
  
  export interface Task {
    taskId: string;
    title: string;
    pointsRewarded: number;
  }
  
  export interface Reward {
    rewardId: string;
    title: string;
    pointsCost: number;
  }
  
  export interface PointTransaction {
    transactionId: string;
    userId: string;
    type: 'Earn' | 'Spend';
    amount: number;
    referenceId: string;
    date: Date;
  }
  
  export interface Notification {
    notificationId: string;
    userId: string;
    message: string;
  }