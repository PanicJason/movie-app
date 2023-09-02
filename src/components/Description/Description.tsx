import React from 'react';
import styles from './Description.module.css';
import iconTV from '../../assets/icon_tv.png';
import iconDevice from '../../assets/icon_device.png';
import iconKid from '../../assets/icon_kid.png';
import iconMobile from '../../assets/icon_mobile.jpg';





const Description: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.DescContainer}>
        <div className={styles.DescContent}>
          <div className={styles.DescSubContent}>
            <div className={styles.DescTitle}>
              <h1 className={styles.DescH1}>TV로 즐기세요.</h1>
              <p className={styles.DescP}>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</p>
            </div>
            <div className={styles.DescImageContainer}>
              <img className={styles.DescImage} src={iconTV} alt="TV Icon" />
            </div>
          </div>
        </div>
        {/* ... Rest of your content */}

        <div className={styles.DescContent}>
          <div className={styles.DescSubContent}>
            <div className={styles.DescImageContainer}>
                <img className={styles.DescImage} src={iconMobile} alt="TV Icon" />
            </div>
            <div className={styles.DescTitle}>
              <h1 className={styles.DescH1}>즐겨 보는 콘텐츠를 저장해 <br/> 오프라인으로 시청하세요.</h1>
              <p className={styles.DescP}>
              간편하게 저장하고 빈틈없이 즐겨보세요.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.DescContent}>
          <div className={styles.DescSubContent}>
            <div className={styles.DescTitle}>
              <h1 className={styles.DescH1}>다양한 디바이스에서<br/>시청하세요.</h1>
              <p className={styles.DescP}>각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</p>
            </div>
            <div className={styles.DescImageContainer}>
              <img className={styles.DescImage} src={iconDevice} alt="TV Icon" />
            </div>
          </div>
        </div>




        <div className={styles.DescContent}>
          <div className={styles.DescSubContent}>
            <div className={styles.DescImageContainer}>
                <img className={styles.DescImage} src={iconKid} alt="TV Icon" />
            </div>
            <div className={styles.DescTitle}>
              <h1 className={styles.DescH1}>어린이 전용 프로필을<br />만들어 보세요.</h1>
              <p className={styles.DescP}>
                자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험.
                자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면
                무료입니다.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Description;