import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectSectors } from '@Redux/datasets/get-datasets/datasets.selectors';
import { Link } from 'react-router-dom';

const DatasetSectors = ({ sectors }) => (
  <div className="p-4">
    <span>
      { sectors.map(({ id, name }) => (
        <h3 key={id} className="capitalize mb-5 tracking-wide text-gray-600">
          <Link to={`/datasets?sectorId=${id}`}>
            { name }
          </Link>
        </h3>
      )) }
    </span>
  </div>
);
DatasetSectors.propTypes = {
  sectors: PropTypes.array.isRequired
};
const mapStateToProps = createStructuredSelector({
  sectors: selectSectors,
});
export default connect(mapStateToProps)(DatasetSectors);
