type EventType =
	| "CommitCommentEvent"
	| "CreateEvent"
	| "DeleteEvent"
	| "GollumEvent"
	| "ForkEvent"
	| "IssuesEvent"
	| "MemberEvent"
	| "IssueCommentEvent"
	| "MemberEvent"
	| "PullRequestEvent"
	| "PullRequestReviewEvent"
	| "PullRequestReviewCommentEvent"
	| "PushEvent"
	| "ReleaseEvent"
	| "SponsorshipEvent"
	| "WatchEvent";

export interface GithubEvent {
	id: number;
	type: string | EventType;
	actor: {
		id: number;
		login: string;
		display_login: string;
		gravatar_id: string;
		url: string;
		avatar_url: string;
	};
	repo: {
		id: number;
		name: string;
		url: string;
	};
	payload: any;
	created_at?: Date;
	public?: boolean;
}
