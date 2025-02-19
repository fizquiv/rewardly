'use client';

import { useStore } from '@/lib/store';

export default function CompletedTasksList() {
    const { transactions } = useStore();

    const todayCompletedTasks = transactions.filter(
        (t) => t.type === 'Earn' && new Date(t.date).toDateString() === new Date().toDateString()
    );

    return (
        <ul className="space-y-2">
            {todayCompletedTasks.map((task) => (
                <li key={task.transactionId} className="flex items-center justify-between">
                    <span>{task.referenceId}</span>
                    <span>{task.amount} points</span>
                </li>
            ))}
        </ul>
    );
}