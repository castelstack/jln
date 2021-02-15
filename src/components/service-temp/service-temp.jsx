import React from 'react';
import Agric from '../../images/Picture1.png'
import {
    Info,
    Head,
} from "../../constant/service";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
   
  },
});

export default function ServiceTemp({title, description, link}) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image={Agric}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Head style={{textTransform: 'uppercase'}}>
            {title}
          </Head>
          <Info >
            {description}
          </Info>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${link}`} >
          
          <Button size="small" color="primary">
          Learn More
        </Button>
       </Link>
         
      </CardActions>
    </Card>
  );
}
