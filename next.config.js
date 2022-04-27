/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  async rewrites() {
    const rewritesArray = [
      {
        source: "/uploads/:asset*",
        destination:
          "http://proxy-patronageapi.bsolutions.usermd.net/uploads/:asset*",
      },
    ];
    return rewritesArray;
  },
};
