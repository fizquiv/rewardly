'use client';

import { useStore } from '@/lib/store';

export default function TasksListPage() {
    const { tasks, completeTask } = useStore();

    return (
        <div className="card">
            <h1 className="title">Daily Tasks</h1>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.taskId} className="flex items-center justify-between">
                        <span>{task.title} ({task.pointsRewarded} points)</span>
                        <button
                            onClick={() => completeTask(task.taskId)}
                            className="btn btn-secondary"
                        >
                            Complete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}