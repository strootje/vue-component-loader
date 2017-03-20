import LoaderUtils from 'loader-utils';
import VueLoader from 'vue-loader';
import Builder from './builder';
import Resolver from './resolver';

export default function() {
	const request = this.request;
	const options = LoaderUtils.getOptions(this) || {};

	const groups = request.match(/^.*!(.*)$/);
	const viewfile = groups[1];
	const basepath = viewfile.replace(options.view.dir, '').replace('index.'+options.view.ext, '');

	const resources = {};
	Resolver(options.script, basepath).then(result => resources.script = result);
	Resolver(options.style, basepath).then(result => resources.style = result);

	return Builder(options, viewfile, resources).then(
		content => { return VueLoader.apply(this, [ content ]); },
		err => { return err; }
	);
}
