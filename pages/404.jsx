import { useTranslation } from '../i18n';

const Custom404 = () => {
  const { t: commonT } = useTranslation('common');
  return <p>{commonT('pages/errors/404/main')}</p>;
};

export default Custom404;
