import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from '../../client/components/Overview/Overview';

const getById = queryByAttribute.bind(null, 'id');

//  Test to see if each component is successfully rendering to the DOM
//  NOTE: MUST ADD NEW ELEMENTS AS THEY ARE CREATED TO TEST IF THEY RENDER
describe('Overview Tests', () => {
  it('Should render components to the DOM', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentProduct = { id: '1111' };

    //  get the div that is inside of the overview function
    const { container } = render(<Overview currentProduct={currentProduct} />);

    //  get the div we want to check by it's id
    const Styles = getById(container, 'styles-div');

    //  check to make sure each div was added to the DOM
    expect(Styles).toBeInTheDocument();
  });
});
