import TaskInput from '@/components/TaskInput';

export default function TasksPage() {
    return (
        <div className="card">
            <h1 className="title">Add your daily tasks</h1>
            <TaskInput />
        </div>
    );
}