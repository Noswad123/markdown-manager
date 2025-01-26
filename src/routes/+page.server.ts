import { getMdFiles } from "$lib/server/db";
import type { PageServerLoad } from "./$types";

export const load = (() => {
  const mdFiles = getMdFiles();
  return {mdFiles};
}) satisfies PageServerLoad;
