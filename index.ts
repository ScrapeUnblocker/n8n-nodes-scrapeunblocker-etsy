import { EtsySearchScraper } from './nodes/EtsySearchScraper/EtsySearchScraper.node';
import { ApifyApi } from './credentials/ApifyApi.credentials';

export const nodeTypes = [EtsySearchScraper];

export const credentialTypes = [ApifyApi];
