import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ImgCarousel({ imgs }) {
  return (
    <Carousel
      swipeable={true}
      showDots={true}
      infinite={true}
      transitionDuration={500}
      responsive={responsive}
    >
      {imgs.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default ImgCarousel;
