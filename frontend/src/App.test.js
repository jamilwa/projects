import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme/build';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

it('renders learn react link', () => {
  const renderer1 = new ShallowRenderer();
  renderer1.render(<App />);
  expect(renderer1).toMatchSnapshot();
});
