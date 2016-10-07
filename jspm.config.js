SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "app/": "app/",
    "github:": "jspm_packages/github/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.16"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "css": "github:systemjs/plugin-css@0.1.30",
    "text": "github:systemjs/plugin-text@0.0.9"
  },
  packages: {}
});
