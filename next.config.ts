import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const githubRepository = process.env.GITHUB_REPOSITORY || "";
const repositoryName = githubRepository.includes("/")
  ? githubRepository.split("/")[1]
  : "";
const githubPagesBasePath =
  isGitHubActions && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
