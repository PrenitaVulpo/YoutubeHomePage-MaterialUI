import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import {connect} from 'react-redux'
import * as LoginAction from '../../store/actions/login'

const useStyles = makeStyles((theme) => ({
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
}))


const LoginDialog = ({open, handleClose, username, dispatch, setOpen}) => {
  const classes = useStyles()
  const [user, setUser] = useState('')

  function handleLogIn(){
    dispatch(LoginAction.toggleLogin(user))
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={classes.dialog}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField label="Usuário" variant="filled" 
            onChange={ e => setUser(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogIn}>Logar</Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default connect(state => ({
  username: state.username
}))(LoginDialog)