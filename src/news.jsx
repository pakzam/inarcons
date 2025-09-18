
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { useState, useEffect } from 'react';

const News = () => {  
  const theme = createTheme({
    palette: {
      amber: {
        main: '#1f2937',
        light: '#E9DB5D',
        dark: '#1f2937',
        contrastText: '#fff',
      },
    },
  });
  
  const [showSpinner, setShowSpinner] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      await axios.get(`https://content.inarcons.com/wp-json/wp/v2/posts?categories=3`)
      .then(response => {
        console.log('Posts from server:', response.data);
        setPosts(response.data)
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
  useEffect(() => {
    getPosts()
  },[])

  return (
    <>
    {posts.length> 0 ?
    <section className="bg-white px-4 xl:px-6 py-16 text-black">
      <div className="container mx-auto">    
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">News & Updates</h2>
        </div>
        <div className="flex justify-center items-start gap-6">
          {posts.map((item, id) => (
            <Card sx={{ maxWidth: 345 }} key={id}>
            {/*<CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://cdn.lynkid.my.id/products/23-06-2025/1750637558040_1919158.webp"
            />*/}
            <CardContent>              
              <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}
              className='text-2xl mb-4' />
              <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
            </CardContent>
            <CardActions>
              <a href={`/news/${item.slug}`} >
              <Button size="small">Read More</Button>
              </a>
            </CardActions>
          </Card>
          ))}
        </div>
      </div>
    </section>
    : <></>}
    </>
  )
}
export default News