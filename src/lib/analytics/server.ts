import { track as vercelTrack } from '@vercel/analytics/server';

export const serverAnalytics = {
  track: (eventName: string, properties?: Record<string, string | number | boolean>) => {
    vercelTrack(eventName, properties);
  },
};