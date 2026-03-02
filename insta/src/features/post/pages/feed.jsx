import React,{ useEffect } from 'react'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost';
import { useAuth } from '../../auth/hooks/useAuth';

const Feed = () => {
  const {feed,handleGetFeed,loading} = usePost();
  const { user } = useAuth();

  useEffect(()=>{
    if(!user){
      return;
    }

    handleGetFeed().catch((err)=>{
      console.log(err?.response?.data?.message || err.message);
    });
  },[user, handleGetFeed])

  if(loading || feed === null){
    return (<main><h1>Feed is loading....</h1></main>)
  }

  if(!feed || feed.length === 0){
    return (<main><h1>No posts found.</h1></main>)
  }

  return (
    <main className='feed-page'>
        <div className="feed">
            <div className="posts">
                {feed.map((postItem) => (
                  <Post key={postItem._id} post={postItem} />
                ))}
            </div>
        </div>
    </main>
  )
}

export default Feed
