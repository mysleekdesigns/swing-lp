export interface BranchConfig {
  id: string;
  name: string;
  description: string;
  themeColor: string;
}

// Branch metadata (without URLs - those are constructed dynamically)
export const branchConfigs: BranchConfig[] = [
  {
    id: 'main',
    name: 'Dark Theme',
    description: 'Original dark theme with starfield',
    themeColor: 'oklch(0.7686 0.1647 70.0804)', // Primary purple
  },
  {
    id: '3dstars3',
    name: '3D Stars',
    description: '3D starfield variant',
    themeColor: 'oklch(0.4732 0.1247 46.2007)', // Accent orange
  },
  {
    id: 'lightv1',
    name: 'Light Theme',
    description: 'Modern light theme variant',
    themeColor: 'oklch(0.7686 0.1647 70.0804)', // Primary purple
  },
];

export interface VercelProjectInfo {
  projectName: string;
  team: string;
  isVercel: boolean;
}

/**
 * Parse Vercel URL to extract project and team information
 * Handles both production URLs (project.vercel.app) and preview URLs (project-git-branch-team.vercel.app)
 */
export function getVercelProjectInfo(hostname: string): VercelProjectInfo {
  // Check if we're on a Vercel deployment
  if (!hostname.includes('vercel.app')) {
    return { projectName: '', team: '', isVercel: false };
  }

  // Remove .vercel.app suffix
  const baseName = hostname.replace('.vercel.app', '');

  // Pattern: project-git-branch-team or project-team or just project
  const parts = baseName.split('-');

  // For production URLs like "swing-lp.vercel.app"
  if (parts.length <= 2) {
    return {
      projectName: baseName,
      team: '',
      isVercel: true,
    };
  }

  // For preview URLs like "swing-lp-git-main-mysleekdesigns.vercel.app"
  // Find the "git" keyword to identify the pattern
  const gitIndex = parts.indexOf('git');

  if (gitIndex > 0) {
    // Everything before "git" is the project name
    const projectName = parts.slice(0, gitIndex).join('-');

    // Everything after the branch name is the team
    // We need to skip the branch part (one segment after "git")
    const teamStartIndex = gitIndex + 2; // Skip "git" and branch name
    const team = parts.slice(teamStartIndex).join('-');

    return {
      projectName,
      team,
      isVercel: true,
    };
  }

  // Fallback: assume last part is team, rest is project
  return {
    projectName: parts.slice(0, -1).join('-'),
    team: parts[parts.length - 1],
    isVercel: true,
  };
}

/**
 * Construct a Vercel preview URL for a specific branch
 */
export function constructBranchUrl(
  branchId: string,
  projectInfo: VercelProjectInfo
): string {
  if (!projectInfo.isVercel) {
    // Not on Vercel, return localhost for development
    return 'http://localhost:3000';
  }

  // Normalize branch name for URL (lowercase, no special chars)
  const normalizedBranch = branchId.toLowerCase().replace(/[^a-z0-9]/g, '');

  // For production deployments without team
  if (!projectInfo.team) {
    // Main branch goes to production URL
    if (branchId === 'main') {
      return `https://${projectInfo.projectName}.vercel.app`;
    }
    // Other branches need team info, fall back to best guess
    return `https://${projectInfo.projectName}-git-${normalizedBranch}.vercel.app`;
  }

  // Construct preview URL: project-git-branch-team.vercel.app
  return `https://${projectInfo.projectName}-git-${normalizedBranch}-${projectInfo.team}.vercel.app`;
}

/**
 * Get the current branch based on the hostname
 * This helps identify which branch is currently being viewed
 */
export function getCurrentBranch(hostname: string): string {
  const normalized = hostname.toLowerCase();

  if (normalized.includes('3dstars3') || normalized.includes('3dstars3')) return '3dstars3';
  if (normalized.includes('lightv1')) return 'lightv1';
  return 'main';
}

/**
 * Get branch configurations with dynamically constructed URLs
 */
export function getBranches(hostname: string): Array<BranchConfig & { url: string }> {
  // Check for environment variable overrides first
  const envUrls: Record<string, string | undefined> = {
    main: process.env.NEXT_PUBLIC_MAIN_URL,
    '3dstars3': process.env.NEXT_PUBLIC_3DSTARS3_URL,
    lightv1: process.env.NEXT_PUBLIC_LIGHTV1_URL,
  };

  // Parse Vercel project info from current hostname
  const projectInfo = getVercelProjectInfo(hostname);

  // Map branch configs to include URLs
  return branchConfigs.map((branch) => ({
    ...branch,
    // Use env var if available, otherwise construct Vercel URL
    url: envUrls[branch.id] || constructBranchUrl(branch.id, projectInfo),
  }));
}
