import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddToCart from '../../../client/components/Overview/components/AddToCart';

describe('AddToCart Tests', () => {
  it('If size is OUT OF STOCK add to cart button should not render', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentQuantity = null;
    const currentSize = 'OUT OF STOCK';
    const setAddToCartNoSize = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['test1'] };

    render(<AddToCart
      currentQuantity={currentQuantity}
      currentSize={currentSize}
      setAddToCartNoSize={setAddToCartNoSize}
      currentStyle={currentStyle}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('addtocart')).toBeNull();
  });

  it('If size is M add to cart button and add to cart text should render', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentQuantity = null;
    const currentSize = 'M';
    const setAddToCartNoSize = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['test1'] };

    render(<AddToCart
      currentQuantity={currentQuantity}
      currentSize={currentSize}
      setAddToCartNoSize={setAddToCartNoSize}
      currentStyle={currentStyle}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('addtocart')).toBeInTheDocument();
    expect(screen.queryByText('Add to Cart')).toBeInTheDocument();
  });

  it('If size is null and button is clicked setAddToCartNoSize should be called', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentQuantity = null;
    const currentSize = null;
    const setAddToCartNoSize = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['test1'] };

    render(<AddToCart
      currentQuantity={currentQuantity}
      currentSize={currentSize}
      setAddToCartNoSize={setAddToCartNoSize}
      currentStyle={currentStyle}
    />);

    fireEvent.click(screen.queryByTestId('addtocart'));

    //  check to make sure that the first style is the current style
    expect(setAddToCartNoSize).toHaveBeenCalled();
  });
});
