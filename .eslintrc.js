module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'comma-dangle': ['error', {
			arrays: 'only-multiline',
			objects: 'only-multiline',
			imports: 'only-multiline',
			exports: 'only-multiline',
			functions: 'never',
		}],
	},
};
