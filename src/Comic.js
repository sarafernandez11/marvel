import React, {useEffect, useState} from 'react';
import {Grid} from '@mui/material';

import './App.css';
import {fetchComicDetail} from './api';


const Comic = ({comic})  => {

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() =>{
    fetchComicDetail(comic.resourceURI)
    .then((response) => {
      const thumbnail = response.data.data.results[0].thumbnail
      setImageSrc(thumbnail.path + "." + thumbnail.extension)
    }).catch((error) => {
      console.log(error);
    });

  },[comic.resourceURI])

  return (
    <Grid item sm={3} xs={6}>
      <img style={{width: "80%", height: "auto"}} src={imageSrc} alt={comic.name} loading="lazy" />
      <h6>{comic.name}</h6>
    </Grid>
  );
}

export default Comic;
