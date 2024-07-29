import { Box, Typography } from "@mui/material"
import pet from "../assets/pet.jpg"
 
function Home() {
  return (
    <Box sx={{backgroundColor:"blanchedalmond",margin:"auto",padding:"100px"}}>
    <Typography variant="h2" component="h1" style={{ fontSize: '3rem', marginBottom: '16px',color:"black" }}>
    Pet Store 
</Typography>
 
     <img src={pet}/>

    </Box>
  )
}

export default Home