import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import StoreFeatureGameDetail from './store-feature-game-detail';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

describe('StoreFeatureGameDetail', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <StoreFeatureGameDetail />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
