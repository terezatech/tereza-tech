export type ZettelkastenConfig = {
  notesDir: string;
  ignoreGroups?: string[];
  requiredMetadata?: string[];
  normalizeOnInit?: boolean;
  recommendationsLimit?: number;
  /**
   * https://date-fns.org/v2.29.3/docs/format
   */
  dateFormat?: string;
};

export const DEFAULT_CONFIG = {
  requiredMetadata: [],
  normalizeOnInit: false,
  recommendationsLimit: 5,
  dateFormat: 'PPP',
};
