'use client';

import { useStore } from '@/lib/store';

export default function BadgesList() {
    // For now, we'll just display placeholder badges
    const badges = [
        { id: '1', title: 'Task Master', description: 'Completed 10 tasks' },
        { id: '2', title: 'Early Bird', description: 'Completed a task before 9 AM' },
        { id: '3', title: 'Consistency King', description: 'Completed tasks for 7 days in a row' },
    ];

    return (
        <ul className="space-y-2">
            {badges.map((badge) => (
                <li key={badge.id} className="flex items-center space-x-2">
                    <span className="text-2xl">🏅</span>
                    <div>
                        <h3 className="font-semibold">{badge.title}</h3>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}