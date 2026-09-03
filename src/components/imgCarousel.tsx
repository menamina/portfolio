import { useState } from "react";
import { Box, Button } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Magnify from "../imgs/magnify.svg";

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
  const [modal, setModal] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {!modal && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            "& .overlay-magnify": {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0,
              transition: "opacity 0.3s ease",
              zIndex: 1,
            },
            "&:hover .overlay-magnify": {
              opacity: 5,
            },
            cursor: "pointer",
          }}
        >
          <MultiCarousel
            swipeable={true}
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
          <Box>
            <img
              onClick={() => {
                !modal && setModal(true);
                console.log("clicked");
              }}
              className="overlay-magnify"
              src={Magnify}
              alt="magnify"
              style={{
                backgroundColor: "#80808033",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>
      )}

      {modal && (
        <Box
          onClick={() => modal && setModal(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(49, 47, 47, 0.61)",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{ maxWidth: "1200px", width: "100%" }}
          >
            <MultiCarousel
              swipeable={true}
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
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ImgCarousel;
