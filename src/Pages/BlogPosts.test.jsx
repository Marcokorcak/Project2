/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Posts from './BlogPosts';

describe('Post Component renders correctly', () => {
	beforeEach(() => {
		render(
			<Router>
				<Posts />
			</Router>
		);
	});

	test('The text "Posts" appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Post'));
		});
	});
});


describe('<Posts />', () => {
	test('App mounts properly', () => {
		const wrapper = render(<BrowserRouter><Posts /></BrowserRouter>);
		expect(wrapper).toBeTruthy();
	});
}); 
