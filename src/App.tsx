import { useEffect, useRef, useState } from 'react'

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

const TOTAL_COINS = 500;

function App() {

  const [dogePrice, setDogePrice] = useState(0);
  const [dogeTotalValue, setDogeTotalValue] = useState(0);

  const dogeRef = useRef(null);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      const collection = document.getElementsByClassName("mcw-price");
      for (const item of collection) {
        const price = item.getAttributeNode("data-price")?.value;
        if (price) {
          setDogePrice(parseFloat(price));
          setDogeTotalValue(parseFloat(price) * TOTAL_COINS);
        } else {
          // todo: handle case where we fail
        }
      }
    }, 1000); // 1000 milliseconds = 1 second
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [dogeRef]);

  return (
    <div>
      <Toolbar>
        <img src={dogeLogo} width="50%" />
        <Typography variant={"h3"} component={"div"} m={1} sx={{ color: "white" }}>
          Doge Track
        </Typography>
      </Toolbar>
      <Container
        sx={{
          width: "100%",
          boxSizing: "border-box",
          "&.MuiContainer-root": { maxWidth: "100%" },
        }}
      >
      <Stack spacing={{ xs: 1, sm: 2, md: 4 }} margin={1} sx={{ width: "auto" }}>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%" }}>
            <Typography variant={"body1"} component={"div"} m={1}>
              {dogePrice}
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%" }}>
            <Typography variant={"body1"} component={"div"} m={1}>YOUR current dogecoin value</Typography>
            <Typography variant={"h3"} component={"h3"} m={1}>
              ${dogeTotalValue.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
        <div ref={dogeRef} className="cryptohopper-web-widget" data-id="3" data-fullwidth="1" data-coins="dogecoin"></div>
      </Stack>
      </Container>
    </div>
  )
}

export default App
