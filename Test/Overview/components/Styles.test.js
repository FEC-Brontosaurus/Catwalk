import React from 'react';
import { render, fireEvent, queryByAttribute, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Styles from '../../../client/components/Overview/components/Styles.jsx';
import StylesRow from '../../../client/components/Overview/components/StylesRow.jsx';
import axios from 'axios';

const getById = queryByAttribute.bind(null, 'id');

//  Test to see if each component is successfully rendering to the DOM
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

    //  check to make sure that the first style is the current style
    expect(currentStyle.style_id).toBe(styles[0].style_id);
  })

  it('Should update the current style when clicking on a style in the thumbnail', async () => {

    //  create dummy variables to simulate render
    const setCurrentStyle = jest.fn();
    const currentStyle = {style_id: 110041, name: "Cyan", photos: ['test1']};
    const row = [
      {style_id: 110041, name: "Cyan", photos: [{thumbnail_url: 'test1'}]},
      {style_id: 110042, name: "Blue", photos: [{thumbnail_url: 'test2'}]},
      {style_id: 110043, name: "Purple", photos: [{thumbnail_url: 'test3'}]},
      {style_id: 110044, name: "Red", photos: [{thumbnail_url: 'test4'}]}]

    //  simulate what is rendering to the screen
    const { findByTestId } = render(<StylesRow setCurrentStyle={setCurrentStyle} currentStyle={currentStyle} row={row} />)

    //  simulate a click on one of the images
    await fireEvent.click(screen.getByTestId("Blue"));
    //  expect the setCurrentState to be called after click
    await expect(setCurrentStyle).toBeCalled();
  })

  it('Should only allow one style can be selected at a given time', async () => {

    //  create dummy variables to simulate render
    let currentStyle = {style_id: 110041, name: "Cyan", photos: ['test1']};
    const setCurrentStyle = ((style) => {currentStyle = style});
    const row = [
      {style_id: 110041, name: "Cyan", photos: [{thumbnail_url: 'test1'}]},
      {style_id: 110042, name: "Blue", photos: [{thumbnail_url: 'test2'}]},
      {style_id: 110043, name: "Purple", photos: [{thumbnail_url: 'test3'}]},
      {style_id: 110044, name: "Red", photos: [{thumbnail_url: 'test4'}]}]

    //  simulate what is rendering to the screen
    const { findByTestId } = render(<StylesRow setCurrentStyle={setCurrentStyle} currentStyle={currentStyle} row={row} />)

    //  simulate a click on one of the images
    await fireEvent.click(screen.getByTestId("Blue"));
    //  expect the setCurrentState to be called after click
    await expect(currentStyle).toStrictEqual({style_id: 110042, name: "Blue", photos: [{thumbnail_url: 'test2'}]});
  })
});