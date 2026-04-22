// pages/game/index.js
import dynamic from 'next/dynamic';

// Dynamically load PhaserGame ONLY on the client
const PhaserGame = dynamic(() => import('./PhaserGame'), { ssr: false });

export default function GamePage() {
  return (
    <div>
      <h1>Algo Quest: Temple of Code</h1>
      <PhaserGame />
    </div>
  );
}
