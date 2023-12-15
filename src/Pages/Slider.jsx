import React, { useRef, useState, useEffect } from 'react';

import './Slider.css'
function Slider() {
    const sliderRef = useRef(null);
    const scrollAmount = 250;
    const images = [
      {
        id: 1,
        url: "https://source.unsplash.com/300x300/?perth,australia"
      },
      {
        id: 2,
        url: "https://source.unsplash.com/300x300/?west-australia"
      },
      {
        id: 3,
        url: "https://source.unsplash.com/300x300/?perth"
      },
      {
        id: 4,
        url: "https://source.unsplash.com/300x300/?quokka,perth"
      },
      {
        id: 5,
        url: "https://source.unsplash.com/300x300/?margaretriver,australia"
      },
      {
        id: 6,
        url:
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      },
      {
        id: 7,
        url: "https://source.unsplash.com/300x300/?perth,australia"
      },
      {
        id: 8,
        url: "https://source.unsplash.com/300x300/?west-australia"
      },
      {
        id: 9,
        url: "https://source.unsplash.com/300x300/?perth"
      },
      {
        id: 10,
        url: "https://source.unsplash.com/300x300/?quokka,perth"
      },
      {
        id: 11,
        url: "https://source.unsplash.com/300x300/?margaretriver,australia"
      },
      {
        id: 12,
        url:
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      },
      {
        id: 13,
        url: "https://source.unsplash.com/300x300/?perth,australia"
      },
      {
        id: 14,
        url: "https://source.unsplash.com/300x300/?west-australia"
      },
      {
        id: 15,
        url: "https://source.unsplash.com/300x300/?perth"
      },
      {
        id: 16,
        url: "https://source.unsplash.com/300x300/?quokka,perth"
      },
      {
        id: 17,
        url: "https://source.unsplash.com/300x300/?margaretriver,australia"
      },
      {
        id: 18,
        url:
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      },
      {
        id: 19,
        url: "https://source.unsplash.com/300x300/?perth,australia"
      },
      {
        id: 20,
        url: "https://source.unsplash.com/300x300/?west-australia"
      },
      {
        id: 21,
        url: "https://source.unsplash.com/300x300/?perth"
      },
      {
        id: 22,
        url: "https://source.unsplash.com/300x300/?quokka,perth"
      },
      {
        id: 23,
        url: "https://source.unsplash.com/300x300/?margaretriver,australia"
      },
      {
        id: 24,
        url:
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const container = sliderRef.current;
  
      const intervalId = setInterval(() => {
        // Update the scroll position based on the scroll amount
        container.scrollLeft += scrollAmount;
  
        // If the slider reaches the end, reset to the first image
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
          setCurrentIndex(0);
        } else {
          // Calculate the new index based on the scroll position
          const newIndex = Math.floor(container.scrollLeft / scrollAmount);
  
          // If the index changes, update the current index
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
          }
        }
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [currentIndex, scrollAmount]);
  
    return (
      <div className="App">
        <div className="images-container" ref={sliderRef} >
          {images.map((image, index) => (
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
              style={{
                marginRight: index === images.length - 1 ? 0 : '10px',
              }}
              onMouseOver={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Slider;