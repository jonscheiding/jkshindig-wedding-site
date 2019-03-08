// scripts/launch-app.js
const {spawn} = require('child_process');

const reactProcess = spawn('npx', ['react-scripts', 'start'], {
    detached: true
});

reactProcess.unref();

const removeCliClearCodes = text => {
  return text.replace(/\\033\[2J/g, '');
};

reactProcess.stdout.on('data', data => {
  const text = String(data);
  const output = removeCliClearCodes(text);
  console.log(output);
});
