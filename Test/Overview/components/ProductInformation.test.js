import React from 'react';
import {
  render, queryByAttribute, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductInformation from '../../../client/components/Overview/components/ProductInformation';

const getById = queryByAttribute.bind(null, 'id');

describe('ProductInformation Tests', () => {
  it('Should render each component to the DOM', () => {
    //  create a dummy product with necessary properties to render
    const currentProduct = {
      category: 'test category',
      title: 'test title',
      default_price: 100,
      description: 'test description',
    };

    //  create a dummy style with no sale price
    const currentStyle = { sale_price: null };

    //  render the product information with the dummy variables
    const { container } = render(<ProductInformation
      currentProduct={currentProduct}
      currentStyle={currentStyle}
    />);

    //  find each component by id in the DOM
    const category = getById(container, 'product-info-category');
    const title = getById(container, 'product-info-title');
    const price = getById(container, 'product-info-price');
    const salePrice = getById(container, 'product-info-price-discount');

    //  Everything should exist except the sale price since none exists
    expect(category).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(salePrice).toBeNull();
  });

  it('Should render the default price if no sale priceand the slashed price to the DOM', () => {
    //  create a dummy product
    const currentProduct = {
      category: 'test category',
      title: 'test title',
      default_price: 100,
      description: 'test description',
    };

    //  create a style with a sale price
    const currentStyle = { sale_price: null };

    //  render these dummy variables to the DOM with product information
    const { container } = render(<ProductInformation
      currentProduct={currentProduct}
      currentStyle={currentStyle}
    />);

    //  find price and sale price in the DOM but not the default price
    const priceDefault = getById(container, 'product-info-price');
    const priceLine = getById(container, 'product-info-price-line');
    const salePrice = getById(container, 'product-info-price-discount');

    //  both should exist
    expect(priceDefault).toBeInTheDocument();
    expect(priceLine).toBeNull();
    expect(salePrice).toBeNull();
  });

  it('Should render no product if no style', () => {
    //  create a dummy product
    const currentProduct = {
      category: 'test category',
      title: 'test title',
      default_price: 100,
      description: 'test description',
    };

    //  create a style with a sale price
    const currentStyle = null;

    //  render these dummy variables to the DOM with product information
    const { container } = render(<ProductInformation
      currentProduct={currentProduct}
      currentStyle={currentStyle}
    />);

    //  find price and sale price in the DOM but not the default price
    const priceDefault = getById(container, 'product-info-price');
    const priceLine = getById(container, 'product-info-price-line');
    const salePrice = getById(container, 'product-info-price-discount');

    //  both should exist
    expect(priceDefault).toBeNull();
    expect(priceLine).toBeNull();
    expect(salePrice).toBeNull();
  });

  it('Should render no product if no style', () => {
    //  create a dummy product
    const currentProduct = {
      category: 'test category',
      title: 'test title',
      default_price: 100,
      description: 'test description',
    };

    //  create a style with a sale price
    const currentStyle = { sale_price: 80 };

    //  render these dummy variables to the DOM with product information
    const { container } = render(<ProductInformation
      currentProduct={currentProduct}
      currentStyle={currentStyle}
    />);

    //  find price and sale price in the DOM but not the default price
    const priceDefault = getById(container, 'product-info-price');
    const priceLine = getById(container, 'product-info-price-line');
    const salePrice = getById(container, 'product-info-price-discount');

    //  both should exist
    expect(priceDefault).toBeNull();
    expect(priceLine).toBeInTheDocument();
    expect(salePrice).toBeInTheDocument();
  });

  it('Should sale price and default with a line through if sale price exists', () => {
    //  create a dummy product
    const currentProduct = {
      category: 'test category',
      title: 'test title',
      default_price: 100,
      description: 'test description',
    };

    //  create a style with a sale price
    const currentStyle = { sale_price: 80 };

    //  render these dummy variables to the DOM with product information
    const { container } = render(<ProductInformation
      currentProduct={currentProduct}
      currentStyle={currentStyle}
    />);

    //  find price and sale price in the DOM but not the default price
    const priceDefault = getById(container, 'product-info-price');
    const priceLine = getById(container, 'product-info-price-line');
    const salePrice = getById(container, 'product-info-price-discount');

    //  both should exist
    expect(priceDefault).toBeNull();
    expect(priceLine).toBeInTheDocument();
    expect(salePrice).toBeInTheDocument();
  }); it('Should call funciton to scroll to review section on all review click', () => {
    //  create a dummy product
    const currentProduct = {
      category: 'test category',
      title: 'test title',
      default_price: 100,
      description: 'test description',
    };

    const reviewScroll = { current: { scrollIntoView: jest.fn() } };

    //  create a style with a sale price
    const currentStyle = { sale_price: 80 };

    //  render these dummy variables to the DOM with product information
    render(<ProductInformation
      currentProduct={currentProduct}
      currentStyle={currentStyle}
      reviewScroll={reviewScroll}
    />);

    //  find price and sale price in the DOM but not the default price
    const allReviews = screen.getByTestId('review-text');

    fireEvent.click(allReviews);
    //  both should exist
    expect(reviewScroll.current.scrollIntoView).toBeCalled();
  });
});
