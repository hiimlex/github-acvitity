import axios from "axios";

import type { GithubAccount } from "../models/githubAccount";
import type { GithubEvent } from "../models/githubEvent";

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

export const getActivity = async (
	git_username: string
): Promise<GithubEvent[]> => {
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
