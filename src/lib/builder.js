const separator = '\n';
export default ( options, viewfile, resources ) => {
	/* eslint no-undef: "off" */
	return new Promise(( resolve ) => {
		const content = [
			'<template src="'+viewfile+'" lang="'+options.view.ext+'" />'
		];

		if (resources.script) {
			content.push('<script src="'+resources.script+'" lang="'+options.script.ext+'" />');
		}

		if (resources.style) {
			content.push('<style src="'+resources.style+'" lang="'+options.style.ext+'" />');
		}

		resolve(content.join(separator));
	});
};
