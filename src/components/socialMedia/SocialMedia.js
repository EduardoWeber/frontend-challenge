import React from 'react';
import styles from './SocialMedia.module.css';
import getIconByName from '../../utils/IconHelper';

function SocialMedia(props) {
  const { icon, isActive = false, url = '' } = props;

  let color = isActive ? '#4d4d4d' : '#b3b3b3';

  return (
    <div className={styles.container}>
      {isActive && url ? (
        <a href={url}>{getIconByName(icon, color)}</a>
      ) : (
        getIconByName(icon, color)
      )}
    </div>
  );
}

export default SocialMedia;
