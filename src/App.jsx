import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Posts from JSONPlaceholder</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {posts.slice(0, 50).map((post) => (
                    <li
                        key={post.id}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                            borderRadius: '4px',
                        }}
                    >
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
