import {tmpDir, tmpDirSync} from "../dist/default/index.mjs"

console.log(
	await tmpDir()
)

console.log(
	tmpDirSync()
)
