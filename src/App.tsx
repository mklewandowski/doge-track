import { useEffect, useRef, useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import RedeemIcon from '@mui/icons-material/Redeem';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import dogeLogo from './assets/doge.png'
import waffles from './assets/waffles.png'
import waffles2 from './assets/waffles2.png'
import waffles3 from './assets/waffles3.png'
import waffles4 from './assets/waffles4.png'

import './App.css'

const TOTAL_COINS = 500;

function App() {

  const [dogePrice, setDogePrice] = useState(0);
  const [dogeTotalValue, setDogeTotalValue] = useState(0);
  console.log(dogePrice)

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
        <img src={dogeLogo} width="25%" style={{maxWidth: "100px"}} />
        <Box>
        <Typography variant={"h4"} component={"div"} m={1} sx={{ color: "white", textAlign: "right", fontWeight: "800", fontFamily: "Prata" }}>
          Doge Track
        </Typography>
        <Typography variant={"body2"} component={"div"} m={1} sx={{ color: "white", textAlign: "right" }}>
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
          <CardContent sx={{ width: "100%", padding: "12px 8px 0px 8px"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-start", backgroundColor: "beige", padding: "8px"}}>
              <img src={waffles} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(1deg)", maxWidth: "200px"}} />
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", marginTop: "10px"}}>
              <RedeemIcon sx={{fontSize: "50px"}} />
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "0 6px 0 6px"}}>
                <Typography variant={"body1"} component={"div"} sx={{margin: "2px", textAlign: "left", fontWeight: "800", lineHeight: "1"}}>
                  Merry Christmas!
                </Typography>
                <Typography variant={"body2"} component={"div"} sx={{margin: "2px", textAlign: "left", lineHeight: "1"}}>
                  You are the proud(ish) owner of 500 Dogecoins!
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 0px 8px"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-start", backgroundColor: "beige", padding: "8px"}}>
              <img src={waffles2} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(1deg)", maxWidth: "200px"}} />
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", marginTop: "10px"}}>
              <PsychologyAltIcon sx={{fontSize: "50px"}} />
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "0 6px 0 6px"}}>
                <Typography variant={"body1"} component={"div"} sx={{margin: "2px", textAlign: "left", fontWeight: "800", lineHeight: "1"}}>
                  What is Dodgecoin?
                </Typography>
                <Typography variant={"body2"} component={"div"} sx={{margin: "2px", textAlign: "left", lineHeight: "1"}}>
                  A cryptocurrency. Like Bitcoin Only based on a dog meme and slightly dumber.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>


        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 0px 8px"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-start", backgroundColor: "beige", padding: "8px"}}>
              <img src={waffles3} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(1deg)", maxWidth: "200px"}} />
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", marginTop: "10px"}}>
              <LocalAtmIcon sx={{fontSize: "50px"}} />
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "0 6px 0 6px"}}>
                <Typography variant={"body1"} component={"div"} sx={{margin: "2px", textAlign: "left", fontWeight: "800", lineHeight: "1"}}>
                  What is it worth?
                </Typography>
                <Typography variant={"body2"} component={"div"} sx={{margin: "2px", textAlign: "left", lineHeight: "1"}}>
                  No idea! I'm a dog! But you can see your current Dogecoin value below.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 4px 8px"}}>
            <Typography variant={"body1"} component={"div"} m={1}>YOUR Dogecoins are worth</Typography>
            <Typography variant={"h3"} component={"h3"} m={1} sx={{fontWeight: "800", backgroundColor: "yellowgreen", padding: "20px 0 20px 0", borderRadius: "8px"}}>
              ${dogeTotalValue.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>

        <div ref={dogeRef} className="cryptohopper-web-widget" data-id="3" data-fullwidth="1" data-coins="dogecoin"></div>

        <Card elevation={2} sx={{ outline: "1px solid black", backgroundColor: "white", color: "black", width: "100%" }}>
          <CardContent sx={{ width: "100%", padding: "12px 8px 0px 8px"}}>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-start", backgroundColor: "beige", padding: "8px"}}>
              <img src={waffles4} width="50%" style={{border: "3px solid black", borderRadius: "6px", transform: "rotate(1deg)", maxWidth: "200px"}} />
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "flex-end", marginTop: "10px"}}>
              <CurrencyExchangeIcon sx={{fontSize: "50px"}} />
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "0 6px 0 6px"}}>
                <Typography variant={"body1"} component={"div"} sx={{margin: "2px", textAlign: "left", fontWeight: "800", lineHeight: "1"}}>
                  How do I cash it in?
                </Typography>
                <Typography variant={"body2"} component={"div"} sx={{margin: "2px", textAlign: "left", lineHeight: "1"}}>
                  To get real money, you need to talk to the Big Cookie. I don't even have a bank account.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

      </Stack>
      </Container>
    </div>
  )
}

export default App
