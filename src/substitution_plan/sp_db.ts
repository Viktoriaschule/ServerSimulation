import { getDbResults } from "../Server/src/utils/database";

/** Adds a new substitution plan to the history */
export const getSubstitutionPlanVersion = async (updated: string): Promise<string | undefined> => {
    const result = (await getDbResults(`SELECT * FROM data_substitution_plan WHERE updated='${updated}';`))[0];
    if (!result) {
        return undefined;
    }
    return result.data;
}