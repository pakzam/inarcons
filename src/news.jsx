
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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

  return (
    <section className="bg-white px-4 xl:px-6 py-16 text-black">
      <div className="container mx-auto">    
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">News & Updates</h2>
        </div>
        <div className="flex justify-center items-start gap-6">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://cdn.lynkid.my.id/products/23-06-2025/1750637558040_1919158.webp"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Talkshow Road To IndoBuildTech Expo 2025 Bedah Konsep Desain Booth dan Inovasi Brand Pemimpin Pasar
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Menjelang penyelenggaraan IndoBuildTech Expo Part 1 – 2025 – edisi terbaru 
                pameran terbesar building material, arsitektur dan interior di 
              </Typography>
            </CardContent>
            <CardActions>
              <a href='/news/ibt' >
              <Button size="small">Read More</Button>
              </a>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reminder untuk Rekan-rekan Media Partner IndoBuildTech Surabaya 2025
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Dengan hormat, kami ingin mengingatkan kembali terkait jadwal unggahan 
                konten IndoBuildTech Surabaya di media sosial: ...
              </Typography>
            </CardContent>
            <CardActions>
              <a href='/news/reminder' >
              <Button size="small">Read More</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    </section>
  )
}
export default News