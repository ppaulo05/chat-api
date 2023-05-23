const jwt = require('jsonwebtoken'); 

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
    function validarToken(token) {
        if (!token) {
          return false;
        }
        if (token.length !== 10) {
          return false;
        }
      
        if (!/^[a-zA-Z0-9]+$/.test(token)) {
          return false;
        }
        return true;
      }
});


const setToken = async (id, key) => {
    console.log(id);
    if (id) {
        return jwt.sign({ id }, key, {expiresIn: 28800});
    }
    return false;
};

module.exports = {
    checktoken,
    setToken,

};
