export interface BranchConfig {
  id: string;
  name: string;
  description: string;
  url: string;
  themeColor: string;
}

export const branches: BranchConfig[] = [
  {
    id: 'main',
    name: 'Dark Theme',
    description: 'Original dark theme with starfield',
    url: process.env.NEXT_PUBLIC_MAIN_URL || 'http://localhost:3000',
    themeColor: 'oklch(0.7686 0.1647 70.0804)', // Primary purple
  },
  {
    id: '3dstars3',
    name: '3D Stars',
    description: '3D starfield variant',
    url: process.env.NEXT_PUBLIC_3DSTARS3_URL || 'http://localhost:3000',
    themeColor: 'oklch(0.4732 0.1247 46.2007)', // Accent orange
  },
  {
    id: 'lightv1',
    name: 'Light Theme',
    description: 'Modern light theme variant',
    url: process.env.NEXT_PUBLIC_LIGHTV1_URL || 'http://localhost:3000',
    themeColor: 'oklch(0.7686 0.1647 70.0804)', // Primary purple
  },
];

/**
 * Get the current branch based on the hostname
 * This helps identify which branch is currently being viewed
 */
export function getCurrentBranch(hostname: string): string {
  if (hostname.includes('3dstars3')) return '3dstars3';
  if (hostname.includes('lightv1')) return 'lightv1';
  return 'main';
}
