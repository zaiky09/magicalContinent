import React from "react";

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      playsInline
      preload="metadata"
      poster="/images/MaasaiMara.jpg"
      aria-hidden="true"
      src="/video/safariVideo.mp4"
      className="object-cover w-full h-[60vh] lg:h-[80vh]"
    />
  );
};

export default Video;
