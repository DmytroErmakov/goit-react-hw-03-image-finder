import React from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import styles from './App.module.css';


export class App extends React.Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    page: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const inputForSearch = event.target.element.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    const response = await fetchImage(inputForSearch.value, 1);
    this.setState({
      images: response,
      currentSearch: inputForSearch.value,
      isLoading: false,
      page: 1,
    });
  };

  handleClickMore = async () => {
    const response = await fetchImage(
      this.state.currentSearch,
      this.state.page + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      page: this.state.page + 1,
    });
  };

  handleImageClick = event => {
    this.setState({
      modalOpen: true,
      modadlAlt: event.target.alt,
      modalImg: event.target.name,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  handleKeyDonw = event => {
    if (event.code === 'Escape') {
      this.nahdleModal.Close();
    }
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  fetchImage = async (query, page) => {
    // Реализуйте логику для получения изображений
  };




  render() {
    return {
      <div className={styles.App}>
    {this.state.isLoading ? (<Loader />) : (
         <React.Fragment>
        <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery onImageClick={this.handleImageClick} images={this.state.images} />
       {this.state.images.length > 0 ? (<Button onClick={this.handleClickMore} /> ) : null}
               </React.Fragment>)
    }
    {
      this.state.modalOpen ? (
        <Modal src={this.state.modalImg}
          alt={this.state.modalAlt}
          handleClose={this.handleModalClose} />) : null
    }
    </ >
      
    );
  }

}
