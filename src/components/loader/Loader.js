import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { LoaderSpinner, Spinner } from './loaderStyled';

const Loader = ({ loading, children }) => (
  <>
    {loading
      ? (
        <LoaderSpinner>
          <Spinner />
          <Spinner />
        </LoaderSpinner>
      ) : (
        <>{children}</>
      )}
  </>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Loader;
