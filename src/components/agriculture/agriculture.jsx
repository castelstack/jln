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

export default function Agriculture() {
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
          <Head >
            AGRICULTURE
          </Head>
          <Info >
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Info>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to='/agriculture' >
          
        <Button size="small" color="primary">
          Learn More
        </Button>
       </Link>
      </CardActions>
    </Card>
  );
}
// const Agriculture = () => {
//     return (
//         <Container>
            
//             <Card>
//                 <Img>

//                 <Image src={Agric} alt='' />
//                 </Img>
//                 <Details>
//                     <Head>AGRICTURE</Head>
//             <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odit dignissimos quo veniam dolorum quod magnam quidem sed facilis ipsam maxime error iure magni, molestiae blanditiis? Laudantium accusantium asperiores nisi.</Info>
//                 </Details>
//             </Card>
//         </Container>
//     );
// };

// export default Agriculture;