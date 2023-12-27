import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const isCumstomAuth = token.length < 500;

    let decodedData;

    if (token && isCumstomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; //'sub' a name google use to differentiate every user.
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
