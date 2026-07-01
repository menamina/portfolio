import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// @ts-ignore
const MultiCarousel = Carousel.default || Carousel;

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

function ImgCarousel({ imgs }: { imgs: string[] }) {
  return (
    <div style={{ width: "100%" }}>
      <MultiCarousel
        swipeable={true}
        showDots={true}
        infinite={true}
        transitionDuration={500}
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {imgs.map((img, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
              }}
            />
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
}

export default ImgCarousel;
