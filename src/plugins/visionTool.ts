import { visionTool } from '@sanity/vision';

const VISION_TOOL = visionTool({
  // Note: These are both optional
  defaultApiVersion: 'v2021-10-21',
  defaultDataset: import.meta.env.SANITY_STUDIO_DATASET,
});

export default VISION_TOOL;
