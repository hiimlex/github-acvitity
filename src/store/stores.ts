import { writable } from "svelte/store";
import type { GithubAccount } from "../api/services/git";

export const user = writable(null);
