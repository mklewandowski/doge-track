import { useEffect, useRef, useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import dogeLogo from './assets/doge.png'
import waffles from './assets/waffles.png'
import waffles2 from './assets/waffles2.png'
import waffles3 from './assets/waffles3.png'

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
      <Toolbar sx={{padding: "0"}}>
        <img src={dogeLogo} width="25%" />
        <Box>
        <Typography variant={"h4"} component={"div"} m={1} sx={{ color: "white" }}>
          Doge Track
        </Typography>
        <Typography variant={"body2"} component={"div"} m={1} sx={{ color: "white" }}>
          monitor your financial pawtential
        </Typography>
        </Box>
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
          <CardContent sx={{ width: "100%", padding: "12px 8px 4px 8px"}}>
            <Box>
              <img src={waffles} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(1deg)"}} />
            </Box>
            <Typography variant={"body2"} component={"div"} sx={{margin: "10px 4px 0 4px"}}>
              Congratulations and merry Christmas, Josie! You are the proud(ish) owner of 500 Dogecoins!
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 4px 8px"}}>
            <Box>
              <img src={waffles2} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(-1deg)"}} />
            </Box>
            <Typography variant={"body2"} component={"div"} sx={{margin: "10px 4px 0 4px"}}>
              Dogecoin is a cryptocurrency like Bitcoin... only based on a dog meme and slightly dumber.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 4px 8px"}}>
            <Box>
              <img src={waffles3} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(1deg)"}} />
            </Box>
            <Typography variant={"body2"} component={"div"} sx={{margin: "10px 4px 0 4px"}}>
              Is it worth anything? Who knows? Crypto is a mystery to me! Look at your current Dogecoin value below.
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 4px 8px"}}>
            <Typography variant={"body1"} component={"div"} m={1}>YOUR Dogecoins are worth</Typography>
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
