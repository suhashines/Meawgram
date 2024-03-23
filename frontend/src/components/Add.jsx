import { Avatar, Box, Button, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState} from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujB6_pzt4HdlsZ9nLGG1hjs0u9SHYu5JWCQ&usqp=CAU'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:4,
    height:'300px'
  };


  const UserBox = styled('Box')({
    display:'flex',
    alignItems:'center',
    gap :'10px' ,
    marginBottom:'20px'
  })
  


const Add = () => {

   const [open,setOpen]=useState(false)

  return (
    <>
   <Tooltip title="Post" sx={{position:'fixed', bottom:20 , left:{xs:'calc(50% - 25px)',md:30}}}>
    <IconButton onClick={()=>setOpen(true)}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
    </IconButton>
  </Tooltip>
  <Modal   sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
          open={open}
          onClose={()=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box bgcolor={"background.default"} color={"text.primary"} sx={style}>
            <Typography color='grey' textAlign={'center'} id="modal-modal-title" variant="h6" component="h2">
             Create Post
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            </Typography>
            <UserBox>
                <Avatar src={img}/>
                <Typography variant='h6'>Peach</Typography>
            </UserBox>
            <TextField sx={{width:'100%'}}
          id="standard-multiline-static"
          label="What's on your mind?"
          multiline
          rows={4}
          variant="standard"
        />
        <Stack mb='5px' direction='row' gap={2.5} mt='9px' sx={{alignItems:'center'}}>
        <EmojiEmotionsIcon sx={{color:'orange'}} />
        <ImageIcon color='primary'/>
        <VideoCallIcon color='primary' fontSize='large' />
        <PersonAddIcon color='secondary'/>
        </Stack>
        <Button fullWidth variant='contained' >Post</Button>
          </Box>
        </Modal>
  </>
  )
}

export default Add