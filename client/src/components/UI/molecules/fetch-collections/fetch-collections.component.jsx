/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import DatasetLists from '../datasets-collection/dataset-list.component';
import PolicyPapersList from '../policy-papers-collection/policy-papers-list.component';

const PolicyPapersCollection = ({
  onCollectionFetch, collections, collectionsCount, queryString, listType
}) => {
  const [activePage, setActivePage] = useState(1);
  const onChange = (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
    if (queryString) {
      onCollectionFetch(activePage, queryString);
    }
    onCollectionFetch(activePage);
  };
  useEffect(() => {
    const fetchDatasets = async () => {
      if (queryString) {
        await onCollectionFetch(activePage, queryString);
        return;
      }
      await onCollectionFetch(activePage);
    };
    fetchDatasets();
  }, [queryString, activePage]);
  return (
    <div>
      {
        listType === 'policy-papers' ? (
          <PolicyPapersList
            collections={ collections }
            collectionsCount={ collectionsCount }
            activePage={ activePage }
            onChange={ onChange }
          />
        ) : (
            <DatasetLists
              collections={ collections }
              collectionsCount={ collectionsCount }
              activePage={ activePage }
              onChange={ onChange }
            />
          )
      }

    </div>
  );
};

export default PolicyPapersCollection;
