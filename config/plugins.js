// module.exports = () => {
//   return {
//     ckeditor: {
//       enabled: true,
//     },
//   };
// };

module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  // ...
  ckeditor: {
    enabled: true,
    // resolve: "./src/plugins/strapi-plugin-ckeditor",
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
