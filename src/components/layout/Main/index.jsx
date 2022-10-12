import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import CampaignSection from './components/CampaignSection';
import styles from './Main.module.scss';

const Main = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);

  const itemClickHandler = itemIdx => {
    setActiveSidebarItem(itemIdx);
  };
  return (
    <div className={styles.mainWrapper}>
      <Sidebar activeSidebarItem={activeSidebarItem} itemClickHandler={itemClickHandler} />
      {/* Can render different section based on sidebar selected items */}
      <div className={styles.content}>
        <h2 className={styles.headerText}>Recently Viewed Campaigns</h2>
        <CampaignSection />
      </div>
    </div>
  );
};

export default Main;
