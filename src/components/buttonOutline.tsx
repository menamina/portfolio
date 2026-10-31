import { Button } from "@mui/material";

type BtnData = {
  image?: string;
  text?: string;
  url?: string;
  onClick?: () => void;
  className?: string;
};

function ButtonOutline(btnData: BtnData) {
  const { image, text, url, onClick, className } = btnData;

  const imageStyle = {
    width: text ? "20px" : "24px",
    height: text ? "20px" : "24px",
    marginRight: text ? "8px" : "0",
  };

  if (url) {
    return (
      <Button href={url} target="_blank" rel="noopener noreferrer" variant="outlined" className={className}>
        {image && <img src={image} alt="button icon" style={imageStyle} />}
        {text}
      </Button>
    );
  }

  return (
    <Button onClick={onClick} variant="outlined" className={className}>
      {image && <img src={image} alt="button icon" style={imageStyle} />}
      {text}
    </Button>
  );
}

export default ButtonOutline;
