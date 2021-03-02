import React from 'react';
import { render, fireEvent, queryByAttribute, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Styles from '../../../client/components/Overview/components/Styles.jsx';
import axios from 'axios';

const getById = queryByAttribute.bind(null, 'id');

//  Test to see if each component is successfully rendering to the DOM
//  NOTE: MUST ADD NEW ELEMENTS AS THEY ARE CREATED TO TEST IF THEY RENDER
describe('componentsRendingToTheDOM', () => {
  it('Default style should be first in the list', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentStyle = {style_id: 110041, name: "Cyan", photos: ['test1']};
    const styles = [
      {style_id: 110041, name: "Cyan", photos: ['test1']},
      {style_id: 110042, name: "Blue", photos: ['test2']},
      {style_id: 110043, name: "Purple", photos: ['test3']},
      {style_id: 110044, name: "Red", photos: ['test4']}]

    //  get the div that is inside of the overview function
    const { container } = render(<Styles
      currentStyle={currentStyle}
    />);

    expect(currentStyle.style_id).toBe(styles[0].style_id);
  })
});