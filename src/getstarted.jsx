
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const GetStarted = () => {  
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
    <section className="bg-amber-500 px-4 xl:px-6 py-16 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">Are You a Supplier or Manufacturer?</h2>
          <p className="text-2xl italic mb-6">Create your Inarcons profile today!</p>
          <p className="max-w-4xl">Join 500+ brands listing their products, projects, lists, brochures, updates, and more on Inarcons. Get seen and selected by Inarcons community of design specifiers </p>
        </div>
        <div className="flex justify-center">
          <a href="#getstarted" className="inline-block">            
            <ThemeProvider theme={theme}>
            <Button size="md" variant="contained" color="amber">Get Started</Button>
            </ThemeProvider>
          </a>
        </div>
      </div>
    </section>
  )
}
export default GetStarted