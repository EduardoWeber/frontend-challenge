import React from 'react';
import styles from './GeneralInfo.module.css';
import Card from '../../components/card';
import ContactInfo from '../../components/contactInfo';
import SocialMedia from '../../components/socialMedia';

function GeneralInfo(props) {
  return (
    <Card title="Informações gerais">
      <div className={styles.userHeader}>
        <div className={styles.userAvatar}></div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Justine Robinson</div>
          <div className={styles.userCompany}>Acme inc</div>
          <div className={styles.userState}>Ativo</div>
        </div>
      </div>
      <ContactInfo icon="phone" value="45 9 9989 9343" description="Celular" />
      <ContactInfo icon="email" value="email@email.com" description="Email" />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SocialMedia icon="whatsapp" url="https://whatsapp.com" />
        <SocialMedia icon="facebook" url="https://facebook.com" />
        <SocialMedia icon="instagram" url="https://instagram.com" />
        <SocialMedia icon="twitter" url="https://twitter.com" />
        <SocialMedia icon="linkedin" url="https://linkedin.com" />
      </div>
    </Card>
  );
}

export default GeneralInfo;
