'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Task } from '@/lib/types';

export default function TaskInput() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState('');
  const router = useRouter();
  const { setTasks: storeTasks } = useStore();

  const addTask = () => {
    if (currentTask.trim()) {
      const newTask: Task = {
        taskId: Date.now().toString(),
        title: currentTask.trim(),
        pointsRewarded: 10,
      };
      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const handleDone = () => {
    storeTasks(tasks);
    router.push('/rewards');
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          className="input mr-2"
          placeholder="Enter a task"
        />
        <button onClick={addTask} className="btn btn-secondary">Add Task</button>
      </div>
      <ul className="mb-4">
        {tasks.map((task) => (
          <li key={task.taskId} className="mb-2">{task.title}</li>
        ))}
      </ul>
      <button onClick={handleDone} className="btn btn-primary">Done</button>
    </div>
  );
}