import React from 'react';
import Media from './media.js'
import Play from '../../icons/components/play'
import PropTypes from 'prop-types'
import './playlist.css';

//esto es un componente funcional y dumb 
function Playlist(props) {
        const playlist = props.data.categories[0].playlist;
        return (
            <div className='Playlist'>
                <Play 
                    size={50}
                    color="red"
                />
                {
                    playlist.map((item) => {
                        // usmos {...item} porque en ecma 7 nos va a descomponer los elemento a cada una de las propiedades
                        return  <Media key={item.id} {...item}/>
                    })
                }
               
            </div>
        )
}

Playlist.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Playlist;