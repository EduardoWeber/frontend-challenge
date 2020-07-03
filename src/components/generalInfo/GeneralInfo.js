import React from 'react';
import styles from './GeneralInfo.module.css';
import Card from '../../components/card';
import ContactInfo from '../../components/contactInfo';
import SocialMedia from '../../components/socialMedia';

function GeneralInfo(props) {
  const { data } = props;
  return (
    <Card title="Informações gerais">
      <div className={styles.userHeader}>
        <div className={styles.userAvatar}></div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{data.name}</div>
          <div className={styles.userCompany}>{data.company}</div>
          <div className={styles.userState}>
            {data.isActive ? 'Ativo' : 'Inativo'}
          </div>
        </div>
      </div>
      <ContactInfo icon="phone" value={data.phone} description="Celular" />
      <ContactInfo icon="email" value={data.email} description="Email" />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SocialMedia icon="whatsapp" url={data.socialMedia.whatsapp} />
        <SocialMedia icon="facebook" url={data.socialMedia.facebook} />
        <SocialMedia icon="instagram" url={data.socialMedia.instagram} />
        <SocialMedia icon="twitter" url={data.socialMedia.twitter} />
        <SocialMedia icon="linkedin" url={data.socialMedia.linkedin} />
      </div>
    </Card>
  );
}

export default GeneralInfo;
