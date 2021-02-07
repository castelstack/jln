import React from 'react';
import BlogBar from '../../components/blog-bar/blog-bar';
import BlogPost from '../../components/blog-bar/blog-post';
import Box from '../../components/box/box';
import styled from "styled-components";

const Container = styled.div`

  
`;
 
const Contain = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 3.5rem 0;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr ;
    
  }
`;

 
const Blogs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  grid-gap: 3rem;
  padding: 0 2rem;
  @media only screen and (max-width: 900px) {
    grid-gap: 1.5rem;
    padding: 0 1rem;
  }
  
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr ;
    grid-row: 1/2;
  }
`;
const Blog = () => {
    return (
        <Container>
            <Box title='Blog' currentPage='Blog' />
            <Contain>
                <div>

                <BlogBar />
                </div>
                <Blogs>
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </Blogs>
            </Contain>
        </Container>
    );
};

export default Blog;