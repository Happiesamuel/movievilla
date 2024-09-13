function YoutubeTrailer({ videoId, title }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative flex items-center justify-center w-full ">
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="text-center w-full h-[300px] "
        title={title}
      ></iframe>
    </div>
  );
}

export default YoutubeTrailer;
