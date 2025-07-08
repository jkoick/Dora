import React, { useEffect, useRef } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";

const Youtube = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadLiteYoutube = async () => {
      if (typeof window !== "undefined") {
        await import("lite-youtube-embed");
      }
    };
    
    loadLiteYoutube();
  }, []);

  return (
    <div ref={ref} className="yt-lite rounded-lg">
      <lite-youtube
        videoid={id}
        playlabel={title}
        {...rest}
      />
    </div>
  );
};

export default Youtube;
