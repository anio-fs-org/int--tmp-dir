import {tmpdir, tmpdirSync} from "../src/index.mjs"

console.log(
	await tmpdir()
)

console.log(
	tmpdirSync()
)
