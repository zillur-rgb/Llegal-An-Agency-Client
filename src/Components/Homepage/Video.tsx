import { useRef, useState } from "react";
import "../../styles/Video.scss";

const Video = () => {
  const [play, setPlay] = useState<boolean>(false);
  const vidRef = useRef<HTMLVideoElement>(null!);
  if (play) {
    vidRef.current?.play();
  } else {
    vidRef.current?.pause();
  }
  return (
    <>
      <div className="video-container">
        <h1>Who We Are</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quos
          assumenda itaque perferendis odio ipsam saepe iste dolores? Tempora
          doloremque modi delectus pariatur dolor obcaecati.
        </p>
        <video
          ref={vidRef}
          className="video"
          muted
          poster="/assets/Team.jpg"
          width="640px"
          onClick={() => {
            setPlay(!play);
          }}
        >
          <source src="/assets/Blossoms.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="bg"></div>
    </>
  );
};

export default Video;
