import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Feed from "../appIMGS/feed.png";
import Profile from "../appIMGS/profile.png";
import Settings from "../appIMGS/set.png";
import Pass from "../appIMGS/pass.png";
import Wrongpass from "../appIMGS/wrongpass.png";
import Edit from "../appIMGS/edit.png";
import Comment from "../appIMGS/comment.png";
import Inven from "../appIMGS/inven.png";

function ImgCarousel({ imgs }: { imgs: string[] }) {
  return (
    <Carousel swipeable={true}>
      {imgs.map((img, index) => (
        <div key={index}>
          <img src={img} />
        </div>
      ))}
    </Carousel>
  );
}

export default ImgCarousel;
