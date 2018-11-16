const del = require('del');

del(['.cache/*']).then(paths => {
	console.log('Deleted files and folders:\n', paths.join('\n'));
});