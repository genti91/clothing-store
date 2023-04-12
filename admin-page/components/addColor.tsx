import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SketchPicker } from 'react-color';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function AlertDialog({refreshData}) {

  const [open, setOpen] = React.useState(false);
  const [background, setBackground] = React.useState('#fff');
  function setColor(color: any) {
    setBackground(color.hex);
  }
  const [name, setName] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (e:any) => {
    if (e.target.name === 'add') {
      console.log("adding color")
      console.log(background)
        try{
            let newColor = await fetch('http://localhost:3001/api/colors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    hex: background
                })
            })
            console.log(newColor)
            refreshData();
            // setBrand('');
            // setOpen(true);
        } catch (error) {
          console.log(error)
        }
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a new color
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Add a new color
        </DialogTitle>
        <DialogContent>
        
        <Stack spacing={1}>
            <TextField id="filled-basic" label="Color name:" variant="filled" onChange={(e) => {
              setName(e.target.value)
            }}/>
            <SketchPicker
                color={ background }
                onChangeComplete={ setColor }
            />
        </Stack>

        </DialogContent>
        <DialogActions>
          <Button name="close" onClick={handleClose}>Cancel</Button>
          <Button name="add" onClick={handleClose} autoFocus>
            Add color
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
