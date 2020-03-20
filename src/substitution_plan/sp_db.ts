import {getDbResults} from "../Server/src/utils/database";

/** Adds a new substitution plan to the history */
export const getSubstitutionPlanVersion = async (date: string, updated: string): Promise<string | undefined> => {
    const result = (await getDbResults(`SELECT * FROM data_substitution_plan_history WHERE date_time='${date}' AND updated='${updated}';`))[0];
    if (!result) {
        return undefined;
    }
    return result.data;
};