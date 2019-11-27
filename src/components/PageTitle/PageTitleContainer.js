import React from 'react';
import { connect } from 'react-redux';
import PageTitle from './PageTitle';

const PageTitleContainer = props => <PageTitle {...props} />;

const mapStateToProps = state => ({
  metadata: state.products.metadata,
  productsCount: state.products.results.length
});

export default connect(mapStateToProps)(PageTitleContainer);
