module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier', 'simple-import-sort'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Packages `react` related packages come first.
					['^react', '^@?\\w'],
					// Internal packages.
					['^(@|components)(/.*|$)'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.?(css)$'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
	},
};
