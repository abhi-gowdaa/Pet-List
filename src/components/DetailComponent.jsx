 
import { Card, Typography } from '@mui/material';

function DetailComponent(props) {
    const pet=props.pet;
    if(!pet){
        return<p>result will be displayed here</p>
    }
  return (
    <Card sx={{ width: "60%", padding: "16px", margin:"auto",marginTop:"50px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: "300px", height: "300px", marginBottom: '16px' }}>
      <img 
        src={pet.images[0]} 
        alt={pet.name}
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover" 
        }} 
      />
    </div>
    <Typography variant="h4" component="div" sx={{ marginBottom: '16px' }}>
      {pet.name}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '16px' }}>
      <strong>Breed:</strong> {pet.breed}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '16px' }}>
      <strong>Location:</strong> {pet.city}, {pet.state}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      <strong>Description:</strong> {pet.description}
    </Typography>
  </Card>
  )
}

export default DetailComponent