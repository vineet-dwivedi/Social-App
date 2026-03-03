import { useCallback, useContext, useEffect } from "react";
import { PostContext } from "../post.context.jsx";
import { getFeed,createPost } from "../services/post.api.js";

export function usePost(){
    const context = useContext(PostContext);

    const{post,
        feed,
        setFeed,
        loading,
        setLoading,} = context;

    const handleGetFeed = useCallback(async ()=>{
        setLoading(true);
        try{
            const data = await getFeed()
            setFeed(data.posts ?? [])
            return data;
        }catch(err){
            if(err?.response?.status === 401){
                setFeed([])
                return null;
            }
            throw err;
        }finally{
            setLoading(false)
        }
    }, [setFeed, setLoading])

    const handleCreatePost = async(imageFile,caption)=>{
        setLoading(true)
        const data = await createPost(imageFile,caption);
        setFeed([data.post,...feed])
        setLoading(false)
    }

    useEffect(()=>{
        handleGetFeed()
    },[])

    return {loading,feed,post,handleGetFeed, handleCreatePost}
}
