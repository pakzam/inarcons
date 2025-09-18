
import { createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useState, useEffect } from 'react';
import promo from './assets/img/opreg.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css'

const Banner = () => {  
  const [showSpinner, setShowSpinner] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [banners, setBanners] = useState([]);

  function getCalculatedRoutes(routes) {
    return Promise.all(
      routes.map(async (route, id) => {
        const distance = await axios.get(`https://content.inarcons.com/wp-json/wp/v2/media/${route.featured_media}`)
            .then(response => {
              return response.data
            })
            .catch(error => {
              console.error('There was an error making the request:', error);
              setShowErr(true);
              setShowSpinner(false);
            }); 
        return distance;
      })
    );
  }

  const getBanners = async () => {
    try {
      await axios.get(`https://content.inarcons.com/wp-json/wp/v2/posts?categories=4`)
      .then(async (response) => {
        //console.log('banners from server:', response.data);
        if (response.data.length>0) {
          setBanners(await getCalculatedRoutes(response.data))
        }
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
    getBanners()
  },[])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(()=>{
    if (banners.length >0) {
    console.log('banners state', banners)
    }
  }, [banners])

  return (
    <>
    {banners.length> 0 &&
      <div className='container mx-auto max-w-4xl mt-10 mb-6'>
      <Carousel responsive={responsive}
       showDots
       arrows={false}
      >
        {banners.map((item, id)=>{
          return (
            <img key={id} alt="Inarcons Logo" className="object-contain w-full h-96 object-center rounded-lg"
            src={item.media_details.sizes.large.source_url}
            />
          )
        })}
      </Carousel>
      </div>
    }
    </>
  )
}
export default Banner