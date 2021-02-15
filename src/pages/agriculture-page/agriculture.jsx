import { Divider } from "@material-ui/core";
import React from "react";
import Box from "../../components/box/box";
import { PagesBox } from "../../components/box/pages-box";
import Img from "../../images/slide2.jpg";
const AgriculturePage = () => {
  return (
    <div>
      <Box title='Agriculture' currentPage='Agriculture' />
      <PagesBox
        title='LIVESTOCK'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
        alt='construction'
        image={Img}
        offers={["FISH FARM-", "POULTRY-", "PIG FARM-", "SNAIL-", "MUSHROOM"]}
      />
      <Divider light />
    </div>
  );
};

export default AgriculturePage;
