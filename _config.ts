import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume({
	location: new URL("https://todashuta.github.io/blog/"),
	src: "./src",
	dest: "./docs",
	emptyDest: true,
});

site.use(blog());

site.copy("dot_nojekyll", ".nojekyll");
site.copy("assets", "assets");

export default site;
