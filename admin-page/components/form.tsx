import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ColorSelect from './colorSelect';
import SizeSelect from './sizeSelect';

interface Product {
  name: string;
  price: number | undefined;
  description: string;
  category: string[];
  color: string[];
  size: string[];
  image: string[];
}

interface Error {
  name: string;
  price: string;
  description: string;
  category: string;
  color: string;
  size: string;
  image: string;
}

export default function Form({brands, colors, sizes}) {

  const validate = (values: Product) => {
    if (!values.name) error.name = 'Required';
    if (!values.price) error.price = 'Required';
    if (!values.description) error.description = 'Required';
    if (!values.category) error.category = 'Required';
    if (!values.color) error.color = 'Required';
    if (!values.size) error.size = 'Required';
    if (!values.image) error.image = 'Required';
    setError(error);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [product, setProduct] = React.useState<Product>({
    name: '',
    price: undefined,
    description: '',
    category: [],
    color: [],
    size: [],
    image: []
  })

  const [error, setError] = React.useState<Error>({
    name: '', price: '', description: '', category: '',
    color: '', size: '', image: ''})

  const [fileInput, setFileInput] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState('');
  const [previewSource, setPreviewSource]:any = React.useState([]);
  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    previewFile(file);
  }
  const previewFile = (file:any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource([...previewSource, {src: reader.result}]);
    }
  }

  const validateName = (value: any) => {
    if (!value) {
      return 'Name is required';
    }
    return null;
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          CREATE A NEW PRODUCT
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="productName"
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
                value={product.name}
                onChange={(e) => setProduct({...product, name: e.target.value})}
                error={true}
                helperText={'Name is required'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                name="description"
                label="Description"
                type="description"
                id="description"
                autoComplete="description"
                rows={4}
                value={product.description}
                onChange={(e) => setProduct({...product, description: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={!brands.error && brands.map((e:any) => ({label: e.name}))}
              renderInput={(params) => <TextField {...params} label="Brand" />}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ColorSelect colors={colors}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SizeSelect sizes={sizes}/>
            </Grid>
            <Grid item xs={12} sm={7}>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Price"
                value={product.price}
                onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
              />
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Button variant="outlined" component="label" fullWidth sx={{height:"100%"}}>
                Upload Picture
                <input 
                id='fileInput'
                accept="image/*"
                type="file"
                onChange={handleImageChange}
                value={fileInput}
                hidden/>
              </Button>
            </Grid>
            <Grid item xs={12}>
              {previewSource && previewSource.map((e:any) => (
                <img src={e.src} alt="chosen" style={{ height: '100px', margin: '3px'}} />
              ))}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            post product
          </Button>
        </Box>

      </Box>
    </Container>
  );
}


