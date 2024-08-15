import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout';
import { useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const mockColors = [
  { name: 'Red', rgb: [255, 0, 0] },
  { name: 'Green', rgb: [0, 255, 0] },
  { name: 'Blue', rgb: [0, 0, 255] },
];

jest.mock('../src/lib/color', () => ({
  colors: mockColors,
}));

describe('Layout Component', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ a: 'ff', b: '00', c: '00' });
  });

  test('renders successfully', () => {
    render(
      <MemoryRouter initialEntries={['/color/ff/00/00']}>
        <Routes>
          <Route path="/color/:a/:b/:c" element={<Layout />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Red')).toBeInTheDocument();
  });

  test('renders navigation links correctly', () => {
    render(
      <MemoryRouter initialEntries={['/color/ff/00/00']}>
        <Routes>
          <Route path="/color/:a/:b/:c" element={<Layout />} />
        </Routes>
      </MemoryRouter>
    );
    mockColors.forEach(color => {
      expect(screen.getByText(color.name)).toBeInTheDocument();
    });
  });

  test('sets background color based on URL parameters', () => {
    render(
      <MemoryRouter initialEntries={['/color/ff/00/00']}>
        <Routes>
          <Route path="/color/:a/:b/:c" element={<Layout />} />
        </Routes>
      </MemoryRouter>
    );
    const container = screen.getByRole('main');
    expect(container).toHaveStyle({ backgroundColor: '#ff0000' });
  });
});
