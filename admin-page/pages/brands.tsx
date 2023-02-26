import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import CustomizedDialogs from '../components/addColor';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useRouter } from 'next/router';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function EditBrands ({brands, colors, sizes}:any){

    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const handleClick = async (e:string) => {
        console.log(e)
        if(e === 'brands' && brand === '') return;
        if(e === 'sizes' && size === '') return;
        try{
            await fetch(`http://localhost:3000/api/${e}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: e === 'brands' ? brand : size
                })
            })
            refreshData();
            setBrand('');
            setSize('');
            setOpen(true);
        } catch (error) {
            console.log(error)
        }
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return (
        <Container>
        
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                This is a success message!
            </Alert>
        </Snackbar>

        <Grid container spacing={7}>
            <Grid item>
            <Box sx={{ p: 2, border: '1px solid rgba(121, 121, 121, 0.426)', borderRadius:'5px', width: "270px"}}>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="add-brand">Add Brand</InputLabel>
            <OutlinedInput
                id="add-brand"
                type='text'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    edge="end"
                    onClick={() => handleClick('brands')}
                    >
                        <AddCircleIcon />
                    </IconButton>
                </InputAdornment>
                }
                label="Add Brand"
            />
            </FormControl>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 220,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                  }}
            >

                {!brands.error && brands.map((brand:any, i:number) => {
                return(
                <ListItem key={i}
                    secondaryAction={
                        <div>
                        <IconButton size='small'>
                          <EditIcon />
                        </IconButton>
                        <IconButton size='small'>
                          <HighlightOffIcon />
                        </IconButton>
                        </div>
                    }
                >
                    {brand.name} ({brand._count.products})
                </ListItem>
                )})}
            </List>
            </Box>
            </Grid>


            <Grid item>
            <Box sx={{ p: 2, border: '1px solid rgba(121, 121, 121, 0.426)', borderRadius:'5px', width: "270px"}}>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="add-size">Add Size</InputLabel>
            <OutlinedInput
                id="add-size"
                type='text'
                value={size}
                onChange={(e) => setSize(e.target.value)}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    edge="end"
                    onClick={() => handleClick('sizes')}
                    >
                        <AddCircleIcon />
                    </IconButton>
                </InputAdornment>
                }
                label="Add Size"
            />
            </FormControl>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 220,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                  }}
            >

                {!sizes.error && sizes.map((size:any, i:number) => {
                return(
                <ListItem key={i}
                    secondaryAction={
                        <div>
                        <IconButton size='small'>
                          <EditIcon />
                        </IconButton>
                        <IconButton size='small'>
                          <HighlightOffIcon />
                        </IconButton>
                        </div>
                    }
                >
                    {size.name} ({size._count.products})
                </ListItem>
                )})}
            </List>
            </Box>
            </Grid>


            <Grid item>
            <Box sx={{ p: 2, border: '1px solid rgba(121, 121, 121, 0.426)', borderRadius:'5px', width: "270px"}}>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <CustomizedDialogs refreshData={refreshData}/>
            </FormControl>

            <List
                sx={{
                    width: '100%',
                    maxWidth: 220,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                  }}
            >

                {!colors.error && colors?.map((color:any, i:number) => {
                return(
                <ListItem key={i}
                    secondaryAction={
                        <div>
                        <IconButton size='small'>
                          <EditIcon />
                        </IconButton>
                        <IconButton size='small'>
                          <HighlightOffIcon />
                        </IconButton>
                        </div>
                    }
                >
                    {color.name} ({color._count.products})
                </ListItem>
                )})}
            </List>
            </Box>
            </Grid>


        </Grid>
        </Container>
    )
}


export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/brands`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const brands = await res.json();

    const colorRes = await fetch(`http://localhost:3000/api/colors`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const colors = await colorRes.json();


    const siezesRes = await fetch(`http://localhost:3000/api/sizes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const sizes = await siezesRes.json();

    return {
        props: {
            brands,
            colors,
            sizes
        }
    }
}
