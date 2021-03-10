import React from 'react';
import {
  render, fireEvent, screen, simulate,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sizes from '../../../client/components/Overview/components/Sizes';
import SizesRender from '../../../client/components/Overview/components/SizesRender';

//  Test to see if each component is successfully rendering to the DOM
describe('Sizes Tests', () => {
  it('Should Render to the DOM if in stock', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentStyle = {
      style_id: 110041, name: 'Cyan', photos: ['test1'], skus: { 1: { size: 'S', quantity: 3 }, 2: { size: 'M', quantity: 22 } },
    };

    render(<Sizes
      currentStyle={currentStyle}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('sizes-container')).toBeInTheDocument();
  });

  it('Should Render to the DOM if out of stock', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentStyle = {
      style_id: 110041, name: 'Cyan', photos: ['test1'], skus: { 1: { size: 'S', quantity: 0 }, 2: { size: 'M', quantity: 0 } },
    };

    render(<Sizes
      currentStyle={currentStyle}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('sizes-container')).toBeInTheDocument();
  });
});

// styleArray, setCurrentSize, setCurrentQuantity, currentSize,
//   addToCartNoSize, setAddToCartNoSize, value, setValue, isTest,

describe('SizesRender Tests', () => {
  it('Should Render to the DOM if in stock', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentStyle = {
      style_id: 110041, name: 'Cyan', photos: ['test1'], skus: { 1: { size: 'S', quantity: 3 }, 2: { size: 'M', quantity: 22 } },
    };

    render(<Sizes
      currentStyle={currentStyle}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('sizes-container')).toBeInTheDocument();
  });

  // styleArray, setCurrentSize, setCurrentQuantity, currentSize,
  // addToCartNoSize, setAddToCartNoSize, value, setValue,

  it('Should Render add to cart with options opened if addtocartnosize is true', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const setCurrentSize = jest.fn();
    const setCurrentQuantity = jest.fn();
    const setAddToCartNoSize = jest.fn();
    const setValue = jest.fn();
    const currentSize = 'M';
    const addToCartNoSize = true;
    const styleArray = [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 2 }, { size: 'L', quantity: 2 }];

    render(<SizesRender
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
      setAddToCartNoSize={setAddToCartNoSize}
      setValue={setValue}
      currentSize={currentSize}
      addToCartNoSize={addToCartNoSize}
      styleArray={styleArray}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryAllByRole('option').length).toBe(4);
  });

  it('Should handle on change if addtocartnosize is true', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const setCurrentSize = jest.fn();
    const setCurrentQuantity = jest.fn();
    const setAddToCartNoSize = jest.fn();
    const LogClick = jest.fn();
    const setValue = jest.fn();
    const currentSize = 'M';
    const addToCartNoSize = true;
    const styleArray = [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 2 }, { size: 'L', quantity: 2 }];

    render(<SizesRender
      LogClick={LogClick}
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
      setAddToCartNoSize={setAddToCartNoSize}
      setValue={setValue}
      currentSize={currentSize}
      addToCartNoSize={addToCartNoSize}
      styleArray={styleArray}
    />);

    fireEvent.change(screen.queryByTestId('sizes-select-addtocart'), 'S');

    //  check to make sure that the first style is the current style
    expect(LogClick).toBeCalled();
    expect(setCurrentSize).toBeCalled();
    expect(setCurrentQuantity).toBeCalled();
    expect(setAddToCartNoSize).toBeCalled();
    expect(setValue).toBeCalled();
  });

  it('Should Render to the DOM if currentSize is null and add to Cart is undefined', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const setCurrentSize = jest.fn();
    const setCurrentQuantity = jest.fn();
    const setAddToCartNoSize = jest.fn();
    const setValue = jest.fn();
    const currentSize = null;
    const styleArray = [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 2 }, { size: 'L', quantity: 2 }];

    render(<SizesRender
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
      setAddToCartNoSize={setAddToCartNoSize}
      setValue={setValue}
      currentSize={currentSize}
      styleArray={styleArray}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryAllByTestId('size-option-valid').length).toBe(3);
  });

  it('Should handle on change if addtocartnosize is true and no current size', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const setCurrentSize = jest.fn();
    const setCurrentQuantity = jest.fn();
    const LogClick = jest.fn();
    const setValue = jest.fn();
    const currentSize = null;
    const addToCartNoSize = false;
    const styleArray = [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 2 }, { size: 'L', quantity: 2 }];

    render(<SizesRender
      LogClick={LogClick}
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
      setValue={setValue}
      currentSize={currentSize}
      addToCartNoSize={addToCartNoSize}
      styleArray={styleArray}
    />);

    fireEvent.change(screen.queryByTestId('sizes-select-nocurrent'), 'S');

    //  check to make sure that the first style is the current style
    expect(LogClick).toBeCalled();
    expect(setCurrentSize).toBeCalled();
    expect(setCurrentQuantity).toBeCalled();
    expect(setValue).toBeCalled();
  });

  it('Should Render to the DOM if currentSize is null and add to Cart is undefined', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const setCurrentSize = jest.fn();
    const setCurrentQuantity = jest.fn();
    const setAddToCartNoSize = jest.fn();
    const setValue = jest.fn();
    const currentSize = 'M';
    const styleArray = [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 2 }, { size: 'L', quantity: 2 }];

    render(<SizesRender
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
      setAddToCartNoSize={setAddToCartNoSize}
      setValue={setValue}
      currentSize={currentSize}
      // addToCartNoSize={addToCartNoSize}
      styleArray={styleArray}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryAllByTestId('size-option-valid').length).toBe(3);
  });

  it('Should handle on change if addtocartnosize is true and no current size', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const setCurrentSize = jest.fn();
    const setCurrentQuantity = jest.fn();
    const LogClick = jest.fn();
    const setValue = jest.fn();
    const currentSize = 'M';
    const addToCartNoSize = false;
    const styleArray = [{ size: 'S', quantity: 2 }, { size: 'M', quantity: 2 }, { size: 'L', quantity: 2 }];

    render(<SizesRender
      LogClick={LogClick}
      setCurrentSize={setCurrentSize}
      setCurrentQuantity={setCurrentQuantity}
      setValue={setValue}
      currentSize={currentSize}
      addToCartNoSize={addToCartNoSize}
      styleArray={styleArray}
    />);

    fireEvent.change(screen.queryByTestId('sizes-select-current'), 'S');

    //  check to make sure that the first style is the current style
    expect(LogClick).toBeCalled();
    expect(setCurrentSize).toBeCalled();
    expect(setCurrentQuantity).toBeCalled();
    expect(setValue).toBeCalled();
  });
});
