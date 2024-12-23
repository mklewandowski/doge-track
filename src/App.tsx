// import { useState } from 'react'

import {
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import dogeLogo from './assets/doge.png'

import './App.css'

function App() {

  return (
    <div>
      <Toolbar>
        <img src={dogeLogo} />
        <Typography variant={"h3"} component={"div"} m={1}>
          Doge Track
        </Typography>
      </Toolbar>
      <Container>
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }} margin={5}>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "#424242", color: "white" }}>
          <CardContent>
            <Typography variant={"body1"} component={"div"} m={1}>
              Doge Track
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "#424242", color: "white" }}>
          <CardContent>
            <Typography variant={"body1"} component={"div"} m={1}>
              Doge Track
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "#424242", color: "white" }}>
          <CardContent>
            <Typography variant={"body1"} component={"div"} m={1}>
              Doge Track
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      </Container>
    </div>
  )
}

export default App
