import React, { useState } from "react";
import { Button, Container, ThemeProvider, createTheme, styled } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box,Stack} from "@mui/system";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

// const MyButton = styled(Button)({
//    background:'black' ,
//    color: 'white',
//    "&:hover":{
//      background:'blue'
//    }
// })   // for creating custom component

//Box acts like a div

function App() {

  const [mode,setMode]=useState('light')

 const darkTheme = createTheme({
  palette:{
    mode:mode
  }
 })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
