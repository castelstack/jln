import { Divider } from "@material-ui/core";
import React from "react";
import Box from "../../components/box/box";
import { PagesBox, RevPagesBox } from "../../components/box/pages-box";
import Img from "../../images/slide2.jpg";
const ConstructionPage = () => {
  return (
    <div>
      <Box title='Construction' currentPage='Construction' />
      <PagesBox
        title='VERTICAL CONSTRUCTION'
        description='loremDonec ullamcorper nulla non metus auctor fringilla Vestibulum id ligula porta felis euismod semper Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
      image={Img}
          />
          <Divider light />
          <RevPagesBox  title='HORIZONTAL CONSTRUCTION'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
      image={Img}
          />
          <Divider light />
          <PagesBox
        title='DESIGN BUILD'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
      image={Img}
          />
          <Divider light />
          <RevPagesBox  title='BUILDING CONSTRUCTION'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
      image={Img}
          />
    </div>
  );
};

export default ConstructionPage;
