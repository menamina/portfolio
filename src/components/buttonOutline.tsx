import { Button } from "@mui/material";

type BtnData = {
  image?: string;
  text?: string;
  url?: string;
  onClick?: () => void;
};

function ButtonOutline(btnData: BtnData) {
  const { image, text, url, onClick } = btnData;

  if (url) {
    return (
      <Button href={url} target="_blank" rel="noopener noreferrer" variant="outlined">
        {image && <img src={image} alt="button icon" style={{ width: "20px", marginRight: "8px" }} />}
        {text}
      </Button>
    );
  }

  return (
    <Button onClick={onClick} variant="outlined">
      {image && <img src={image} alt="button icon" style={{ width: "20px", marginRight: "8px" }} />}
      {text}
    </Button>
  );
}

export default ButtonOutline;
