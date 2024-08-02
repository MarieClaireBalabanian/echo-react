import PropTypes from "prop-types";

const GearThumbnailActions = ({ gearItem }) => {
  
  return (
    <div className="gear-thumbnail-actions">
        <button aria-label="delete my gear item">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10 11V17"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M14 11V17"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M4 7H20"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </g>
          </svg>
        </button>
        <button aria-label="edit my gear item">
          <svg
            viewBox="-2.56 0 89.725 89.725"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            stroke="#ffffff">
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g
                id="Group_11"
                data-name="Group 11"
                transform="translate(-1020.3 -668.175)">
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M1066.1,682.8l-34.8,34.8a3.858,3.858,0,0,0-1.1,2.2l-.8,10.1a2.488,2.488,0,0,0,2.8,2.8l9.8-.8a3.857,3.857,0,0,0,2.2-1.1l35-35a3.041,3.041,0,0,0,.3-4.3l-9.1-9.1A3.052,3.052,0,0,0,1066.1,682.8Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeMiterlimit="10"
                  strokeWidth="4"></path>
                <path
                  id="Path_54"
                  data-name="Path 54"
                  d="M1079.6,690.2l-7.8-7.8a3.684,3.684,0,0,1,0-5.3l5.8-5.8a3.684,3.684,0,0,1,5.3,0l7.8,7.8a3.684,3.684,0,0,1,0,5.3l-5.8,5.8A3.869,3.869,0,0,1,1079.6,690.2Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="4"></path>
                <path
                  id="Path_55"
                  data-name="Path 55"
                  d="M1098.6,755.9h-72a4.268,4.268,0,0,1-4.3-4.3v-3.3a4.268,4.268,0,0,1,4.3-4.3h72a4.268,4.268,0,0,1,4.3,4.3v3.3A4.268,4.268,0,0,1,1098.6,755.9Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="4"></path>
                <path
                  id="Path_56"
                  data-name="Path 56"
                  d="M1103.5,739.8"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="4"></path>
              </g>
            </g>
          </svg>
        </button>
    </div>
  );
};

GearThumbnailActions.propTypes = {
  gearItem: PropTypes.object.isRequired,
};

export default GearThumbnailActions;
