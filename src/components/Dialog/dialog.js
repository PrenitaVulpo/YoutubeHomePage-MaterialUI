function SimpleDialog(props) {
  const classes  = useStyles()
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleLogin = () => {
    console.log("teste")
    props.dispatch(login.toggleLogin(true))
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
          <Button onClick={()=>handleLogin} variant="contained">
            Logar
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
}