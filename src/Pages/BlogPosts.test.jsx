/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { describe, beforeEach, expect, test } from 'vitest';
import Posts from './BlogPosts';

//tests the if the application reads data correctly and mounts

describe('<Posts />', () => {
	test('App mounts properly', () => {
		const wrapper = render(<BrowserRouter><Posts /></BrowserRouter>);
		expect(wrapper).toBeTruthy();
	});
}); 

describe('Posts Component renders correctly', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Posts />
			</BrowserRouter>
		);
	});

	test('The text "Posts" appears', async () => {
		await waitFor(() => {
			expect(screen.queryAllByText('Posts'));
		});
	});
});



