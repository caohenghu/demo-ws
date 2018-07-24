module.exports = {
    "extends": "standard",
    "env": {
        "browser": true
    },
    "globals": {
        "Vue": true,
        "VueRouter": true,
        "Vuex": true,
        "axios": true,
        "VueColor": true,
        "Cropper": true,
        "html2canvas": true
    },
    "plugins": [
        "html"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "named": "never"
            }
        ],
        "prefer-promise-reject-errors": [
            "error",
            {
                "allowEmptyReject": true
            }
        ]
    }
}