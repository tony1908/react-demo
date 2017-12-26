import React from 'react';
import { render } from 'react-dom';
// import Playlist from './src/playlist/components/playlist';
import Home from '../pages/containers/home'
import data from '../api.json'

const homeContainer = document.getElementById('home-container');

//primer parametro es el componente a renderizar y el segundo es donde lo renderizaremos
render(<Home data={data}/>, homeContainer);
//es importante recordar que los compoenntes llevan los <>