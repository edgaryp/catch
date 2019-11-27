import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const PageTitle = ({ metadata, productsCount }) => {
  const { query, total, page, pages } = metadata;
  return (
    <>
      <Typography variant="h5">Showing result for "{query}"</Typography>
      <Typography>
        Page {page} of {pages}
      </Typography>
      <Typography>
        Showing {productsCount} of {total}
      </Typography>
    </>
  );
};

PageTitle.propTypes = {
  metadata: PropTypes.object,
  productsCount: PropTypes.number
};

export default PageTitle;
