module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 2022,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import", 
        "jsx-a11y"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    }
}
