import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = 'http://localhost:3001/v1/api/posts';
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setPosts(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return <>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <>
            <p className = 'hp'>Click on any Post</p>
            <div className='hp'> 
            {posts.map(post => {
                return <div key={post.id}> 
                    <Link id="link_style" className='rounded-2xl w-60 transition duration-500 hover:scale-150 hover:bg-cyan-200 flex justify-center text-center' to={`/posts/${post.id}`}>{post.title}</Link> 
                    <p className='auth'> by {post.author}</p>
                </div>
            })}
            </div>
            
            </>
        }

    
    </>
}

export default Posts;