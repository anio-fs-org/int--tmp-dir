import {tmpDirSyncFactory as factory} from "#~auto/export/tmpDirSyncFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"

const impl = factory()

export const tmpDirSync : ImplementationDocType = impl
