import React from 'react';
import { useAchievements } from './Achievements';
import './Achievements.css';

const AchievementsUI = () => {
  const achievements = useAchievements();

  return (
    <div className="achievements-container">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="achievement-card"
          style={{ backgroundImage: `url(${achievement.bgImage})` }}
        >
          <div className="achievement-content">
            <h2>{achievement.title}</h2>
            <h3>{achievement.institution}</h3>
            <p>{achievement.year}</p>
            <a
              href={achievement.diploma}
              download
              className="download-button"
            >
              Descargar diploma
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsUI;
