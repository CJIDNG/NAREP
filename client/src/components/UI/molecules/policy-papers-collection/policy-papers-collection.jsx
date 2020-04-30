/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectItems, selectItemsCount } from '@Redux/policy-paper/get-policy-paper/policy-papers.selectors';
import { fetchPolicyPapersStarted } from '@Redux/policy-paper/get-policy-paper/policy-paper.actions';
import Collection from '../fetch-collections/fetch-collections.component';

const PolicyPaper = ({ fetchPolicyPapers, collections, collectionsCount }) => {
  const getAllPolicyPaper = async (page) => fetchPolicyPapers(page);
  return (
    <Collection
      onCollectionFetch={getAllPolicyPaper}
      collections={collections}
      collectionsCount={collectionsCount}
      listType="policy-papers"
    />
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectItems,
  collectionsCount: selectItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  fetchPolicyPapers: (page) => dispatch(fetchPolicyPapersStarted(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(PolicyPaper);
