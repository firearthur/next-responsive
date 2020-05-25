import classNames from 'classnames';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {
  makeStyles, MuiCard, Grid, Button,
} from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Card' });

/**
 * Basic Card component
 */
const Card = ({
  onClick,
  width,
  mainImgPath,
  mainImgTitle,
  avatarPath,
  avatarTitle,
  event,
  time,
  timeIconPath,
  timeIconDescription,
  distance,
  distanceIconPath,
  distanceIconDescription,
  location,
  overlayIcon,
  overlayIconDescription,
  overlayTitle,
  overlayCount,
  buttons = [],
  animateOnHover,
}) => {
  const {
    root,
    overlay,
    avatar,
    media,
    cardContent,
    playlistCount,
    playlistTitle,
    cardDescription,
    buttonsContainer,
    eventName,
    eventLocation,
    eventStats,
    eventTime,
    eventDistance,
    statsIcon,
    avatarContainer,
  } = useStyles();
  const showStats = time || distance;

  return (
    <MuiCard className={classNames({ raiseUpOnHover: animateOnHover }, root)}>
      <CardActionArea>
        <CardMedia className={media} image={mainImgPath} title={mainImgTitle}>
          {
            overlayTitle && (
              <div className={overlay}>
                <span className={playlistCount}>{overlayCount}</span>
                <span className={playlistTitle}>{overlayTitle}</span>
                <img src={overlayIcon} alt={overlayIconDescription} />
              </div>
            )
          }
        </CardMedia>
      </CardActionArea>
      <CardContent className={cardContent}>
        <Grid container>
          <Grid item xs={avatarPath ? 10 : 12}>
            <p className={cardDescription}>
              <span className={eventName}>
                {event}
              </span>
              {location && (
                <span className={eventLocation}>
                  {', '}
                  {location}
                  {' '}
                </span>
              )}
            </p>
          </Grid>
          {avatarPath && (
          <Grid className={avatarContainer} item xs={2}>
            <img className={avatar} src={avatarPath} alt={avatarTitle} />
          </Grid>
          )}
          {showStats && (
          <Grid item xs={12}>
            <div className={eventStats}>
              {time && (
              <span className={eventTime}>
                <img className={statsIcon} src={timeIconPath} alt={timeIconDescription} />
                {time}
              </span>
              )}
              {distance && (
              <span className={eventDistance}>
                <img className={statsIcon} src={distanceIconPath} alt={distanceIconDescription} />
                {distance}
              </span>
              )}
            </div>
          </Grid>
          )}
        </Grid>
      </CardContent>
      <CardActions className={buttonsContainer}>
        {buttons.map(({ text, clickHandler }, i) => (
          <Button key={i} onClick={clickHandler} size="small" color="primary">
            {text}
          </Button>
        ))}
      </CardActions>
    </MuiCard>
  );
};

Card.propTypes = {
  avatarPath: PropTypes.any,
  avatarTitle: PropTypes.any,
  buttons: PropTypes.array,
  distance: PropTypes.any,
  distanceIconDescription: PropTypes.any,
  distanceIconPath: PropTypes.any,
  event: PropTypes.any,
  location: PropTypes.any,
  mainImgPath: PropTypes.any,
  mainImgTitle: PropTypes.any,
  onClick: PropTypes.any,
  overlayCount: PropTypes.any,
  overlayIcon: PropTypes.any,
  overlayIconDescription: PropTypes.any,
  overlayTitle: PropTypes.any,
  time: PropTypes.any,
  timeIconDescription: PropTypes.any,
  timeIconPath: PropTypes.any,
  width: PropTypes.any,
};

export default Card;
