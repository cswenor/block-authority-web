import { track as vercelTrack } from '@vercel/analytics/server';

export const serverAnalytics = {
  track: (eventName: string, properties?: Record<string, any>) => {
    vercelTrack(eventName, properties);
  },
};