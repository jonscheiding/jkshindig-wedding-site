import keystone from 'keystone';

const Wedding = new keystone.List('Wedding');

Wedding.add({
  date: keystone.Field.Types.Date,
  location: {
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String
  },
  story: keystone.Field.Types.Textarea
});

Wedding.defaultColumns = 'id, date, location.name';

Wedding.register();