/**
 * @brief Asynchronously create a temporary directory.
 * @description
 * Asynchronously create a temporary directory at location `tmp_dir`.
 * @param tmp_dir Optional directory where to create the temporary directory.
 * @return
 * Path to the temporary directory.
 */
export function tmpdir(tmp_dir? : string | null) : Promise<string>;

/**
 * @brief Synchronously create a temporary directory.
 * @description
 * Synchronously create a temporary directory at location `tmp_dir`.
 * @param tmp_dir Optional directory where to create the temporary directory.
 * @return
 * Path to the temporary directory.
 */
export function tmpdirSync(tmp_dir? : string | null) : string;
