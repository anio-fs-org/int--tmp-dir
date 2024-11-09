import {tmpDirFactory as factory} from "#~auto/export/tmpDirFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"

const impl = factory()

export const tmpDir : ImplementationDocType = impl
