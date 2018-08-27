import keystone from 'keystone';

const Spouse = keystone.list('Spouse');
const Wedding = keystone.list('Wedding');

module.exports = function(app) {
  app.get('/api/index', async function(req, res) {
    try {
      const [wedding, spouses] = await Promise.all([
        Wedding.model.findOne().exec(),
        Spouse.model.find().limit(2).exec()
      ]);

      res.send({wedding, spouses});
    } catch(e) {
      console.error(e);
      res.status(500).end();
    }
  });
};
