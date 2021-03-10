/* eslint-disable spaced-comment */
/* eslint-disable max-len */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageGalleryArrows from '../../../../client/components/Overview/components/ImageGallery/ImageGalleryArrows';
import ImageGalleryThumbnailArrows from '../../../../client/components/Overview/components/ImageGallery/ImageGalleryThumbnailArrows';
import ImageGalleryThumbnail from '../../../../client/components/Overview/components/ImageGallery/ImageGalleryThumbnail';

/******************************************************************************************************
***********************************                                 ***********************************
***********************************    ImageGallery Arrow Tests     ***********************************
***********************************                                 ***********************************
*******************************************************************************************************/

describe('ImageGallery Arrow Tests', () => {
  it('Should render left and right arrow to the DOM if image index is not on the ends of the current style photos array', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentImageIndex = 1;
    const setCurrentImageIndex = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['photo 1', 'photo 2', 'photo 3'] };

    render(<ImageGalleryArrows
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('leftarrow')).toBeInTheDocument();
    expect(screen.queryByTestId('rightarrow')).toBeInTheDocument();
  });

  it('Should render left arrow but not right arrow to the DOM if image index is at the end of the currstyle photos array', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentImageIndex = 2;
    const setCurrentImageIndex = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['photo 1', 'photo 2', 'photo 3'] };

    render(<ImageGalleryArrows
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('leftarrow')).toBeInTheDocument();
    expect(screen.queryByTestId('rightarrow')).not.toBeInTheDocument();
  });

  it('Should render right arrow but not left arrow to the DOM if image index is at the beginning of the currstyle photos array', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const currentImageIndex = 0;
    const setCurrentImageIndex = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['photo 1', 'photo 2', 'photo 3'] };

    render(<ImageGalleryArrows
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('leftarrow')).not.toBeInTheDocument();
    expect(screen.queryByTestId('rightarrow')).toBeInTheDocument();
  });

  it('Should call setcurrimageindex upon clicking left arrow', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentImageIndex = 1;
    const setCurrentImageIndex = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['photo 1', 'photo 2', 'photo 3'] };
    const LogClick = jest.fn();

    render(<ImageGalleryArrows
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('leftarrow'));

    //  check to make sure that the first style is the current style
    expect(setCurrentImageIndex).toBeCalled();
    expect(LogClick).toBeCalled();
  });

  it('Should call setcurrimageindex upon clicking right arrow', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const currentImageIndex = 1;
    const setCurrentImageIndex = jest.fn();
    const currentStyle = { style_id: 110041, name: 'Cyan', photos: ['photo 1', 'photo 2', 'photo 3'] };
    const LogClick = jest.fn();

    render(<ImageGalleryArrows
      setCurrentImageIndex={setCurrentImageIndex}
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('rightarrow'));

    //  check to make sure that the first style is the current style
    expect(setCurrentImageIndex).toBeCalled();
    expect(LogClick).toBeCalled();
  });
});

/******************************************************************************************************
*******************************                                          ******************************
*******************************    ImageGallery Thumbnail Arrow Test     ******************************
*******************************                                          ******************************
*******************************************************************************************************/

describe('ImageGallery Thumbnail Arrow Tests', () => {
  it('Should render left and right arrow to the DOM if image index is not on the ends of the current style photos array', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const thumbDisplayArr = 1;
    const setThumbDisplayArr = jest.fn();
    const thumbSplitArr = [[], [], []];

    render(<ImageGalleryThumbnailArrows
      setThumbDisplayArr={setThumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      thumbDisplayArr={thumbDisplayArr}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('imagegallery-thumbnail-leftarrow')).toBeInTheDocument();
    expect(screen.queryByTestId('imagegallery-thumbnail-rightarrow')).toBeInTheDocument();
  });

  it('Should render left arrow but not right arrow to the DOM if image index is at the end of the currstyle photos array', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const thumbDisplayArr = 2;
    const setThumbDisplayArr = jest.fn();
    const thumbSplitArr = [[], [], []];

    render(<ImageGalleryThumbnailArrows
      setThumbDisplayArr={setThumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      thumbDisplayArr={thumbDisplayArr}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('imagegallery-thumbnail-leftarrow')).toBeInTheDocument();
    expect(screen.queryByTestId('imagegallery-thumbnail-rightarrow')).not.toBeInTheDocument();
  });

  it('Should render right arrow but not left arrow to the DOM if image index is at the beginning of the currstyle photos array', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const thumbDisplayArr = 0;
    const setThumbDisplayArr = jest.fn();
    const thumbSplitArr = [[], [], []];

    render(<ImageGalleryThumbnailArrows
      setThumbDisplayArr={setThumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      thumbDisplayArr={thumbDisplayArr}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('imagegallery-thumbnail-leftarrow')).not.toBeInTheDocument();
    expect(screen.queryByTestId('imagegallery-thumbnail-rightarrow')).toBeInTheDocument();
  });

  it('Should call setcurrimageindex upon clicking left arrow', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const thumbDisplayArr = 1;
    const setThumbDisplayArr = jest.fn();
    const thumbSplitArr = [[], [], []];
    const LogClick = jest.fn();

    render(<ImageGalleryThumbnailArrows
      setThumbDisplayArr={setThumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      thumbDisplayArr={thumbDisplayArr}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('imagegallery-thumbnail-leftarrow'));

    //  check to make sure that the first style is the current style
    expect(setThumbDisplayArr).toBeCalled();
    expect(LogClick).toBeCalled();
  });

  it('Should call setcurrimageindex upon clicking right arrow', () => {
    //  create a dummy current product that we can use to pass into funcitons

    const thumbDisplayArr = 1;
    const setThumbDisplayArr = jest.fn();
    const thumbSplitArr = [[], [], []];
    const LogClick = jest.fn();

    render(<ImageGalleryThumbnailArrows
      setThumbDisplayArr={setThumbDisplayArr}
      thumbSplitArr={thumbSplitArr}
      thumbDisplayArr={thumbDisplayArr}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('imagegallery-thumbnail-rightarrow'));

    //  check to make sure that the first style is the current style
    expect(setThumbDisplayArr).toBeCalled();
    expect(LogClick).toBeCalled();
  });
});

