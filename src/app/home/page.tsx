'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import BadgesList from '../../components/BadgesList';
import CompletedTasksList from '../../components/CompletedTasksList';

export default function HomePage() {
    const { user } = useStore();

    if (!user) return null;

    return (
        <div className="space-y-6">
            <h1 className="title">Welcome, {user.name}!</h1>
            <div className="card">
                <h2 className="text-xl font-semibold mb-4">Badges</h2>
                <BadgesList />
            </div>
            <div className="card">
                <h2 className="text-xl font-semibold mb-4">Today's Completed Tasks</h2>
                <CompletedTasksList />
            </div>
            <div className="flex justify-center space-x-4">
                <Link href="/store" className="btn btn-primary">Go to Store</Link>
                <Link href="/tasks-list" className="btn btn-secondary">Go to Tasks</Link>
            </div>
        </div>
    );
}