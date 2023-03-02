import { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Grid from '@mui/material/Grid';
import update from 'immutability-helper';

// Define a type for the drag and drop operation
const ItemTypes = {
  CARD: 'card'
};

// Component for displaying the image with a number in the center
function ImageCard({ src, index, newIndex, moveImage }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: 'card',
    hover(item, monitor) {
      if (item.index !== index) {
        moveImage(item.index, index);
      }
    }
  });

  return (
    <div ref={drop}>
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'grab',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '100px',
          margin: '3px',
          position: 'relative'
        }}
      >
        <img src={src} alt="chosen" style={{ height: '100%', width:'100%' }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '1px 1px #000000'
          }}
        >
          {newIndex + 1}
        </div>
      </div>
    </div>
  );
}

// Component for rendering the grid of images
export default function ImageGrid({ previewSource }) {
  const [images, setImages] = useState(previewSource.map((src, index) => ({ src: src.src, index })));

  useEffect(() => {
    setImages(previewSource.map((src, index) => ({ src: src.src, index })))  
  }, [previewSource])

  function moveImage(dragIndex, hoverIndex) {
    const dragImage = images[dragIndex];
    const newImages = update(images, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragImage]
      ]
    });
    // Update the index for each image
    const updatedImages = newImages.map((image, index) => ({ ...image, newIndex: index }));
    setImages(updatedImages);
  }

  return (
    <Grid container spacing={3}>
      {images.map(({ src, index, newIndex }) => (
        <Grid item xs={3} key={index}>
          <ImageCard src={src} index={index} newIndex={newIndex} moveImage={moveImage} />
        </Grid>
      ))}
    </Grid>
  );
}
