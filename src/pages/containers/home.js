import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'

class Home extends Component {

    state = {
        modalVisible: false
    }

    handleOpenModal = () => {
        this.setState({
            modalVisible:true
        })
    }

    handleCloreModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
 
    render() {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories 
                        categories={this.props.data.categories} 
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloreModal}
                            >
                                <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;