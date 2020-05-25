import { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import { useTranslation, i18n } from '../i18n';
import IntersectionObserver from '../components/molecules/intersection-observer';
// eslint-disable-next-line import/named
import { withApollo } from '../lib/apollo';
import { makeStyles, Button, Grid } from '../lib';
import MainPage from '../components/pages/main';
import getStyles from '../pages-styles/index-styles';
import Card from '../components/organisms/card';
import BasicCard from '../components/molecules/basic-card';
import Slider, { getPaddedArray } from '../components/organisms/slider';
import Slide from '../components/molecules/slide';
import SlideContent from '../components/molecules/slide-content';

const useStyles = makeStyles(getStyles, { name: 'Index' });

const Index = () => {
  const { t: commonT } = useTranslation('common');
  const {
    hero,
    joinButton,
    heroContent,
    heroParagraph,
    gridContainer,
    gridWrapper,
    equipmentContainer,
    equipmentWrapper,
    equipmentsTitle,
  } = useStyles();
  const [hideNavBar, setHideNavBar] = useState(false);
  const [animateEquipment, setAnimateEquipment] = useState(false);
  const baseAssetPath = process.env.IMAGE_ASSETS_PATH;
  const sliderButtonIcon = `${baseAssetPath}/slider-arrow.png`;

  const slidesData = getPaddedArray([
    {
      headerIconUrl: `${baseAssetPath}/slide-1.png`,
      headerIconAlt: 'thing',
      text: '“You focus on putting in the work, and the technology handles the rest.”',
    },
    {
      headerIconUrl: `${baseAssetPath}/slide-2.png`,
      headerIconAlt: 'thing',
      text: '“Literally transports you from home to wherever you choose to run.”',
    },
    {
      headerIconUrl: `${baseAssetPath}/slide-3.png`,
      headerIconAlt: 'thing',
      text: '“Breathes new life into a tired, old running routine.”',
    },
  ]);
  const slidesDataWithIds = slidesData.map((slide, i) => ({ ...slide, id: i }));
  const timeIconPath = `${baseAssetPath}/time-icon.png`;
  const distanceIconPath = `${baseAssetPath}/distance-icon.png`;
  const playListIconPath = `${baseAssetPath}/playlist-icon.png`;

  const gridCardsData = [
    {
      onClick: () => {
        console.log('clicked one');
      },
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
      buttons: [
        {
          text: 'view more',
          clickHandler: () => {
            console.log('view more');
          },
        },
      ],
    },
    {
      onClick: () => {
        console.log('clicked one');
      },
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
      onClick: () => {
        console.log('clicked one');
      },
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
      onClick: () => {
        console.log('clicked one');
      },
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
      onClick: () => {
        console.log('clicked one');
      },
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
      onClick: () => {
        console.log('clicked one');
      },
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
      onClick: () => {
        console.log('clicked one');
      },
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
      onClick: () => {
        console.log('clicked one');
      },
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

  const handleScrollPassedHero = e => {
    const { isIntersecting, boundingClientRect, intersectionRect } = e[0];
    if (!isIntersecting && boundingClientRect.y < 100 && !hideNavBar) {
      // left on the way down
      setHideNavBar(true);
    } else if (!isIntersecting && intersectionRect.y === 0) {
      // left on the way back to top
      setHideNavBar(false);
    }
  };

  const handleScrollToEquipment = (e, observerObj) => {
    const { isIntersecting } = e[0];
    if (isIntersecting) {
      setAnimateEquipment(true);
      observerObj.disconnect();
    }
  };

  return (
    <MainPage hideNavBar={hideNavBar} showFooter title={commonT('pageTitles/index')}>
      <div className={hero}>
        <div className={heroContent}>
          <Fade timeout={1000} in style={{ transitionDelay: '1000ms' }}>
            <p className={heroParagraph}>{commonT('pages/index/hero/paragraph/best')}</p>
          </Fade>
          <Button className={joinButton}>
            {commonT('pages/index/hero/joinButton/joinIfitCoach')}
          </Button>
        </div>
      </div>

      <IntersectionObserver onElementIntersect={handleScrollPassedHero} />

      <Slider
        buttonIconPath={sliderButtonIcon}
        slideLeftRightMargin={5}
        slideWidth={440}
        slidesData={slidesData}
      >
        {slidesData.map(({
          headerIconUrl, headerIconAlt, text, id,
        }, i) => (
          <Slide
            width={440}
            onTransitionEnd={() => console.log('hiii')}
            onAnimationEnd={() => console.log('iiih')}
            leftRightMargin={`${5}px`}
            // width={i === slideToShrinkIndex ? '1px' : `${slideWidth}px`}
            key={i}
          >
            <SlideContent text={text} headerIconAlt={headerIconAlt} headerIconUrl={headerIconUrl} />
          </Slide>
        ))}
      </Slider>
      <div className={gridContainer}>
        <Grid className={gridWrapper} container spacing={1}>
          {gridCardsData.map((cardProps, i) => (
            <Grid key={i} item container justify="center" sm={3} xs={12}>
              <Card animateOnHover {...cardProps} />
            </Grid>
          ))}
        </Grid>
      </div>

      <h2 className={equipmentsTitle}>{commonT('pages/index/equipmentsTitle/enabled')}</h2>
      <IntersectionObserver onElementIntersect={handleScrollToEquipment} />
      <div className={equipmentContainer}>
        <Grid className={equipmentWrapper} container spacing={1}>
          {equipmentCardsData.map((cardProps, i) => (
            <Zoom key={i} timeout={1000} in={animateEquipment}>
              <Grid item sm={3} xs={12}>
                <BasicCard {...cardProps} />
              </Grid>
            </Zoom>
          ))}
        </Grid>
      </div>
    </MainPage>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withApollo({ ssr: true })(Index);
