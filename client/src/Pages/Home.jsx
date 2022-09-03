import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../Components/Card.jsx'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;

`
const Home = () => {

  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    const fetchvideos = async () => {
      const res = await axios.get("http://localhost:3001/api/videos/random/")
      setVideos(res.data);
    }
    fetchvideos();
  }, []);

  return (
    <Container>
      {videos.map((videos) => {
        <Card/>
      })}
    </Container>
  )
}

export default Home