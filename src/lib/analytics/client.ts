import va from '@vercel/analytics';

export const clientAnalytics = {
  track: (eventName: string, properties?: Record<string, string | number | boolean>) => {
    va.track(eventName, properties);
  },
};