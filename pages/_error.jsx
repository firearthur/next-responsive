import PropTypes from 'prop-types';
import { useTranslation } from '../i18n';

const Error = ({ statusCode }) => {
  const { t: commonT } = useTranslation('common');
  return (
    <p>
      {statusCode
        ? commonT('error-with-status', { statusCode })
        : commonT('error-without-status')}
    </p>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default Error;
