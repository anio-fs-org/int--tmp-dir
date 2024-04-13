import {mkdir} from "@anio-fs/api/async"
import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export default async function(tmp_dir = null) {
	if (tmp_dir === null) {
		tmp_dir = os.tmpdir()
	}

	const rand = randomUUID({disableEntropyCache: true})
	const dir_path = path.join(tmp_dir, rand)

	await mkdir(dir_path, {mode: 0o755})

	return dir_path
}
