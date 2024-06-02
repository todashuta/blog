export function url(page) {
	const s = `./${page.data.date.slice(0, 10)}-${page.data.basename}/`;
	//console.log(s);
	return s;
}
