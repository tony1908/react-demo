import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: props.author
        }
    }

    // state: {
    //     author: p
    // }

   //si se usa el arrow function, por sus propiedades hereda el contexto del padre
    //las propiedades son inmutables, lo que es mutable es el estado
    handleClick = (event) => {
        this.setState({
            author: 'AUTOR',
        })
    }

    render() {
        return (
            //todo esto es jsx
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover' >
                    <img 
                        src={this.props.image}
                        alt=""
                        width={260}
                        height={160}
                        className='Media-image'
                    />
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='Media-author'>{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;