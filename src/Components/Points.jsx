import React, { useEffect, useState } from 'react';

const POINTS_THRESHOLD = 100;

const Points = () => {
  const [points, setPoints] = useState(0);
  const [certificates, setCertificates] = useState([]);
  const [isBasicUnlocked, setIsBasicUnlocked] = useState(false);

  useEffect(() => {
    // Temporary mock data – replace with actual fetch from backend
    const mockData = {
      points: 120,
      certificates: [
        { title: 'HTML Basics', points: 50 },
        { title: 'CSS Mastery', points: 70 }
      ]
    };
    setPoints(mockData.points);
    setCertificates(mockData.certificates);
    setIsBasicUnlocked(mockData.points >= POINTS_THRESHOLD);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎯 Points Dashboard</h1>
      <p className="text-xl">Total Points: <strong>{points}</strong></p>
      <p className="mb-4">
        Status: {isBasicUnlocked ? 
          <span className="text-green-600">✅ Basic Plan Unlocked</span> : 
          <span className="text-red-600">🔒 Locked — Earn more points</span>}
      </p>
      <h2 className="text-2xl font-semibold mb-2">Certificates Earned:</h2>
      <ul className="list-disc list-inside">
        {certificates.map((cert, index) => (
          <li key={index}>{cert.title} — +{cert.points} pts</li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
