import React from 'react';
import { campaignData, headingsData } from '../../constants/data';
import CampaignCard from '../CampaignCard';
import styles from './CampaignSection.module.scss';

const CampaignSection = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.headingSection}>
          {headingsData.map(item => (
            <h5 key={item}>{item}</h5>
          ))}
        </div>
        {campaignData.map(item => (
          <CampaignCard key={`campaign-card-${item.id}`} data={item} />
        ))}
      </div>
    </>
  );
};

export default CampaignSection;
