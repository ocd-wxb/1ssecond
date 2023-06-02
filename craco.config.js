const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.121.66:8090/",
        pathRewrite: {
          "^api": "111",
        },
      },
    },
  },
  webpack: {
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["@svg/webpack"],
        },
      ],
    },
  },
};
