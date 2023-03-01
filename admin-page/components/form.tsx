import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import ColorSelect from './colorSelect';
import SizeSelect from './sizeSelect';
import axios from 'axios';
import FormHelperText from '@mui/material/FormHelperText';

interface Product {
  name: string;
  price: number | undefined;
  description: string;
  brand: string | undefined;
  category: string[];
  color: string[];
  size: string[];
  image: string[];
}

interface Error {
  name: string;
  price: string;
  description: string;
  brand: string;
  category: string;
  color: string;
  size: string;
  image: string;
}

export default function Form({brands, colors, sizes, edit}:any) {

  console.log(edit)

  const clearProduct = () => {
    return {
      name: '',
      price: undefined,
      description: '',
      brand: '',
      category: [],
      color: [],
      size: [],
      image: []
    }
  }
  const [product, setProduct] = useState<Product>(clearProduct())
  const [error, setError] = useState<Error>({
    name: '', price: '', description: '', brand: '',
    category: '', color: '', size: '', image: ''})
  const [fileInput, setFileInput] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource]:any = useState([]);
  const [cloudinaryData, setCloudinaryData]:any = useState([]);
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
  if (edit) {
    setProduct({
      name: edit.name,
      price: edit.price,
      description: edit.description,
      brand: edit.brand.name,
      category: [],
      color: edit.colors.map((e:any) => e.name),
      size: edit.sizes.map((e:any) => e.name),
      image: []
    })
    setPreviewSource(edit.pictures.map((e:any) => ({src: e.url})))
  }
  }, [])

  const validate = (values: Product) => {
    let required:any = {};
    if (!values.name) required.name = 'Name is required';
    else error.name = '';
    if (!values.price) required.price = 'Price is required';
    else error.price = '';
    if (!values.description) required.description = 'Description is required';
    else error.description = '';
    if (!values.brand) required.brand = 'Brand is required';
    else error.brand = '';
    // if (!values.category) required.category = 'Required';
    if (values.color.length === 0) required.color = 'Color is required';
    else error.color = '';
    if (values.size.length === 0) required.size = 'Size is required';
    else error.size = '';
    if (cloudinaryData.length === 0) required.image = 'Image is required';
    else error.image = '';
    setError({...error, ...required});
    console.log(Object.keys(required).length)
    return Object.keys(required).length > 0 ? true : false;
  };

  const handleEdit = () => {
    
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (validate(product)) return;
    if (edit) {
      handleEdit();
      return;
    }
    try{
      setLoading(true)
      let images = await uploadToCloudinary();
      let colorsIds:number[] = product.color.map((name:string) => colors.find((color:any) => color.name === name).id)
      let sizesIds:number[] = product.size.map((name:string) => sizes.find((size:any) => size.name === name).id)
      await axios.post('http://localhost:3000/api/product', {...product, image: images, color: colorsIds, size: sizesIds})
      setProduct({...clearProduct(), brand:undefined, price:0})
      setPreviewSource([])
      setCloudinaryData([])
      setLoading(false)
      alert('Product added successfully')
    }catch(err){
     console.log(err)
     alert('Something went wrong please try again')
    }
  };
  
  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    saveCloudinaryData(file);
    previewFile(file);
  }

  const saveCloudinaryData = (file:any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ckofc6ef');
    setCloudinaryData([...cloudinaryData, formData])
    
  }

  const uploadToCloudinary = async () => {
    try {
      const uploadPromises = cloudinaryData.map((e:any) =>
        axios.post('https://api.cloudinary.com/v1_1/dhtczuw9v/image/upload', e)
      );
      const uploadResponses = await Promise.all(uploadPromises);
      const imageUrls = uploadResponses.map(res => res.data.url);
      return imageUrls;
    } catch (err) {
      console.error(err);
    }
  }

  const previewFile = (file:any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource([...previewSource, {src: reader.result}]);
    }
  }

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

        { loading && (<Typography component="h1" variant="h5">
        LOADING...
        </Typography>)}

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
                error={error.name ? true : false}
                helperText={error.name}
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
                error={error.description ? true : false}
                helperText={error.description}
              />
            </Grid>
            <Grid item xs={12}>
            <Autocomplete
              isOptionEqualToValue={(option:any, value) => option.value === value.value}
              disablePortal
              id="combo-box-demo"
              options={!brands.error && brands.map((e:any) => ({label: e.name, value: e.id}))}
              renderInput={(params) => <TextField {...params} label="Brand" error={error.brand ? true : false} helperText={error.brand}/>}
              onChange={(_, newValue:any) => {
                if (newValue === null) {
                  setProduct({...product, brand: ""});
                } else {
                  setProduct({...product, brand: newValue.value});
                }
              }}
              defaultValue={edit ? {label: edit.brand.name, value: edit.brand.id}: null}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ColorSelect colors={colors} setProduct={setProduct} product={product} error={error}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SizeSelect sizes={sizes} setProduct={setProduct} product={product} error={error}/>
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
                error={error.price ? true : false}
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
          <FormHelperText error>{error.image}</FormHelperText>
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
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


