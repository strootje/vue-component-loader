import { existsSync } from 'fs';
import { join } from 'path';

export default ( option, basepath ) => {
	/* eslint no-undef: "off" */
	return new Promise(( resolve, reject ) => {
		const paths = [
			join(option.dir, basepath+'.'+option.ext),
			join(option.dir, basepath, 'index'+'.'+option.ext)
		];

		for (var path of paths) {
			if (existsSync(path)) {
				resolve(path);
			}
		}

		reject('file not found');
	});
};
