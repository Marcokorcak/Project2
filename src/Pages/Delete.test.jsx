import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Delete from './Delete';
import React from 'react';

describe('Delete renders properly', () => {
	beforeEach(() => {
		render(<Delete />);
	});

	test('Header of Delete Page is rendered', () => {
		const content = screen.getByTestId('delete test');

		expect(content).toHaveTextContent('Delete');
	});

	test('Header of Deleted Post page is rendered', () => {
		const content = screen.getByTestId('Deleted');

		expect(content).toHaveTextContent('Deleted');
	});
});
