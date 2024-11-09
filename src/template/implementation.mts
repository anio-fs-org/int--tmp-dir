/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesType.d.mts"
//import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"
//import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import {mkdir} from "@anio-fs/api/async"
//import {mkdir} from "@anio-fs/api/sync"

import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export default async function(
//export default function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	tmp_dir? : string | null
) : ReturnType<ImplementationDocType> {
	if (tmp_dir === null || tmp_dir === undefined) {
		tmp_dir = os.tmpdir()
	}

	const rand = randomUUID({disableEntropyCache: true})
	const dir_path = path.join(tmp_dir, rand)

	// @ts-ignore:next-line
	// todo: declare correct interface
	await mkdir(dir_path, {mode: 0o755})
//	mkdir(dir_path, {mode: 0o755})

	return dir_path
}
