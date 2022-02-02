import { findByTestId, findByText, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });

  it('should render successfully', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const element = await findByTestId(container, 'app-container');
    expect(element).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(await findByText(container, 'Board Game Hoard')).toBeTruthy();
  });
});
