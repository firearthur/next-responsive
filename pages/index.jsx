import { useState } from 'react';
import { useTranslation, i18n } from '../i18n';
// eslint-disable-next-line import/named
import { withApollo } from '../lib/apollo';
import { makeStyles, Button, Grid } from '../lib';
import MainPage from '../components/pages/main';
import getStyles from '../pages-styles/index-styles';
import Card from '../components/organisms/card';
import BasicCard from '../components/molecules/basic-card';
import Slider from '../components/organisms/slider';

const useStyles = makeStyles(getStyles, { name: 'Index' });

const Index = () => {
  const { t: commonT } = useTranslation('common');
  const {
    hero, joinButton, heroContent, heroParagraph, gridContainer, gridWrapper, equipmentContainer, equipmentWrapper, equipmentsTitle
  } = useStyles();


  const slidesData = [
    { headerIconUrl: 'static/images/thing.png', headerIconAlt: 'thing', text: '111' },
    { headerIconUrl: 'static/images/thing.png', headerIconAlt: 'thing', text: '222' },
    { headerIconUrl: 'static/images/thing.png', headerIconAlt: 'thing', text: '333' },
  ];
  const baseAssetPath = process.env.IMAGE_ASSETS_PATH;
  const timeIconPath = `${baseAssetPath}/time-icon.png`;
  const distanceIconPath = `${baseAssetPath}/distance-icon.png`;
  const playListIconPath = `${baseAssetPath}/playlist-icon.png`;

  const gridCardsData = [
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-1.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-1.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Lake Inniscarra',
      location: 'Ireland—Pyramid',
      time: '38:55',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distance: '6,552 M',
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: '',
      overlayTitle: '',
      overlayCount: '',
      buttons: [{ text: 'view more', clickHandler: () => { console.log('view more'); } }],
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-2.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-2.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Performance Series',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: playListIconPath,
      overlayTitle: commonT('pages/index/cards/overlay/overlayTitle/workouts'),
      overlayCount: '9',
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-3.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-3.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Slow Pulls and Fast Intervals',
      time: '48:55',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distance: '9,552 M',
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: '',
      overlayTitle: '',
      overlayCount: '',
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-4.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-4.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: '20 Minutes to Toned',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: playListIconPath,
      overlayTitle: commonT('pages/index/cards/overlay/overlayTitle/workouts'),
      overlayCount: '12',
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-5.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-5.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Charles Race',
      location: 'Boston, Massachusetts',
      time: '38:55',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distance: '6,552 M',
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: '',
      overlayTitle: '',
      overlayCount: '',
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-6.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-6.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Full-Body HIIT Series',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: playListIconPath,
      overlayTitle: commonT('pages/index/cards/overlay/overlayTitle/workouts'),
      overlayCount: '12',
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-7.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-7.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Kafue River',
      location: 'Zambia—Power Stroke Pyramid',
      time: '38:55',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distance: '6,552 M',
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: '',
      overlayTitle: '',
      overlayCount: '',
    },
    {
      onClick: () => { console.log('clicked one'); },
      mainImgPath: `${baseAssetPath}/card-8.png`,
      mainImgTitle: commonT('pages/index/cards/mainImageTitle/one'),
      avatarPath: `${baseAssetPath}/avatar-8.png`,
      avatarTitle: commonT('pages/index/cards/mainImageTitle/one'),
      event: 'Shred & Burn Series',
      timeIconPath,
      timeIconPathDescription: commonT('pages/index/cards/mainImageTitle/one'),
      distanceIconPath,
      distanceIconDescription: commonT('pages/index/cards/mainImageTitle/one'),
      overlayIcon: playListIconPath,
      overlayTitle: commonT('pages/index/cards/overlay/overlayTitle/workouts'),
      overlayCount: '16',
    },
  ];

  const equipmentCardsData = [
    {
      imgPath: `${baseAssetPath}/bcard-1.png`,
      imgDescription: commonT('pages/index/equipmentCards/imageTitle/one'),
      title: commonT('pages/index/equipmentCards/title/treadmills'),
    },
    {
      imgPath: `${baseAssetPath}/bcard-2.png`,
      imgDescription: commonT('pages/index/equipmentCards/imageTitle/one'),
      title: commonT('pages/index/equipmentCards/title/bikes'),
    },
    {
      imgPath: `${baseAssetPath}/bcard-3.png`,
      imgDescription: commonT('pages/index/equipmentCards/imageTitle/one'),
      title: commonT('pages/index/equipmentCards/title/ellipticals'),
    },
    {
      imgPath: `${baseAssetPath}/bcard-4.png`,
      imgDescription: commonT('pages/index/equipmentCards/imageTitle/one'),
      title: commonT('pages/index/equipmentCards/title/strength'),
    },
  ];

  return (
    <MainPage title={commonT('pageTitles/index')}>
      <div className={hero}>
        <div className={heroContent}>
          <p className={heroParagraph}>{commonT('pages/index/hero/paragraph/best')}</p>
          <Button className={joinButton}>{commonT('pages/index/hero/joinButton/joinIfitCoach')}</Button>
        </div>
      </div>

      <div className={gridContainer}>
        <Grid className={gridWrapper} container spacing={1}>
          {gridCardsData.map((cardProps, i) => <Grid key={i} item sm={3} xs={12}><Card {...cardProps} /></Grid>)}
        </Grid>
      </div>

      <h2 className={equipmentsTitle}>{commonT('pages/index/equipmentsTitle/enabled')}</h2>
      <div className={equipmentContainer}>
        <Grid className={equipmentWrapper} container spacing={1}>
          {equipmentCardsData.map((cardProps, i) => <Grid key={i} item sm={3} xs={12}><BasicCard {...cardProps} /></Grid>)}
        </Grid>
      </div>

      <Button onClick={() => i18n.changeLanguage(i18n.language === 'en-US' ? 'es-US' : 'en-US')}>
        Change language
      </Button>
      <p>{commonT('test')}</p>
    </MainPage>
  );

  // return (
  //   <Slider slideLeftRightMargin={5} slideWidth={440} slidesData={slidesData} />
  // );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withApollo({ ssr: true })(Index);
