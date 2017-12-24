import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

//primer parametro es el componente a renderizar y el segundo es donde lo renderizaremos
render(<Media type='video' title="¿Que es responsive design?" author="Toony1908" image="/images/covers/responsive.jpg"/>, app);
//es importante recordar que los compoenntes llevan los <>