import React,{ useEffect } from 'react'
import Post from '../components/Post'
import { usePost } from '../hooks/usePost';
import { useAuth } from '../../auth/hooks/useAuth';
import Nav from '../../styles/components/Nav';
import '../../styles/feed.scss'

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

  return (
    <main className='feed-page'>
      <Nav/>
        <div className="feed">
          {(loading || feed === null) ? (
            <h1 className="feed-status">Feed is loading...</h1>
          ) : feed.length === 0 ? (
            <h1 className="feed-status">No posts found.</h1>
          ) : (
            <div className="posts">
              {feed.map((postItem) => (
                <Post key={postItem._id} post={postItem} />
              ))}
            </div>
          )}
        </div>
    </main>
  )
}

export default Feed
