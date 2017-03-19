import { existsSync } from 'fs';
import { join } from 'path';
import LoaderUtils from 'loader-utils';
import VueLoader from 'vue-loader';

const resolve = ( option, basepath ) => {
	const paths = [
		join(option.dir, basepath+'.'+option.ext),
		join(option.dir, basepath, 'index'+'.'+option.ext)
	];

	for (var path of paths) {
		if (existsSync(path)) {
			return path;
		}
	}

	return null;
};

const build = ( self, options, viewfile, resources ) => {
	const content = [
		'<template src="'+viewfile+'" lang="'+options.view.ext+'" />'
	];

	if (resources.script) {
		content.push('<script src="'+resources.script+'" lang="'+options.script.ext+'" />');
	}

	if (resources.style) {
		content.push('<style src="'+resources.style+'" lang="'+options.style.ext+'" />');
	}

	return VueLoader.apply(self, [ content.join('\n') ]);
};

export default function() {
	const request = this.request;
	const options = LoaderUtils.getOptions(this) || {};

	const groups = request.match(/^.*!(.*)$/);
	const viewfile = groups[1];
	const basepath = viewfile.replace(options.view.dir, '').replace('index.'+options.view.ext, '');

	const resources = {
		script: resolve(options.script, basepath),
		style: resolve(options.style, basepath)
	};

	return build(this, options, viewfile, resources);
}
