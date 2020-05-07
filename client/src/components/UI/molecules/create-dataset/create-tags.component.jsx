/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, TagInput, InputTags, InputTag, Button
} from './create-tags.styles';

const TagsInput = ({ selectedTags }) => {
  const [tags, setTags] = useState([]);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((item, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    event.preventDefault();
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <Container>
      <InputTags>
        { tags.map((tag, index) => (
          <InputTag key={ index } className="tag">
            <span className="tag-title">{ tag }</span>
            <Button type="button" onClick={ () => { removeTags(index); } }>x</Button>
          </InputTag>
        )) }
      </InputTags>
      <TagInput
        type="text"
        onKeyDown={ (event) => event.key === 'Enter' ? addTags(event) : null }
        placeholder="Press enter to add tags"
      />
    </Container>
  );
};
TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
};
export default TagsInput;