/******************************************************************************************************
***********************************                                 ***********************************
***********************************    ImageGallery Slide Tests     ***********************************
***********************************                                 ***********************************
*******************************************************************************************************/

/******************************************************************************************************
*******************************                                          ******************************
*******************************    ImageGallery Thumbnail Image Test     ******************************
*******************************                                          ******************************
*******************************************************************************************************/

//   currentImageIndex, setCurrentImageIndex, LogClick,
//   thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, currentStyle,
describe('ImageGallery Thumbnail Images Tests', () => {
  it('Should not render thumbnail arrows if only one array', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const thumbSplitArr = [[{ thumbnail_url: 'url 1' }, { thumbnail_url: 'url 2' }, { thumbnail_url: 'url 3' }]];
    const setThumbDisplayArr = jest.fn();
    const setCurrentImageIndex = jest.fn();
    const currentImageIndex = 0;
    const thumbDisplayArr = 0;

    render(<ImageGalleryThumbnail
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
      setCurrentImageIndex={setCurrentImageIndex}
      currentImageIndex={currentImageIndex}
      thumbDisplayArr={thumbDisplayArr}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('imagegallery-thumbnail-arrows-container')).not.toBeInTheDocument();
  });

  it('Should render thumbnail arrows if more than one array', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const thumbSplitArr = [[{ thumbnail_url: 'url 1' }, { thumbnail_url: 'url 2' }], [{ thumbnail_url: 'url 3' }]];
    const setThumbDisplayArr = jest.fn();
    const setCurrentImageIndex = jest.fn();
    const currentImageIndex = 0;
    const thumbDisplayArr = 0;

    render(<ImageGalleryThumbnail
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
      setCurrentImageIndex={setCurrentImageIndex}
      currentImageIndex={currentImageIndex}
      thumbDisplayArr={thumbDisplayArr}
    />);

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('imagegallery-thumbnail-arrows-container')).toBeInTheDocument();
  });

  it('on click should call set curr image index and log click when style has images', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const thumbSplitArr = [[{ thumbnail_url: 'url 1' }, { thumbnail_url: 'url 2' }], [{ thumbnail_url: 'url 3' }]];
    const setThumbDisplayArr = jest.fn();
    const setCurrentImageIndex = jest.fn();
    const currentImageIndex = 0;
    const thumbDisplayArr = 0;
    const LogClick = jest.fn();

    render(<ImageGalleryThumbnail
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
      setCurrentImageIndex={setCurrentImageIndex}
      currentImageIndex={currentImageIndex}
      thumbDisplayArr={thumbDisplayArr}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('imagegallery-thumbnail-slide-image1'));

    //  check to make sure that the first style is the current style
    expect(LogClick).toBeCalled();
    expect(setCurrentImageIndex).toBeCalled();
  });

  it('on click should call set curr image index and log click when style has no image', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const thumbSplitArr = [[{ thumbnail_url: 'url 1' }, { }], [{ thumbnail_url: 'url 3' }]];
    const setThumbDisplayArr = jest.fn();
    const setCurrentImageIndex = jest.fn();
    const currentImageIndex = 0;
    const thumbDisplayArr = 0;
    const LogClick = jest.fn();

    render(<ImageGalleryThumbnail
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
      setCurrentImageIndex={setCurrentImageIndex}
      currentImageIndex={currentImageIndex}
      thumbDisplayArr={thumbDisplayArr}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('imagegallery-thumbnail-slide-noimage1'));

    //  check to make sure that the first style is the current style
    expect(LogClick).toBeCalled();
    expect(setCurrentImageIndex).toBeCalled();
  });

  it('on click should render no image with 0 opacity when the imag is not the curr image and it has no image', () => {
    //  create a dummy current product that we can use to pass into funcitons
    const thumbSplitArr = [[{ thumbnail_url: 'url 1' }, { }], [{ thumbnail_url: 'url 3' }]];
    const setThumbDisplayArr = jest.fn();
    const setCurrentImageIndex = jest.fn();
    const currentImageIndex = 1;
    const thumbDisplayArr = 0;
    const LogClick = jest.fn();

    render(<ImageGalleryThumbnail
      thumbSplitArr={thumbSplitArr}
      setThumbDisplayArr={setThumbDisplayArr}
      setCurrentImageIndex={setCurrentImageIndex}
      currentImageIndex={currentImageIndex}
      thumbDisplayArr={thumbDisplayArr}
      LogClick={LogClick}
    />);

    fireEvent.click(screen.queryByTestId('imagegallery-thumbnail-slide-noimage1'));

    //  check to make sure that the first style is the current style
    expect(screen.queryByTestId('imagegallery-thumbnail-slide-noimage1')).toBeInTheDocument();
  });
});
