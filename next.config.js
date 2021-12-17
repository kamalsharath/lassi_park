module.exports = {
  reactStrictMode: true,
  env: {
    mode: "production",
    baseUrlProduction: "https://lassi-park.vercel.app/",
    baseUrlDevelopment: "http://localhost:3000/",
    MONGO_DB_URI:
      "mongodb+srv://dbuser:dbuser@cluster0.jyhfv.mongodb.net/lassipark?retryWrites=true&w=majority",
  },
};
