import propTypes from "prop-types";
import { Label } from "./getLabels/getLabels.type";

export const User = {
  login: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  node_id: propTypes.string.isRequired,
  avatar_url: propTypes.string.isRequired,
  gravatar_id: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  html_url: propTypes.string.isRequired,
  followers_url: propTypes.string.isRequired,
  following_url: propTypes.string.isRequired,
  gists_url: propTypes.string.isRequired,
  starred_url: propTypes.string.isRequired,
  subscriptions_url: propTypes.string.isRequired,
  organizations_url: propTypes.string.isRequired,
  repos_url: propTypes.string.isRequired,
  events_url: propTypes.string.isRequired,
  received_events_url: propTypes.string.isRequired,
  type: propTypes.any.isRequired,
  site_admin: propTypes.bool.isRequired,
};

export enum State {
  Open = "open",
  Closed = "closed",
}

export enum AuthorAssociation {
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  Member = "MEMBER",
  None = "NONE",
}

export const Reactions = {
  url: propTypes.string.isRequired,
  total_count: propTypes.number.isRequired,
  "+1": propTypes.number.isRequired,
  "-1": propTypes.number.isRequired,
  laugh: propTypes.number.isRequired,
  hooray: propTypes.number.isRequired,
  confused: propTypes.number.isRequired,
  heart: propTypes.number.isRequired,
  rocket: propTypes.number.isRequired,
  eyes: propTypes.number.isRequired,
};

export const PullRequest = {
  url: propTypes.string.isRequired,
  html_url: propTypes.string.isRequired,
  diff_url: propTypes.string.isRequired,
  patch_url: propTypes.string.isRequired,
  merged_at: null,
};

export const Issues = {
  url: propTypes.string.isRequired,
  repository_url: propTypes.string.isRequired,
  labels_url: propTypes.string.isRequired,
  comments_url: propTypes.string.isRequired,
  events_url: propTypes.string.isRequired,
  html_url: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  node_id: propTypes.number.isRequired,
  number: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  user: User,
  labels: Label, //this array Label[]  ,
  state: State,
  locked: propTypes.bool.isRequired,
  assignee: null,
  assignees: propTypes.arrayOf(propTypes.any.isRequired).isRequired,
  milestone: null,
  comments: propTypes.number.isRequired,
  created_at: propTypes.string.isRequired,
  updated_at: propTypes.string.isRequired,
  closed_at: null,
  author_association: AuthorAssociation,
  active_lock_reason: null,
  body: propTypes.string.isRequired,
  reactions: Reactions,
  timeline_url: propTypes.string.isRequired,
  performed_via_github_app: null,
  state_reason: propTypes.bool.isRequired,
  draft: propTypes.bool,
  pull_request: PullRequest,
};

export enum Type {
  User = "User",
}
export type Issues = propTypes.InferProps<typeof Issues>;
