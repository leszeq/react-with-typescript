import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Add some test..', () => {
	test('It should check if the h1 is in the Dom', () => {
		render(<App />);
        screen.getByText('Hello in TodoApp')
	});
});
