import { create } from 'zustand';
import { User, Task, Reward, PointTransaction, Notification } from './types';

interface Store {
    user: User | null;
    tasks: Task[];
    rewards: Reward[];
    transactions: PointTransaction[];
    notifications: Notification[];
    setUser: (name: string) => void;
    setTasks: (tasks: Task[]) => void;
    setRewards: (rewards: Reward[]) => void;
    completeTask: (taskId: string) => void;
    redeemReward: (rewardId: string) => void;
    addNotification: (message: string) => void;
}

export const useStore = create<Store>((set) => ({
    user: null,
    tasks: [],
    rewards: [],
    transactions: [],
    notifications: [],
    setUser: (name: string) => set((state) => ({
        user: { name, points: 0 }
    })),
    setTasks: (tasks: Task[]) => set({ tasks }),
    setRewards: (rewards: Reward[]) => set({ rewards }),
    completeTask: (taskId: string) => set((state) => {
        const task = state.tasks.find(t => t.taskId === taskId);
        if (task && state.user) {
            const newPoints = state.user.points + task.pointsRewarded;
            return {
                user: { ...state.user, points: newPoints },
                transactions: [...state.transactions, {
                    transactionId: Date.now().toString(),
                    userId: state.user.name,
                    type: 'Earn',
                    amount: task.pointsRewarded,
                    referenceId: taskId,
                    date: new Date()
                }]
            };
        }
        return state;
    }),
    redeemReward: (rewardId: string) => set((state) => {
        const reward = state.rewards.find(r => r.rewardId === rewardId);
        if (reward && state.user && state.user.points >= reward.pointsCost) {
            const newPoints = state.user.points - reward.pointsCost;
            return {
                user: { ...state.user, points: newPoints },
                transactions: [...state.transactions, {
                    transactionId: Date.now().toString(),
                    userId: state.user.name,
                    type: 'Spend',
                    amount: reward.pointsCost,
                    referenceId: rewardId,
                    date: new Date()
                }]
            };
        }
        return state;
    }),
    addNotification: (message: string) => set((state) => ({
        notifications: [...state.notifications, {
            notificationId: Date.now().toString(),
            userId: state.user?.name || '',
            message
        }]
    }))
}));