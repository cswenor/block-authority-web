export type ProjectType = 
  | 'strategic-consulting'
  | 'solution-development'
  | 'implementation'
  | 'training'
  | 'other';

export const projectTypeLabels: Record<ProjectType, string> = {
  'strategic-consulting': 'Strategic Consulting',
  'solution-development': 'Solution Development',
  'implementation': 'Implementation Services',
  'training': 'Training & Education',
  'other': 'Other / Not Sure Yet'
};