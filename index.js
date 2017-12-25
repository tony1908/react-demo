import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const app = document.getElementById('app');

//primer parametro es el componente a renderizar y el segundo es donde lo renderizaremos
render(<Playlist data={data}/>, app);
//es importante recordar que los compoenntes llevan los <>