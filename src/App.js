import './App.css';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Header from './header';
import Footer from './footer';
import GetStarted from './getstarted';
import Typography from '@mui/material/Typography';
function App() {
  const [message, setMessage] = useState()
  const [severity, setseverity] = useState()
  const [open, setOpen] = useState(false);
  const [desiredfeature, setDesiredfeature] = useState([])
  const [productCategory, setProductCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [openDialog, setOpenDialog] = useState(false);
 
  const handleOpen = () => setOpenDialog(!openDialog);

  const handleClose = ( event, reason) => {
    if (reason === 'clickaway') {return;}
    setOpen(false);
  };

  useEffect(()=>{
    console.log('productCategory', productCategory)
  }, [productCategory])

  useEffect(()=>{
    console.log('subCategory', subCategory)
  }, [subCategory])

  useEffect(()=>{
    console.log('desired', desiredfeature)
  }, [desiredfeature])

  return (
    <>
    <Header/>
    <div className=" min-h-screen flex items-start justify-center">
      <div className="bg-white shadow-lg rounded-lg mt-10 mb-10 p-8 w-full  max-w-6xl">
        <Typography variant="h4" className='mb-8' gutterBottom>Talkshow Road To IndoBuildTech Expo 2025 Bedah Konsep Desain Booth dan Inovasi Brand Pemimpin Pasar
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Jakarta, 20 Juni 2025
        </Typography>
        <picture className='mb-8' style={{marginBottom: '2rem'  }}>
          <source media="(min-width:650px)" srcset="https://cdn.lynkid.my.id/products/23-06-2025/1750637558040_1919158.webp" />
          <source media="(min-width:465px)" srcset="https://cdn.lynkid.my.id/products/23-06-2025/1750637558040_1919158.webp" />
          <img src="https://cdn.lynkid.my.id/products/23-06-2025/1750637558040_1919158.webp" alt="Flowers" className='w-full h-auto' />
        </picture>
        <Typography variant="body2" gutterBottom className='mt-10' style={{marginTop: '1.5rem'}}>
       Menjelang penyelenggaraan IndoBuildTech Expo Part 1 – 2025 – edisi terbaru pameran
terbesar building material, arsitektur dan interior di Indonesia tanggal 2-6 Juli 2025 di Indonesia
Convention Exhibition (ICE) BSD-City Tangerang digelar kegiatan Talkshow sebagai Exclusive
Preview IndoBuildTech 2025 bersama TOTO, TACO dan Astral sebagai 3 brand pemimpin pasar,
masing-masing di sektor produk sanitari, produk interior dan pintu-jendela modern.
</Typography>
<Typography variant="body2" gutterBottom>
Mengangkat tema yang mengeksplorasi konsep desain dan inovasi yang diterapkan dalam
menciptakan booth yang atraktif dan informative, talkshow yang dipandu oleh moderator
Imelda Akmal yang juga arsitek direktur Archinesia menghadirkan narasumber Fidelia Lorensia
dari The Cabinet Minister untuk TOTO, Dannel Reskala Sutanto dari Sonny Sutanto Architects
untuk TACO dan Anya Putri dari Endramukti Design untuk Astral Aluminium Systems, serta
Sakanti Sasri - VP Exhibition Development Debindo.
        </Typography>  
        <Typography variant="body2" gutterBottom>Sebagai Home of World Class Brands, maka IndoBuildTech menjadi platform interaksi langsung
yang efektif antara para Exhibitor dan Visitor, sehingga brand kelas dunia seperti TOTO, TACO
dan Astral merancang design stand di IndoBuildTech Expo Part 1 – 2025 berdasarkan konsep
representasi brand, posisi dan inovasi produk terdepan dan terkini yang menginspirasi trend
produk ke depan.
        </Typography>  
        <Typography variant="body2" gutterBottom>
          Dalam sambutan pengantarnya, Imelda Akmal menyampaikan bahwa talkshow exclusive
preview IndoBuildTech 2025 dimaksudkan untuk mendapatkan pemahaman mendalam
mengenai filosofi desain dan pemilihan material yang diterapkan dalam konsep booth,
membedah strategi komunikasi dan interaksi exhibitor dengan pengunjung serta
mengindentifikasi tren terkini dalam desain booth pameran building material. Selain itu
diharapkan bahwa talkshow ini memberikan inspirasi mengenai penggunaan material inovatif
dan desain ruang pameran yang efektif.
        </Typography>
        <Typography variant="body2" gutterBottom>
         Selaku Interior Designer dari perwakilan TOTO Fidelia Lorensia menyampaikan preview tentang
konsep design booth TOTO di Hall 8 nomer booth 8-A-2 yang siap menampilkan inovasi terbaru
dan koleksi ikonik ragam produk sanitari.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Dannel Reskala Sutanto dari Sonny Sutanto Architects memperkenalkan konsep desain booth
TACO di Hall 7 nomer 7-A-1. Booth ini akan menampilkan material terbaru dari TACO, seperti
koleksi HPL terbaru dan beragam produk lainnya. Melalui pendekatan arsitektur yang presisi,

desain ini mengajak pengunjung tidak hanya melihat, tapi juga merasakan langsung elemen-
elemen yang dihadirkan.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Berbagi informasi, ide dan insights tentang konsep design booth untuk Astral di Hall 7 booth
nomer 7-R-1, Anya Putri menyampaikan bahwa desain interior dan eksterior atau façade akan
tampil maksimal secara fungsional dan artistik guna menawarkan solusi premium kebutuhan
produk pintu dan jendela berbasis aluminium.
        </Typography>
        <Typography variant="body2" gutterBottom>
        Sementara itu narasumber Sakanti Sasri dari Debindo memaparkan deskripsi dan detil tentang
pameran IndoBuildTech sebagai pameran building material, arsitektur dan interior terbesar di
Indonesia dari perspektif penyelenggaran pameran, utamanya terkait ragam produk category
yang ditampilkan, berbagai jadwal acara Business Program dan Seminar, serta etika
berpameran dalam rangka mengoptimalkan aspek kemanfaatan dan kenyamanan interaksi
selama lima hari pameran. Disampaikannya pula bahwa acara talkshow ini bertujuan untuk
menggali insight langsung dari perwakilan brand material peserta pameran mengenai proses
kreatif, tantangan dan keberhasilan di balik konsep booth mereka.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Selaku moderator Imelda Akmal mendorong diskusi mengenai peran booth pameran sebagai
representasi identitas merek dan inovasi produk, dan para narasumber memaparkan secara
konseptual dan visual yang realisasinya hanya dapat disaksikan dan dimanfaatkan dengan

kehadiran langsung onsite di IndoBuildTech Expo Part 1 -2025 tanggal 2-6 Juli 2025 di ICE BSD-
City Tangerang.
        </Typography>
        <Typography variant="body2" gutterBottom>
          IndoBuildTech Expo merupakan platform penting bagi brand untuk memperkenalkan
produk terbaru, menjalin relasi dan memperkuat citra merek di hadapan para profesional
industri, termasuk arsitek, kontraktor, pengembang, pemilik bangunan dan media. Konsep
booth yang inovatif dan strategis memainkan peran krusial dalam menarik perhatian
pengunjung dan menyampaikan nilai-nilai merek secara efektif.
        </Typography>
      </div>
    </div>
    <GetStarted />
    <Footer />
    <Dialog
        open={openDialog}
        onClose={handleOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Success!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your data has been recorded and you will be notified when this project launches.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    <Snackbar open={open} autoHideDuration={severity === 'error'? 20000 : 6000} onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal:'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%', bgcolor: '#388e3c', color : "white" }}
        color={severity === 'error' ? 'red' : "green"}
      >
        {message}
      </Alert>
    </Snackbar>
    </>
  );
}

export default App;
