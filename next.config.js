/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: [
      "a.thumbs.redditmedia.com",
      "b.thumbs.redditmedia.com",
      "www.reddit.com",
      "i.redd.it",
      "v.redd.it",
      "i.imgur.com",
      "redgifs.com",
      "www.redgifs.com",
      "imgur.com",
      "discord.gg",
      //"res.cloudinary.com",
    ],
  },
  experimental: {
    runtime: "nodejs",
  },
};

module.exports = nextConfig;
