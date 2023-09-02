import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loader from '../../components/Loader/Loder';
import styles from './Home.module.css';
import Footer from '../../components/Footer/Footer';
import QnA from '../../components/QnA/QnA';
import Description from '../../components/Description/Description';



interface HomePresenterProps {
  movieDetail: any;
  error: string | null;
  loading: boolean;
}

const HomePresenter: React.FC<HomePresenterProps> = ({
  movieDetail,
  error,
  loading,
}) => {
  const checkPC =
    'win16|win32|win64|macintel|mac|';
  const checkPCMobileBool =
    checkPC.indexOf(navigator.platform.toLowerCase()) < 0;

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <HelmetProvider>
        <Helmet>
          <title>넷플릭스 - 홈</title>
        </Helmet>
      </HelmetProvider>

{error}
      {movieDetail && (
        <div className={styles.homeContainer}>
          <iframe 
            id="iframe" 
            title="movie"
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${movieDetail.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movieDetail.videos.results[0].key}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
          <div className={styles.content}>
            <h1 className={styles.title}>{movieDetail.title}</h1>
            <h2 className={styles.subTitle}>{movieDetail.tagline}</h2>
            <div className={styles.genres}>
              {movieDetail.genres.map((genre : any, index : any) =>
                movieDetail.genres.length - 1 === index
                  ? genre.name
                  : `${genre.name} • `
              )}
            </div>
            <div className={styles.yearRuntimeContainer}>
              <span className={styles.year}>
                {movieDetail.release_date.substring(0, 4)}
              </span>
              <span className={styles.yearRuntimeSpan}>•</span>
              <span className={styles.runtime}>{movieDetail.runtime}분</span>
            </div>
            <div className={styles.rating}>
              평점
              <span className={styles.ratingChild}>
                {movieDetail.vote_average}
              </span>
            </div>
            {checkPCMobileBool ? (
              <div className={styles.overview}>
                {movieDetail.overview.substring(0, 310)}..
              </div>
            ) : (
              <div className={styles.overview}>
                {movieDetail.overview.substring(0, 150)}..
              </div>
            )}
          </div>
          <div className={styles.homeSubContainer}>
            {/* Render Description, QnA, and Footer components */}

                <Description/>
                <QnA/>
                <Footer/>

          </div>
        </div>
      )}
    </div>
  );
};
HomePresenter.propTypes = {
  movieDetail: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};


export default HomePresenter;