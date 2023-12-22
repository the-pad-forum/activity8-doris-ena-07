import styles from '../styles/Skills.module.css';
import React from 'react';

const Skills = () => {
  return (
    <section className={styles.skills_section}>
      <h2>SKILLS</h2>
      <div className={styles.skill}>
        <span className={styles.skill_name}>CSS</span>
        <div className={styles.progress_bar}>
          <div className={styles.filled} style={{ width: '50%' }}></div>
        </div>
        <span className={styles.skill_percent}>50%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skill_name}>JavaScript</span>
        <div className={styles.progress_bar}>
          <div className={styles.filled} style={{ width: '35%' }}></div>
        </div>
        <span className={styles.skill_percent}>35%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skill_name}>HTML</span>
        <div className={styles.progress_bar}>
          <div className={styles.filled} style={{ width: '60%' }}></div>
        </div>
        <span className={styles.skill_percent}>60%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skill_name}>JAMStack</span>
        <div className={styles.progress_bar}>
          <div className={styles.filled} style={{ width: '25%' }}></div>
        </div>
        <span className={styles.skill_percent}>25%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skill_name}>Communication</span>
        <div className={styles.progress_bar}>
          <div className={styles.filled} style={{ width: '85%' }}></div>
        </div>
        <span className={styles.skill_percent}>85%</span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skill_name}>Rust</span>
        <div className={styles.progress_bar}>
          <div className={styles.filled} style={{ width: '10%' }}></div>
        </div>
        <span className={styles.skill_percent}>10%</span>
      </div>
    </section>
  );
};


export default Skills;