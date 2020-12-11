import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'


const Video = (props) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box>
        <img
          style={{ width: '100%' }}
          alt={props.video.title}
          src={props.video.thumb}
        />
        <Box>
          <Typography
            style={{ fontWeight: 600 }}
            gutterBottom
            variant='body1'
            color='textPrimary'
          >
            {props.video.title}
          </Typography>
          <Typography
            display='block'
            variant='body2'
            color='textSecondary'
          >
            {props.video.channel}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {`${props.video.views} • ${props.video.date}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Video;