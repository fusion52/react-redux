import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  console.log(props.images);

  // using map for lists
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image-list'>{images}</div>;
};

// class ImageList extends React.Component {
//   render() {
//     return <div>ImageList</div>;
//   }
// }

export default ImageList;
