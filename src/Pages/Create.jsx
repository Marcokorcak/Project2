import React from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import ErrorAlert from '../components/ErrorAlert';

const Create = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [author, setAuthor] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const postBlog = async () => {
		const URL = 'http://localhost:3001/v1/api/posts';
		axios
			.post(URL, {
				title: title,
				content: content,
				author: author,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (e) {
				setError('Error: ' + e.message);
			});
		setTitle('');
		setContent('');
		setAuthor('');
		setLoading(false);
	};

	return (
		<>
			{error && <ErrorAlert>{error}</ErrorAlert>}
			{!error && loading && (
				<div className="max-w-[230px]">
					<Skeleton count="10" />
				</div>
			)}
			{!error && !loading && (
				<>
					<div className="create">
						<h1 className="edit"> Create a New Post </h1>

						<label> Title:</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>

						<label> Author:</label>
						<input
							type="text"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>

						<label> Content</label>
						<textarea
							type="text"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
						<div className="create_button" onClick={postBlog}>
							<a
								href="#_"
								className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
							>
								<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-500 group-hover:h-full"></span>
								<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
									<svg
										className="w-5 h-5 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
									<svg
										className="w-5 h-5 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>

								<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
									Submit Post
								</span>
							</a>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Create;
