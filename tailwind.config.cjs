const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [],
	variants: {
    extend: {
      scale: ['hover'],
    }
  },
};

module.exports = config;
