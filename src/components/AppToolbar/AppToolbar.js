import { AppBar, Button, IconButton, makeStyles, Switch, Toolbar, Dialog, 
  DialogTitle, Avatar, ListItemAvatar, ListItemText, ListItem, List, TextField, DialogContent } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import * as login from '../../store/actions/login'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon  from '@material-ui/icons/AccountCircle'
import AppsIcon  from '@material-ui/icons/Apps'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import VideoCallIcon  from '@material-ui/icons/VideoCall'
import AddIcon  from '@material-ui/icons/Add'
import PersonIcon  from '@material-ui/icons/Person'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  dialog: {
    display: "flex",    
    justifyContent: "center",
    flexDirection: "column",
    alignItems: 'center'
  },
  dialogContent: {
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: "column"
  },
  textBox:{
    marginBottom: theme.spacing(4)
  },
  menuButton: {
    paddigRight: theme.spacing(5),
    paddingLeft: theme.spacing(6)
  },
  logo: {
    height: 25,
    paddingLeft: theme.spacing(3)
  },
  icons:{
    paddingRight:theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  },
}))

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const classes  = useStyles()
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleLogin = () => {
    console.log("teste")
    props.dispacho(login.toggleLogin(true))
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div style={{
        padding: '5rem'
      }} className={classes.dialog}>
        <DialogTitle id="simple-dialog-title">Login</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField label="usuário" variant="outlined" className={classes.textBox}/>
          <TextField label="senha" variant="outlined" type="password"className={classes.textBox}/>
          <Button onClick={handleLogin} variant="contained">
            Logar
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
}

const AppToolbar = ({darkMode, setDarkMode, theme, dispatch}) =>{
  const classes  = useStyles()
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return(
    <div className={classes.root}>
      <AppBar color="inrerit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={theme.palette.type === "dark" ? "images/branco.png" 
            : "images/preto.png"} alt="logo" className={classes.logo}/>
          <div className={classes.grow}/>
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVertIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="inherit"
            onClick={handleClickOpen}>
            Fazer Login
          </Button>
        </Toolbar>
        <SimpleDialog selectedValue={selectedValue} open={open} 
        onClose={handleClose} dispacho={dispatch}/>
      </AppBar>
    </div>
  )
}

export default connect(state => ({isLogged: state.isLogged}))(AppToolbar)