import axios from "axios";

export interface GithubAccount {
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
	name: string;
	company: string;
	blog: string;
	location: string;
	email: string;
	hireable: boolean;
	bio: string;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: Date;
	updated_at: Date;
}

export const getUser = async (git_username: string): Promise<GithubAccount> => {
	try {
		const { data } = await axios.get(
			`https://api.github.com/users/${git_username}`
		);
		return data;
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
};

export const getActivity = async (git_username: string): Promise<any> => {
	try {
		const { data } = await axios.get(
			`https://api.github.com/users/${git_username}/events`
		);
		return data;
	} catch (error) {
		console.error(error);
		throw new Error(error);
	}
};
