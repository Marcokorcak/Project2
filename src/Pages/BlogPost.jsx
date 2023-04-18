import Container from '../components/Container';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ErrorAlert from '../components/ErrorAlert';

const Post = () => {
	const [postInfo, setPostInfo] = useState({ id: {} });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const { id } = useParams();

	const fetchDetails = async () => {
		const url = `http://localhost:3001/v1/api/posts/${id}`;
		setLoading(true);
		setError(false);
		try {
			const request = await fetch(url);
			const response = await request.json();
			setPostInfo(response);
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchDetails();
	}, []);

	if (postInfo !== null && !error && !loading) {
		return (
			<>
				{error && <ErrorAlert>{error}</ErrorAlert>}
				{!error && loading && (
					<div className="max-w-[230px]">
						<p className="loading"> loading....</p>
						<Skeleton count="10" />
					</div>
				)}

				<Container>
					<div className="post">
						<div className="center">
							<p className="a">{postInfo.title}</p>
							<p className="b">By {postInfo.author}</p>
							<div className="p-4">
								<p className="b">The content is {postInfo.content}</p>
								<p className="c">It was updated on {postInfo.last_updated}</p>
								<p className="c">It was created on {postInfo.originally_published}</p>
							</div>
							<Link to={`/posts/${postInfo.id}/edit`}>
								<div className="edit_button">
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
											Edit Post
										</span>
									</a>
								</div>
							</Link>
							<Link to={`/posts/${postInfo.id}/delete`}>
								<div className="edit_button">
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
							</Link>

							<Link to={'/posts'}>
								<div className="edit_button">
									<a
										href="#_"
										className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-md group"
									>
										<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
												/>
											</svg>
										</span>
										<span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
											Return Home
										</span>
										<span className="relative invisible">Return Home</span>
									</a>
								</div>
							</Link>
						</div>
					</div>
				</Container>
			</>
		);
	}
};

export default Post;
