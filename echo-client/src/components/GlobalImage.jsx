const GlobalImage = ({ image, className, isEager }) => {
  // do
  return (
    image && (
      <img
        className={className}
        src={image.url}
        alt={image.alt ? image.alt : ""}
        loading={isEager ? "eager" : "lazy"}
      />
    )
  );
};

export default GlobalImage;
