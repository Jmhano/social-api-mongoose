const { Schema, model } = require('mongoose');

const userSchema: new Schema{ 
    userName: {
        type: String
    },
    email: {
        type: String
    }
    thoughts: {

    },
    friends: {

    }
}


const user = model('User', SocialSchema);

// export the Pizza model
module.exports = User;