import PropTypes from "prop-types";

const GlobalImage = ({ image, className, imgClass, isEager }) => {
  // do
  return (
    image && (
      <div className={`global-image ${className}`}>
        <img
          className={imgClass}
          src={image.url}
          alt={image.alt ? image.alt : ""}
          loading={isEager ? "eager" : "lazy"}
        />
      </div>
    )
  );
};

GlobalImage.propTypes = {
  image: PropTypes.object.isRequired,
  imgClass: PropTypes.string,
  className: PropTypes.string,
  isEager: PropTypes.bool
};

export default GlobalImage;
