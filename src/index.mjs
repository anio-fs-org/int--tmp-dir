import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function tmpdir(tmp_dir = null) {
	return async_impl(tmp_dir)
}

export function tmpdirSync(tmp_dir = null) {
	return sync_impl(tmp_dir)
}
