import React from 'react';
import Media from './media.js'
import PropTypes from 'prop-types'
import './playlist.css';

//esto es un componente funcional y dumb 
function Playlist(props) {
        const playlist = props.playlist;
        return (
            <div className='Playlist'>
                {
                    playlist.map((item) => {
                        // usmos {...item} porque en ecma 7 nos va a descomponer los elemento a cada una de las propiedades
                        return  <Media handleClick={props.handleOpenModal} key={item.id} {...item} />
                    })
                }
               
            </div>
        )
}

Playlist.propTypes = {
    playlist: PropTypes.array.isRequired,
}

export default Playlist;