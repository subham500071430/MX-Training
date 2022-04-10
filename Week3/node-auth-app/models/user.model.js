var mongoose = require('mongoose');

module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        mobile: Number,
        status: Boolean
    }
);

schema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object._id = _id ;
    return object;
});
var user = mongoose.model("User", schema);
return user;
}