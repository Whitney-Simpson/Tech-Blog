const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });
Post.belongsTo(User, {foreignKey: 'userId'});
Post.hasMany(Comment, {foreignKey: 'postId'});
Comment.belongsTo(User, {foreignKey: 'userId'});

module.exports = { User, Post, Comment };
