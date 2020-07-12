import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import BackButton from '../BackButton';

test('Back button', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <BackButton />
    </Router>
  )
  expect(container.innerHTML).toMatch('<div class=\"button-row\"><a class=\"button\" href=\"/\">Back to list</a></div>');
});