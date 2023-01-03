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

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'        }
      ]
}

// get total count of thoughts and replies on retrieval
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
  });


const user = model('User', SocialSchema);

// export the User model
module.exports = User;