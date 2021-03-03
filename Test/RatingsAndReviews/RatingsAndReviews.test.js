import React from 'react';
import { render, fireEvent, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingsAndReviews from '../../client/components/RatingsAndReviews/RatingsAndReviews.jsx';

const getById = queryByAttribute.bind(null, 'id');
const getByClass = queryByAttribute.bind(null, 'class');

//Test to see if each component is successfully rendering to the DOM
//As we add new elements to the DOM, we have to create a new test to makes sure they render
describe('Ratings And Reviews Component Tests', () => {
    it ('Should render Rating and Review components to the DOM', () => {
        //What is the information going into rating and review?

        const { container } = render(<RatingsAndReviews/>);

        const IndividualReviewTileTest = getById(container, 'IndividualReviewTile-div');

        expect(IndividualReviewTileTest).toBeInTheDocument();
  }
})