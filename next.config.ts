import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/eM68reY3eK",
        permanent: true,
      },
      {
        source: "/roblox",
        destination: "https://www.roblox.com/communities/16435914/bsem#!/about",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "https://docs.google.com/document/d/1-Ci8jLZ7jScRjDZ2Il4RBgXW6XBtnIFapRLsE2kUEhw/edit?tab=t.0",
        permanent: true,
      },
      {
        source: "/tos",
        destination: "https://docs.google.com/document/d/1sjgaYZDR_UCVm103F8LYPTuD0DTJaV98AHvPPlkuyFA/edit?usp=sharing",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "https://docs.google.com/document/d/1-Ci8jLZ7jScRjDZ2Il4RBgXW6XBtnIFapRLsE2kUEhw/edit?usp=sharing",
        permanent: true,
      },
      {
        source: "/ndp",
        destination: "https://docs.google.com/document/d/1abD3MlpD3gJHPjBenPFjUjsK-h8X-TKuhWDrzeUw3tM/edit?usp=sharing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
