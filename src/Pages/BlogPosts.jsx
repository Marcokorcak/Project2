import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

const Posts = () => {
	const [BlogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getData = async () => {
		const url = 'http://localhost:3001/v1/api/posts';
		setLoading(true);
		setError(false);
		try {
			const request = await fetch(url);
			const response = await request.json();
			setBlogPosts(response);
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{error && <ErrorAlert>{error}</ErrorAlert>}
			{!error && loading && (
				<div className="max-w-[230px]">
					<p className='loading'> loading....</p>
					<Skeleton count="10" />
				</div>
			)}
			{!error && !loading && (
				<>
					<p className="fancy">Posts<span className="fancy"></span></p>
					<div className="hp">
						{BlogPosts.map((post) => {
							return (
								<div key={post.id}>
									<Link
										id="link_style"
										className="rounded-2xl w-60 transition duration-300 hover:scale-150 hover:bg-orange-400 flex justify-center text-center"
										to={`/posts/${post.id}`}
									>
										{post.title}
									</Link>
									<p className="auth"> by {post.author}</p>
								</div>
							);
						})}
					</div>
				</>
			)}
		</>
	);
};

export default Posts;
