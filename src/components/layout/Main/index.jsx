import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import CampaignSection from './components/CampaignSection';
import { sectionsHeading } from './constants/data';
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
        <h2 className={styles.headerText}>{sectionsHeading}</h2>
        <CampaignSection />
      </div>
    </div>
  );
};

export default Main;
