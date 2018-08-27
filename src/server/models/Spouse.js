import path from 'path';
import keystone from 'keystone';
import nameFunctions from 'keystone-storage-namefunctions';

const Spouse = new keystone.List('Spouse');

const storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('../../build/images'),
    publicPath: '/images/',
    generateFilename: (file, i, callback) => {
      if(!file.extension) {
        file.extension = path.extname(file.originalname)
          .replace(/^\./, '');
      }
      return nameFunctions.randomFilename(file, i, callback);
    }
	},
  schema: {
      url: true,
  }
});

Spouse.add({
  firstName: { type: String },
  lastName: { type: String },
  title: { type: String },
  image: { type: keystone.Field.Types.File, storage: storage },
  order: { type: Number }
});

Spouse.defaultColumns = 'id, firstName, lastName, title';

Spouse.register();
