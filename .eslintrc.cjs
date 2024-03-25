module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
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
					// react 패키지
					['^react', '^@?\\w'],
					// components 디렉토리 내 모듈
					['^(@|components)(/.*|$)'],
					// 스타일 시트 파일
					['^.+\\.?(css)$'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
	},
};
