import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GeneCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300px"
          image="/images/gene.jpg"
          alt="profile photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gene Kiel Paderes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Front-End Developer
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}