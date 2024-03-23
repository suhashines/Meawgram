import { AppBar, InputBase, Toolbar, Typography, styled,Badge, Avatar,MenuItem,Menu, Button,List,ListItem } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujB6_pzt4HdlsZ9nLGG1hjs0u9SHYu5JWCQ&usqp=CAU'

const MyToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
//toolbar gives a nice padding
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icon = styled("Box")(({ theme }) => ({
  display:"flex",
  gap:'20px',
  alignItems:"center"
}));

const Navbar = () => {

  const [open,setOpen]=useState(false);

  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Meawgram
        </Typography>
        <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search bgcolor={"background.default"} color={"text.primary"}>
          <InputBase placeholder="search" bgcolor={"background.default"} color={"text.primary"} />
        </Search>
        <Icon>
          <Badge sx={{display:{xs:'none',sm:'block'}}} badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge sx={{display:{xs:'none',sm:'block'}}} badgeContent={4} color="error">
            <NotificationsNoneIcon color='white'/>
          </Badge>
          <Button onClick={()=>{setOpen(true)}}>
            <Avatar sx={{height:"35px" , width:"35px"}} src={img}/>
          </Button>
          
        </Icon>
      </MyToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
