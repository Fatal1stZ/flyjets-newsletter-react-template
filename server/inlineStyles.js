const inlineCss = require("inline-css");
const fs = require("fs");

const PATH = "./template.html";

fs.readFile(PATH, "utf8", function (err, data) {
  if (err) throw err;
  inlineCss(data, {
    url: "https://flyjets.com",
    applyTableAttributes: true,
    applyWidthAttributes: true,
    preserveMediaQueries: true,
    removeStyleTags: false
  }).then(function (html) {
    const regex = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
    const [body] = html.match(regex);
    console.log(body);
    data.replace(regex, body);
    fs.writeFile(PATH, data.replace(regex, body), "utf8", res => {
      console.log("finished", { res });
    });
  });
});

