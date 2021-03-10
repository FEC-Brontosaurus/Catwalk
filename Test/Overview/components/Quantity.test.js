import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quantity from '../../../client/components/Overview/components/Quantity';
import QuantityRender from '../../../client/components/Overview/components/QuantityRender';

//  Test to see if each component is successfully rendering to the DOM
describe('Quanity Tests', () => {
  it('Should Render to the DOM', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentStyle = {
      style_id: 110041, name: 'Cyan', photos: ['test1'], skus: { 1: { size: 'S', quantity: 3 }, 2: { size: 'M', quantity: 22 } },
    };
    const currentSize = 'M';
    const setCurrentQuantity = jest.fn();
    const currentQuantity = 2;

    render(<Quantity
      currentStyle={currentStyle}
      currentSize={currentSize}
      setCurrentQuantity={setCurrentQuantity}
      currentQuantity={currentQuantity}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('quantity-container')).toBeInTheDocument();
  });
});

// quantityArray, setCurrentQuantity, currentSize, currentQuantity,

describe('Quanity Render Tests', () => {
  it('Should Render to the DOM', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const quantityArray = [1, 2, 3, 4, 5, 6];
    const currentSize = 'M';
    const setCurrentQuantity = jest.fn();
    const currentQuantity = 2;
    const isTest = true;

    render(<QuantityRender
      quantityArray={quantityArray}
      isTest={isTest}
      currentSize={currentSize}
      setCurrentQuantity={setCurrentQuantity}
      currentQuantity={currentQuantity}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryAllByTestId('quantity-option-valid').length).toBe(6);
  });

  it('Should handle no quanity', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const quantityArray = [1, 2, 3, 4, 5, 6];
    const currentSize = 'M';
    const setCurrentQuantity = jest.fn();
    const currentQuantity = null;
    const isTest = true;

    render(<QuantityRender
      quantityArray={quantityArray}
      isTest={isTest}
      currentSize={currentSize}
      setCurrentQuantity={setCurrentQuantity}
      currentQuantity={currentQuantity}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryAllByTestId('quantity-option-valid').length).toBe(6);
    expect(screen.queryByTestId('placeholder')).toBeInTheDocument();
  });

  it('Should set quanity on change', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const quantityArray = [1, 2, 3, 4, 5, 6];
    const currentSize = 'M';
    const setCurrentQuantity = jest.fn();
    const currentQuantity = null;
    const isTest = true;

    render(<QuantityRender
      quantityArray={quantityArray}
      isTest={isTest}
      currentSize={currentSize}
      setCurrentQuantity={setCurrentQuantity}
      currentQuantity={currentQuantity}
    />);

    fireEvent.change(screen.queryByTestId('quantity-select-valid'), 4);

    //  check to make sure that the first style is the current style
    expect(setCurrentQuantity).toBeCalled();
  });
});
