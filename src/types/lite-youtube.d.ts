declare module 'lite-youtube-embed' {
  export {};
}

declare namespace JSX {
  interface IntrinsicElements {
    "lite-youtube": {
      videoid: string;
      playlabel?: string;
      [key: string]: any;
    };
  }
}