import Video from '../Video/Video'
import { Box, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import videos from '../../assets/videos'



const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}))

const VideosBox = () => {
  const classes = useStyles
  return (
    <Box p={8} className={classes.box}>
      <Toolbar/>
      <Typography variant="h5" color="textPrimary"
      style={{fontWeight: 600}}>
        Recomendados
      </Typography>
      <Grid container spacing={4}>
        {videos.map(video =>{
          return<Video key={video.id} video={video} />
        })}
      </Grid>
    </Box>
  )
}

export default VideosBox