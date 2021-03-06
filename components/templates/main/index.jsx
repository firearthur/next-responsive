import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'MainTemplate' });
/**
 * Represents the common page layout and structure
 * @param {node} head carries some meta data about page
 * @param {node} navBar holds main navigation
 * @param {node} footer some extra info about page
 * @param {array} children of nodes to serve as the content
 */
const MainTemplate = ({
  head,
  navBar,
  footer,
  children,
  hideNavBar,
}) => {
  const {
    contentContainer, content, toolBar, root,
  } = useStyles();


  return (
    <div className={root}>
      {head}
      {navBar}
      {/* toolBar is a clear for the app bar */}
      <div className={classNames({ hideNavBar }, toolBar)} />
      <div className={contentContainer}>
        <main className={content}>
          {children}
        </main>
      </div>
      {footer}
    </div>
  );
};


export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  footer: PropTypes.node,
  head: PropTypes.node,
  navBar: PropTypes.node,
};
