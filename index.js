const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const BucketWS = require("@bucketws/api");
const PORT = process.env.PORT || 5000;

const instance = BucketWS.init({
  url: process.env.BUCKETWS_V2_API_URL,
  key: process.env.BUCKETWS_V2_API_KEY,
  secret: process.env.BUCKETWS_V2_API_SECRET
});

const cxt = {
  instance,
  domain: process.env.BUCKETWS_V2_DOMAIN,
  bucketPublic: "test-public",
  bucketPrivate: "test-private",
  release: process.env.BUCKETWS_V2_API_VERSION
};

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(bodyParser.json())
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  // In a real app you will authrize this upload route based on the logged in user
  .post("/app/signed-from-server/:mode", async function(req, res) {
    const { mode } = req.params;
    const { fileid, tags } = req.body;

    const { form } = await instance.BucketFile.upload({
      domain: cxt.domain,
      name: mode === "public" ? cxt.bucketPublic : cxt.bucketPrivate,
      fileid,
      tags
    });

    res.json({ form });
  })
  .get("/", (req, res) =>
    res.render("pages/index", {
      ...cxt,
      bucketMode: "public",
      bucketTarget: cxt.bucketPublic
    })
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
