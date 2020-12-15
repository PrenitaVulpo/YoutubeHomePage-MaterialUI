import Video from '../Video/Video'
import { Box, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import videos from '../../assets/videos'
import {connect} from 'react-redux'



const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
}))

const VideosBox = ({isLogged}) => {
  const classes = useStyles
  return (
    <Box p={8} className={classes.box}>
      <Toolbar/>
      {isLogged ? <div>
        <Typography variant="h5" color="textPrimary"
        style={{fontWeight: 600}}>
          Recomendados
        </Typography>
        <Grid container spacing={4}>
          {videos.map(video =>{
            return<Video key={video.id} video={video} />
          })}
        </Grid>
        </div>
        : <Typography variant="h5" color="textPrimary"
          style={{fontWeight: 600}}>
            Você precisa fazer login para ver os vídeos
          </Typography>
        }
    </Box>
  )
}

export default connect(state => ({
  isLogged: state.isLogged
}))(VideosBox)