import React, {useEffect, useState} from 'react';
import {Pagination, Grid, Container, Box} from '@mui/material';

import './App.css';
import Character from './Character';
import {fetchPageNum, fetchCharacterList} from './api';


const App = ()  => {

  const charactersPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const [characterList, setCharacterList] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    const fetchInitialData = () => {
      fetchPageNum()
      .then((response) => {
        setPageNum(Math.ceil(response.data.data.total / charactersPerPage));
      }).catch((error) => {
        console.log(error);
      });
    }

    if (pageNum === 0){
      fetchInitialData();
    }

  }, [pageNum]);

  useEffect(() => {
    const offset = (currentPage - 1) * charactersPerPage

    fetchCharacterList(charactersPerPage, offset)
    .then((response) => {
      setCharacterList(response.data.data.results)
    }).catch((error) => {
      console.log(error);
    });

  }, [currentPage]);

  const fetchPage = (event, page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <Box justifyContent="left" sx={{width: "100%", px: 4, py: 2, mb: 4, backgroundColor: "black", color: "white"}}>
        <h1>MARVEL CHARACTER LIST</h1>
      </Box>
      <Container sx={{width: "100%"}}>
        <Grid container spacing={0}>
          {characterList.map((character) =>
            <Character character={character} key={character.name}/>
          )}
        </Grid>
        <Box display="flex" justifyContent="center" sx={{my: 4}}>
          <Pagination count={pageNum} page={currentPage} onChange={fetchPage}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
