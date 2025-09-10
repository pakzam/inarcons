import { useParams } from 'react-router-dom';
import Footer from './footer';
import GetStarted from './getstarted';
import News from './news';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPost() {
  const [post, setPost] = useState([])
  let params = useParams();
  console.log("Brands params:", params);

  const [showSpinner, setShowSpinner] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const getPost = async () => {
    try {
      await axios.get(`https://content.inarcons.com/wp-json/wp/v2/posts?slug=${params.slug}`)
      .then(response => {
        console.log('Post from server:', response.data);
        setPost(response.data)
        setShowErr(false);
        setShowSpinner(false);
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
        setShowErr(true);
        setShowSpinner(false);
      });   
    } catch (error) {
      console.error(error)
    } finally {
    }
  }

  useEffect(()=>{
    getPost()
  }, [])

  return (
    <>
    {post.length > 0 &&
    <div className='container mx-auto bg-white rounded-lg max-w-6xl my-8 p-4'>
      <div dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}
      className='text-2xl mb-4 font-bold' />
      <div dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
      className='' />
    </div>
    }
    <GetStarted />
    <News />
    <Footer />
    </>
  );
}

export default NewsPost;
