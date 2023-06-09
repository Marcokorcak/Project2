import React from 'react';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import ErrorAlert from '../components/ErrorAlert';

const Delete = () => {
	const params = useParams();

	const [postData, setPostData] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [changing, setchanging] = useState(true);

	const fetchData = async () => {
		const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;

		try {
			const response = await axios.get(URL);
			setPostData(response.data);
			console.log(JSON.stringify(response));
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const deletePosts = async () => {
		const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;
		axios.delete(URL).then(function (response) {
			console.log(response);
		});

		setchanging(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (!changing) {
		return (
			<>
				{error && <ErrorAlert>{error}</ErrorAlert>}
				{!error && loading && (
					<div className="max-w-[230px]">
						<Skeleton count="10" />
					</div>
				)}
				{!error && !loading && <></>}
				<p className="hp" data-testid="delete test">This post has been deleted</p>
				<Link to={'/posts'}>
					<div>
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
								Return to Posts
							</span>
						</a>
					</div>
				</Link>
			</>
		);
	}

	return (
		<>
			{error && <ErrorAlert>{error}</ErrorAlert>}
			{!error && loading && (
				<div className="max-w-[230px]">
					<Skeleton count="10" />
				</div>
			)}
			{!error && !loading && <></>}

			<div className="create">
				<h1> Delete this post?</h1>
				<div className="create_buttonv2" onClick={deletePosts}>
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
							Delete Post
						</span>
					</a>
				</div>
				<Link to={`/posts/${postData.id}`}>
					<div className="py-3" onClick={() => setchanging(false)}>
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
								Cancel
							</span>
						</a>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Delete;
