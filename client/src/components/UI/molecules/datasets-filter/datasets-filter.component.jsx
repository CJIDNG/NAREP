import React, { useState } from 'react';
import { Accordion, Menu } from 'semantic-ui-react';
import DatasetSectors from './datasets-sectors.component';

const DatasetFilter = () => {
  const [state, setState] = useState({
    activeIndex: 0
  });
  const { activeIndex } = state;
  const handleClick = (event, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setState({ activeIndex: newIndex });
  };
  return (
    <Accordion as={Menu} vertical>
      <Accordion.Title
        active={activeIndex === 0}
        content="Sectors"
        index={0}
        onClick={handleClick}
        className="font-bold text-xl mb-2 text-gray-700 border-b p-2"
      />
      <Accordion.Content active={activeIndex === 0} content={<DatasetSectors />} />
    </Accordion>
  );
};

export default DatasetFilter;
