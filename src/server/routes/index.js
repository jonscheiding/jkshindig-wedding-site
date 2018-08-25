import keystone from 'keystone';

const User = keystone.list('User');

module.exports = function(app) {
  app.get('/hello', function(req, res) {
    User.model.find({}, { email: true, displayName: true })
      .exec((err, r) => {
        res.send(r);
      });
  });
};
