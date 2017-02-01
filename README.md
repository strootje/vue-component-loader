# Vue Component Loader
[mpl2]: https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)
[loader]: https://github.com/strootje/vue-component-loader
[resolver]: https://github.com/strootje/vue-component-resolver-plugin

* [*vue-component-loader*][loader]
* [vue-component-resolver-plugin][resolver]

## Dependencies
* [vue-component-resolver-plugin][resolver]

## Example use
webpack.config.js:

	import ComponentResolverPlugin from 'vue-component-resolver-plugin';

	module.exports = {

		// ...

		resolveLoader: {

			// ...

			alias: {
				load: 'vue-component-loader'
			}
		},

		plugins: [

			// ...

			new ComponentResolverPlugin({
				views: { dir: dir.app('views'), ext: 'pug' },
				scripts: { dir: dir.app('scripts'), ext: 'js' },
				styles: { dir: dir.app('styles'), ext: 'less' }
			})
		]
	};

## Installation
	npm install --save-dev vue-component-loader

## License
[Mozilla Public License, version 2.0][mpl2]
