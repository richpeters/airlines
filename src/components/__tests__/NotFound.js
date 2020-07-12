import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import NotFound from '../NotFound'

test('Not Found', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <NotFound />
    </Router>
  )
  expect(container.innerHTML).toMatch('<div class=\"button-row\"><a class=\"button\" href=\"/\">Back to list</a></div><h3>Flight not found</h3><p>Please try again</p>');
});