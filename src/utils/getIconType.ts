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

export const getIconType = (type: EventType | string): string => {
	switch (type) {
		case "CommitCommentEvent":
			return `<i class="feather-git-commit"></i>`;
		case "CreateEvent":
			return `<i class="feather-git-branch"></i>`;
		case "DeleteEvent":
			return `<i class="feather-git-branch"></i>`;
		case "ForkEvent":
			return `<i class="feather-package"></i>`;
		case "GollumEvent":
			return `<i class="feather-trash"></i>`;
		case "IssuesEvent":
			return `<i class="feather-flag"></i>`;
		case "MemberEvent":
			return `<i class="feather-user-plus"></i>`;
		case "IssueCommentEvent":
			return `<i class="feather-git-commit"></i>`;
		case "PullRequestEvent":
			return `<i class="feather-git-pull-request"></i>`;
		case "PullRequestReviewEvent":
			return `<i class="feather-git-pull-request"></i>`;
		case "PullRequestReviewCommentEvent":
			return `<i class="feather-git-pull-request"></i>`;
		case "PushEvent":
			return `<i class="feather-git-merge"></i>`;
		case "ReleaseEvent":
			return `<i class="feather-git-tag"></i>`;
		case "SponsorshipEvent":
			return `<i class="feather-gitlab"></i>`;
		case "WatchEvent":
			return `<i class="feather-watch"></i>`;
		default:
			return `<i class="feather-github"></i>`;
	}
};
