import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { SmText } from "../../constant/style";
import Img from "../../images/slide1.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function BlogPost() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={Img}
        title='Paella dish'
      />
      <CardContent>
              <SmText style={{ color: 'green' }}bold>july 25, 10:30am</SmText>
        <SmText>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </SmText>
      </CardContent>

      <CardHeader
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
    </Card>
  );
}
