import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends PureComponent {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         author: props.author
    //     }
    // }

    // state: {
    //     author: p
    // }

   //si se usa el arrow function, por sus propiedades hereda el contexto del padre
    //las propiedades son inmutables, lo que es mutable es el estado
    // handleClick = (event) => {
    //     this.setState({
    //         author: 'AUTOR',
    //     })
    // }

    render() {
        return (
            //todo esto es jsx
            <div className='Media' onClick={this.props.handleClick}>
                <div className='Media-cover' >
                    <img 
                        src={this.props.cover}
                        alt=""
                        width={240}
                        height={160}
                        className='Media-image'
                    />
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='Media-author'>{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;