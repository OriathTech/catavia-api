const whiteList = ["http://localhost:3000", "http://localhost:8080", "https://app-isla-de-marea.onrender.com", "https://api-isla-de-marea.onrender.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

export default corsOptions;
