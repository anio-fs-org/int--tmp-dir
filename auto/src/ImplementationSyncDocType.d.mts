/* define and describe your function api here */
/**
 * @brief Synchronously create a temporary directory.
 * @description
 * Synchronously create a temporary directory at location `tmp_dir`.
 * @param tmp_dir Optional directory where to create the temporary directory.
 * @return
 * Path to the temporary directory.
 */
export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
     (tmp_dir? : string | null) : string
}
