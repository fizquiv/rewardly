'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export default function NameInput() {
    const [name, setName] = useState('');
    const router = useRouter();
    const { setUser } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            setUser(name.trim());
            router.push('/tasks');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input mb-4"
                placeholder="Enter your name"
                required
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}