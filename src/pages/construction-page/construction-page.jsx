import { Divider } from "@material-ui/core";
import React from "react";
import Box from "../../components/box/box";
import { PagesBox, RevPagesBox } from "../../components/box/pages-box";
import Img from "../../images/slide2.jpg";
const ConstructionPage = () => {

  const data =  [
    "yam", "rice ", "tomatoes ", "indomie"
  ];
  return (
    <div>
      <Box title='Construction' currentPage='Construction' />
      <PagesBox
        title='WE PRODUCE THE FRESHEST FRUITS.'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
        image={Img}
        data={data}
          />
          <Divider light />
          <RevPagesBox  title='WE PRODUCE THE FRESHEST FRUITS.'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
        image={Img}
        data={data}
          />
          <Divider light />
          <PagesBox
        title='WE PRODUCE THE FRESHEST FRUITS.'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
      image={Img}
          />
          <Divider light />
          <RevPagesBox  title='WE PRODUCE THE FRESHEST FRUITS.'
        description='loremDonec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.'
      alt='construction'
      image={Img}
          />
    </div>
  );
};

export default ConstructionPage;
