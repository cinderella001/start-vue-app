const jwt = require('jsonwebtoken');

module.exports = {
    createToken: (obj) => {
        return  jwt.sign(obj,'hulala',{
            expiresIn: 60 * 60
        });
    },
    decodeToken: (token) => {
        try{
            return jwt.verify(token,'hulala');
        }catch(err){
            return null;
        }
    }
}

