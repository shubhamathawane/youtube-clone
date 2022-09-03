import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import thumbnail from "../Utils/thumbnail.jpg";
import Comments from "../Components/Comments";
import Card from '../Components/Card.jsx'

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`
  flex: 5;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`;

const Recondition = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`

`;

const ChannelCounter = styled.span`
     margin-top: 5px;
     margin-bottom: 20px;
     color: ${({ theme }) => theme.textSoft};
     font-size: 16px;
`;

const Description = styled.p`
font-size: 14px;
`;

const Subscribe = styled.button`
    background-color: #cc1a00;
    border:none;
    border-radius:3px;
    height:max-content;
    padding: 10px 20px;
    font-weight:300;
    color:white;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="1080"
            height="720"
            src="https://www.youtube.com/embed/ZnuwB35GYMY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>84,349,34 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              224
            </Button>
            <Button>
              <ThumbDownOffAltIcon />
              Dislike
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <LibraryAddIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={thumbnail} />
            <ChannelDetail>
              <ChannelName>Shubham Athawane's </ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                enim labore molestias, aspernatur et dignissimos ipsum? Quam
                temporibus consequatur consectetur commodi debitis quasi
                eligendi magnam? Molestias neque recusandae asperiores expedita.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Content>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        </Content>
    </Container>
  );
};

export default Video;
