import React from 'react';
import './css/App.css';
import Row from "./components/Row";
import requests from './components/requests';
import Banner from './components/Banner';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated"fetchUrl={requests.fecthTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
