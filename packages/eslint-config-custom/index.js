module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"next",
		"turbo",
		"prettier",
	],
	rules: {
		"@next/next/no-html-link-for-pages": "off",
	},
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	settings: {
		react: {
			version: "detect",
		},
	},
};
