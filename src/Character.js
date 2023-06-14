import React, {useState} from 'react';
import {Grid, Divider, ButtonBase, Dialog, Container} from '@mui/material';

import './App.css';
import Comic from './Comic';


const Character = ({character})  => {

  const [moreInfo, setMoreInfo] = useState(false);
  const characterComics = character.comics.items;

  const handleClose = () => {
    setMoreInfo(false);
  };

  return (
    <Grid item md={2} sm={4} xs={6} sx={{mt:2}}>
      <ButtonBase className="button" sx={{width: "100%", m: 0, p: 0}} onClick={() => {setMoreInfo(!moreInfo)}}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <img style={{width: "90%", height:"auto", aspectRatio:1/1.5}} src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} loading="lazy" />
        </Grid>
        <Grid item xs={12}>
          <h6 class="id">{"#" + character.id}</h6>
          <h2 class="name">{character.name}</h2>
        </Grid>
      </Grid>
      </ButtonBase>
      <Dialog className="dialog" open={moreInfo} onClose={handleClose} maxWidth="lg" sx={{width:"80%"}}>
        <Container sx={{backgroundColor: "black", color: "white"}}>
        <Grid container spacing={2}>
          <Grid item xs={5} >
            <img style={{width: "100%", height: "auto"}} src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} loading="lazy" />
          </Grid>
          <Grid item xs={7}>
            <h6 class="id">{"#" + character.id}</h6>
            <h1 class="name">{character.name}</h1>
            <h5 class="description">{character.description}</h5>
          </Grid>
          <Grid item xs={12} textAlign="">
            <h3>Appears on: </h3>
            <Grid container sx={{width: "100%"}} spacing={2}>
              {characterComics.map((comic) =>
                <Comic comic={comic} key={comic.name} />
              )}
            </Grid>
          </Grid>
        </Grid>
        </Container>
      </Dialog>
      <Divider variant="middle"/>
    </Grid>
  );
}

export default Character;
