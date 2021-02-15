import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import Logo from "../../images/slide2.jpg";
import styled from 'styled-components';

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: contain;`

const useStyles = makeStyles((theme) => ({
    dialogss: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
    
  }));
const styles = (theme) => ({
  root: {
    margin: 0,
        padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
  },
 
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{color: 'white'}}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function Dialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div style={{background: 'rgba(0,0,0,0,0.5)'}}>
      <Button  color="primary" onClick={handleClickOpen}>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={Logo}
          title="Contemplative Reptile"
        />
      </Button>
      <Dialog className={classes.dialogss}  fullWidth  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" className={classes.dialogss} onClose={handleClose}>
          Gallery
        </DialogTitle>
              <DialogContent className={classes.dialogss} dividers>
                  <Img src={Logo} alt='gallery' />
        </DialogContent>
      </Dialog>
    </div>
  );
}