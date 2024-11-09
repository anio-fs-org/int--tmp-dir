/* define and describe your function api here */
/**
 * @brief Asynchronously create a temporary directory.
 * @description
 * Asynchronously create a temporary directory at location `tmp_dir`.
 * @param tmp_dir Optional directory where to create the temporary directory.
 * @return
 * Path to the temporary directory.
 */
export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
       (tmp_dir? : string | null) : Promise<string>
}
