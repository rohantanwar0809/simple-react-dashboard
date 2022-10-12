import React from 'react';
import { formatClassNames } from '../../../../../utilities/format';
import styles from "./CampaignCard.module.scss";

const CampaignCard = (props) => {
  const { data: { name, socialLinks, posts, weeklyPosts, influencers, daysLeft, status } } = props;

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "completed": return styles.green;
      case "draft": return styles.yellow;
      default: return null;
    }
  }
  return (
    <div className={styles.campaignCard}>
      <div className={styles.brandSection}>
        <a href="#!" className={styles.img}>
          <img src="sony.png" alt="sony" height={40} />
        </a>
        <div className={styles.nameSection}>
          <h5>{name}</h5>
          <span>by Sony</span>
        </div>
        <div className={styles.socialIcons}>
          {socialLinks.map(item => (
            <a href={item.link} key={item.name} target="_blank" rel="noreferrer">
              <img src={`${item.name}.png`} alt={item.name} height={20} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.totalCount}>
        <h5>
          {posts ? posts : '-'}
        </h5>
      </div>
      <div className={styles.weekCount}>
        <h5>
          {weeklyPosts ? weeklyPosts : "-"}
        </h5>
      </div>
      <div className={styles.influencers}>
        <h5>

          {influencers ? influencers : "-"}
        </h5>
      </div>
      <div className={styles.daysLeft}>
        <h5>
          {daysLeft?.count ? daysLeft.count : "-"}
        </h5>

        {daysLeft?.end &&
          <span>
            Ends {daysLeft.end}
          </span>
        }
      </div>
      <div className={styles.status}>
        <h5>
          <span className={formatClassNames(styles.badge, getStatusBadgeColor(status))} /> {status ? status : "-"}
        </h5>
        <div className={styles.viewBtn}>
          View
        </div>
      </div>
    </div>
  )
}

export default CampaignCard