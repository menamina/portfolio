type BtnData = {
  image?: string;
  text?: string;
  url?: string;
};

function ButtonOutline(btnData: BtnData) {
  const { image, text, url } = btnData;
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {image && <img src={image} alt="button icon" />}
        {text && <span>{text}</span>}
      </a>
    </div>
  );
}

export default ButtonOutline;
