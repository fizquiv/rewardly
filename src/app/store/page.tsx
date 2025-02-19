'use client';

import { useStore } from '@/lib/store';

export default function StorePage() {
    const { rewards, redeemReward, user } = useStore();

    return (
        <div className="card">
            <h1 className="title">Reward Store</h1>
            <p className="mb-4">Your current points: {user?.points}</p>
            <ul className="space-y-2">
                {rewards.map((reward) => (
                    <li key={reward.rewardId} className="flex items-center justify-between">
                        <span>{reward.title} ({reward.pointsCost} points)</span>
                        <button
                            onClick={() => redeemReward(reward.rewardId)}
                            disabled={!user || user.points < reward.pointsCost}
                            className="btn btn-primary disabled:opacity-50"
                        >
                            Redeem
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}