import React from 'react';
import { formatClassNames } from '../../../utilities/format';
import { sidebarData } from '../Main/constants/data';
import styles from './Sidebar.module.scss';

const Sidebar = props => {
  const { activeSidebarItem, itemClickHandler } = props;
  return (
    <>
      <div className={styles.sidebar}>
        {sidebarData.map((item, idx) => (
          <div className={formatClassNames(styles.item, idx === activeSidebarItem && styles.selected)} key={item.name} onClick={() => itemClickHandler(idx)}>
            <div className={styles.icon}>{item.icon}</div>
            <span className={styles.name}>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
