import va from '@vercel/analytics';

export const clientAnalytics = {
  track: (eventName: string, properties?: Record<string, any>) => {
    va.track(eventName, properties);
  },
};