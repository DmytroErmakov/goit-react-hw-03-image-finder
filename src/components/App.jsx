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
    error: null,
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const inputValue = event.target.elements.inputForSearch.value;

    if (inputValue.trim() === '') {
      return;
    }
    const response = await this.fetchImage(inputValue, 1);
    this.setState({
      images: response,
      currentSearch: inputValue,
      isLoading: false,
      page: 1,
    });
  };

  handleClickMore = async () => {
    const response = await this.fetchImage(
      this.state.currentSearch,
      this.state.page + 1
    );
    this.setState(prevState => ({
      images: [...prevState.images, ...response],
      page: prevState.page + 1,
    }));
  };

  handleImageClick = event => {
    this.setState({
      modalOpen: true,
      modalAlt: event.target.alt,
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

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.handleModalClose();
    }
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  fetchImage = async (inputValue, page) => {
    const URL = 'https://pixabay.com/api';
    const apiKey = '36761808-85f8f6dd9a9f7c71c5d90744b';
    try {
      const response = await axios.get(
        `${URL}/?q=${inputValue}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      return response.data.hits.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
      }));
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, modalOpen, modalImg, modalAlt } = this.state;

    return (
      <div className={styles.App}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery
              onImageClick={this.handleImageClick}
              images={images}
            />
            {images.length > 0 && <Button onClick={this.handleClickMore} />}
          </>
        )}
        {modalOpen && (
          <Modal
            image={modalImg}
            alt={modalAlt}
            onClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
