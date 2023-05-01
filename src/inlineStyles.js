const inlineCss = require("inline-css");
const fs = require("fs");

fs.readFile("./public/template.html", "utf8", function (err, data) {
  if (err) throw err;
  console.log("OK");
  inlineCss(data, { url: "https://flyjets.com" }).then(function (html) {
    console.log(html);
  });
});

