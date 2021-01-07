import React from 'react';
import { render } from '@testing-library/react';
import TimeLine from './timeline';

test('renders at least one company link', () => {
    render(<TimeLine />);
    expect(document.links[0]).toBeInTheDocument();
  });

test('renders component timeline', ()=>{
    const { getByTestId } = render(<TimeLine />);
    expect(getByTestId('timeline_id')).toBeVisible()     
})

test('renders at least one timeline-item', ()=>{
    const { getAllByTestId } = render(<TimeLine />);
    expect( getAllByTestId("timeline-item")[0]).toBeInTheDocument()
}) 

