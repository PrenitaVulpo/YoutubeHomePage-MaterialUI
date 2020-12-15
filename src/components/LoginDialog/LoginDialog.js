import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core'
import React from 'react'
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


const LoginDialog = ({open, handleClose, isLogged, dispatch, setOpen}) => {
  const classes = useStyles()

  function handleLogIn(){
    dispatch(LoginAction.toggleLogin(true))
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={classes.dialog}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogIn}>Teste</Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default connect(state => ({
  isLogged: state.isLogged
}))(LoginDialog)