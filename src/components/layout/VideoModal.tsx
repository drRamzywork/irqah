import React, { useState } from "react";

const VideoModal = () => {
  const [vid, setVid] = useState(true);

  return (
    <div className={"vid-m" + (vid ? " vid-a" : " ")}>
      <div className="vid-c">
        <button
          aria-label="close video popup"
          className="close-v"
          onClick={() => setVid(false)}
        >
          <i className="fa-light fa-xmark-large"></i>
        </button>
        <video autoPlay loop muted controls>
          <source
            src="https://irqahorg.sa/wp-content/uploads/2022/02/عرقة-جديد.mp4"
            type="video/mp4"
          />
        </video>
        <h5> عرقة </h5>
      </div>
    </div>
  );
};

export default VideoModal;
