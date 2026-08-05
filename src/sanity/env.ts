export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "5exkp2or";

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

/**
 * Optional read token, only needed if the dataset's visibility is set to
 * "private" in Sanity. Public datasets (the default) work without it.
 */
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN;
