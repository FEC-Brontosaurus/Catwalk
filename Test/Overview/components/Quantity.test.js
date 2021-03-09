import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quantity from '../../../client/components/Overview/components/Quantity';

// currentStyle, currentSize, setCurrentQuantity, currentQuantity,

//  Test to see if each component is successfully rendering to the DOM
describe('Quanityt Tests', () => {
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
