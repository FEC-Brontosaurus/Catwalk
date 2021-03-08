import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from '../../client/components/Overview/Overview';
import ProductInformation from '../../client/components/Overview/components/ProductInformation';
import ImageGallery from '../../client/components/Overview/components/ImageGallery/ImageGallery';
import Sizes from '../../client/components/Overview/components/Sizes';
import Quantity from '../../client/components/Overview/components/Quantity';
import AddToCart from '../../client/components/Overview/components/AddToCart';

const getById = queryByAttribute.bind(null, 'id');

//  Test to see if each component is successfully rendering to the DOM
//  NOTE: MUST ADD NEW ELEMENTS AS THEY ARE CREATED TO TEST IF THEY RENDER
describe('Overview Tests', () => {
  it('Should render Styles component to the DOM', () => {
    //  create a dummy current product/style that we can use to pass into funcitons
    const currentProduct = { id: '1111' };

    //  get the div that is inside of the overview function
    const { container } = render(<Overview currentProduct={currentProduct} />);

    //  get the div we want to check by it's id
    const Styles = getById(container, 'styles-div');

    //  check to make sure the div was added to the DOM
    expect(Styles).toBeInTheDocument();
  });

  it('Should render ProductInformation component to the DOM', () => {
    //  create a dummy current product/style that we can use to pass into funcitons
    const currentProduct = { id: '1111' };
    const currentStyle = { style: 'test style' };

    //  get the div that is inside of the ProductInformation function
    const { container } = render(
      <ProductInformation currentProduct={currentProduct} currentStyle={currentStyle} />,
    );

    //  get the div we want to check by it's id
    const ProductInfo = getById(container, 'productinformation-container');

    //  check to make sure the div was added to the DOM
    expect(ProductInfo).toBeInTheDocument();
  });

  it('Should render ImageGallery component to the DOM', () => {
    //  create a dummy ImageGallery constants that we can use to pass into funcitons
    const currentStyle = { photos: [] };

    //  get the div that is inside of the ImageGallery function
    const { container } = render(
      <ImageGallery
        currentStyle={currentStyle}
      />,
    );

    //  get the div we want to check by it's id
    const ImageGall = getById(container, 'imagegallery-container');

    //  check to make sure the div was added to the DOM
    expect(ImageGall).toBeInTheDocument();
  });

  it('Should render Sizes component to the DOM', () => {
    //  create a dummy current style that we can use to pass into funcitons
    const currentStyle = { style: 'test style' };

    //  get the div that is inside of the Sizes function
    const { container } = render(
      <Sizes currentStyle={currentStyle} />,
    );

    //  get the div we want to check by it's id
    const Size = getById(container, 'sizes-container');

    //  check to make sure the div was added to the DOM
    expect(Size).toBeInTheDocument();
  });

  it('Should render Quantity component to the DOM', () => {
    //  create a dummy current style that we can use to pass into funcitons
    const currentStyle = { style: 'test style' };

    //  get the div that is inside of the Quantity function
    const { container } = render(
      <Quantity currentStyle={currentStyle} />,
    );

    //  get the div we want to check by it's id
    const Quant = getById(container, 'quantity-container');

    //  check to make sure the div was added to the DOM
    expect(Quant).toBeInTheDocument();
  });

  it('Should render AddToCart component to the DOM', () => {
    //  create a dummy current style that we can use to pass into funcitons
    const currentStyle = { style: 'test style' };

    //  get the div that is inside of the AddToCart function
    const { container } = render(
      <AddToCart currentStyle={currentStyle} />,
    );

    //  get the div we want to check by it's id
    const Add = getById(container, 'addtocart-container');

    //  check to make sure the div was added to the DOM
    expect(Add).toBeInTheDocument();
  });
});
