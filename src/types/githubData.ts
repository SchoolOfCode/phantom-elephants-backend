interface IOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface IRepoPermissions {
  admin: boolean;
  push: boolean;
  pull: boolean;
}

interface IAppPermissions {
  metadata: string;
  contents: string;
  issues: string;
  single_file: string;
}

interface IRepoInfo {
  id: number;
  url: string;
  name: string;
}

interface ILicense {
  key: string;
  name: string;
  url: string;
  spdx_id: string;
  node_id: string;
  html_url: string;
}

interface ITemplateRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string;
  language: Record<string, number> | null;
  forks: number;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  watchers: number;
  size: number;
  default_branch: string;
  open_issues: number;
  open_issues_count: number;
  is_template: boolean;
  license: ILicense;
}

interface IRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string;
  language: Record<string, number> | null;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: Array<string>;
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: false;
  visibility: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions: IRepoPermissions;
  template_repository: ITemplateRepository;
}

interface IApp {
  id: number;
  slug: string;
  node_id: string;
  owner: IOwner;
  name: string;
  description: string;
  external_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  permissions: IAppPermissions;
  events: Array<string>;
}

interface IOutput {
  title: string;
  summary: string;
  text: string;
  annotations_count: number;
  annotations_url: string;
}

interface IBranch {
  ref: string;
  sha: string;
  repo: IRepoInfo;
}

interface IPullRequest {
  url: string;
  id: number;
  number: number;
  head: IBranch;
  base: IBranch;
}

interface ICheckRun {
  id: number;
  head_sha: string;
  node_id: string;
  external_id: string;
  url: string;
  html_url: string;
  details_url: string;
  status: string;
  conclusion: string;
  started_at: string;
  completed_at: string;
  output: IOutput;
  name: string;
  check_suite: Record<string, number>;
  app: IApp;
  pull_requests: Array<IPullRequest>;
}
