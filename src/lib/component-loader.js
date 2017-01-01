const VueLoader = require('vue-loader');

module.exports = function ComponentLoader() {
	this.cacheable();
	const groups = this.request.match(/^.*\!(.*)\?(.*)$/);
	const viewpath = groups[1];
	const resources = JSON.parse(groups[2]);

	const content = [
		'<template src="' + viewpath + '" lang="pug" />'
	];

	if (resources.script) {
		content.push('<script src="' + resources.script + '" />');
	}

	if (resources.style) {
		content.push('<style src="' + resources.style + '" lang="less" />');
	}

	return VueLoader.apply(this, [ content.join('\n') ]);
};
