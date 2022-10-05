import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function UserCard({name,email,website,id}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2017/06/09/23/22/avatar-2388584_960_720.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
{website}
        </Typography>
      </CardContent>
      <CardActions>
       
       <Link to={`/userdetails/${id}`}><Button size="small">Learn More</Button></Link> 
      </CardActions>
    </Card>
  );
}