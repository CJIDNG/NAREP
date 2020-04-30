import { createSelector } from 'reselect';

const selectDatasets = (state) => state.datasets;
const selectSingleDataset = (state) => state.singleDataset;

export const selectItems = createSelector([selectDatasets],
  (datasets) => datasets);

export const selectItemsCount = createSelector([selectDatasets],
  (datasets) => datasets.numberOfFiles);

export const selectTags = createSelector([selectDatasets],
  (datasets) => datasets.datasets.map(({ tags }) => tags));

export const selectSectors = createSelector([selectDatasets],
  (datasets) => datasets.sectors);

export const selectDataset = createSelector([selectSingleDataset],
  (singleDataset) => singleDataset);
