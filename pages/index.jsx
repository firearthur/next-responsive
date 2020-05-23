import { useState } from 'react';
import { useTranslation, i18n } from '../i18n';
// eslint-disable-next-line import/named
import { withApollo } from '../lib/apollo';
import { makeStyles, Button } from '../lib';
import MainPage from '../components/pages/main';
import getStyles from '../pages-styles/index-styles';
import Slider from '../components/organisms/slider';

const useStyles = makeStyles(getStyles, { name: 'Index' });

const Index = () => {
  const slidesData = [
    { headerIconUrl: 'static/images/thing.png', headerIconAlt: 'thing', text: '111' },
    { headerIconUrl: 'static/images/thing.png', headerIconAlt: 'thing', text: '222' },
    { headerIconUrl: 'static/images/thing.png', headerIconAlt: 'thing', text: '333' },
  ];

  const { t: commonT } = useTranslation('common');
  const { paragraph, icons } = useStyles();

  return (
    <MainPage title={commonT('pageTitle')}>
      <p className={paragraph}>index page</p>
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
