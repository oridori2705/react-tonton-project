/** @type {import('next').NextConfig} */
const Dotenv = require('dotenv-webpack')

module.exports = {
  // async rewrites() {
	// 	return [
	// 		{
	// 			source: "/:path*",
	// 			destination: "http://localhost:8080/:path*",
	// 		},
  //   ]
  // },
  reactStrictMode: false,
  webpack: config => {
    config.plugins.push(new Dotenv({ silent: true }));
    return config;
  }
 
}
