import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import StandardImageList from './StandardImageList';
import AlignItemsList from './AlignItemsList';

const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{display:{sm:'block', xs:'none'}}}>
    <Box position={'fixed'} width={300}>
    <Typography variant="h6" fontWeight={300} color="initial" mb={2}>Online Friends  <ConnectWithoutContactIcon/></Typography>
    <AvatarGroup max={8}>
  <Avatar alt="Tonton" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/9.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/10.jpg" />
</AvatarGroup>

<Typography variant="h6"  mt={2} mb={2} fontWeight={300} color="initial" >Latest Photos</Typography>
<ImageList cols={3} rowHeight={100} gap={5}>
  <ImageListItem>
    <StandardImageList/>
  </ImageListItem>
</ImageList>
<Typography variant="h6"  mt={2} mb={2} fontWeight={300} color="initial" >Latest Conversation</Typography>
<AlignItemsList/>
    </Box>
    </Box>
  )
}

export default Rightbar