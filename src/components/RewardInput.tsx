'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Reward } from '@/lib/types';

export default function RewardInput() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [currentReward, setCurrentReward] = useState('');
  const router = useRouter();
  const { setRewards: storeRewards } = useStore();

  const addReward = () => {
    if (currentReward.trim()) {
      const newReward: Reward = {
        rewardId: Date.now().toString(),
        title: currentReward.trim(),
        pointsCost: 50,
      };
      setRewards([...rewards, newReward]);
      setCurrentReward('');
    }
  };

  const handleDone = () => {
    storeRewards(rewards);
    router.push('/home');
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={currentReward}
          onChange={(e) => setCurrentReward(e.target.value)}
          className="input mr-2"
          placeholder="Enter a reward"
        />
        <button onClick={addReward} className="btn btn-secondary">Add Reward</button>
      </div>
      <ul className="mb-4">
        {rewards.map((reward) => (
          <li key={reward.rewardId} className="mb-2">{reward.title}</li>
        ))}
      </ul>
      <button onClick={handleDone} className="btn btn-primary">Done</button>
    </div>
  );
}