# Website maintenance and GitHub synchronization

This project is the website for Illa Llinares. The user has authorized automatic commits, uploads and merges for requested website changes.

- GitHub repository: `illa-llinares/claridad-sistemica`, default branch `main`.
- Use the GitHub plugin connection for `illa-llinares`; do not use another account.
- Sites project: `appgprj_6ac61c1680f88191a40f810f29c363a4`.
- Website source is in `dist/`. Keep the existing Sites publication workflow.
- After completing and verifying an authorized website edit, synchronize it to GitHub in the same task. Do not wait for the hourly catch-up check when synchronization can be done immediately.

## Synchronization procedure

1. Read the local `.github-sync-state.json` if present. It records the last synchronized GitHub commit and per-file Git blob SHAs. Never commit this local state file.
2. Read the latest `main` commit and recursive tree through the GitHub plugin. Compare local files and the remote tree with the recorded baseline. Include only this website project, never sibling project files or `sources/`.
3. Upload locally changed files as blobs, build a tree on the current remote tree, create a commit, and update a new `codex/site-sync-*` branch. Keep unrelated remote files. Delete files only when their deletion is an intentional local website change and their remote blob still matches the baseline.
4. If both local and remote modified a file differently, merge compatible changes and verify them. If a conflict cannot be resolved confidently, leave it pending and report it; never force-push or silently overwrite the remote change. Remote-only changes should be preserved and reconciled into the local checkout before later website publication.
5. Create a pull request to `main`, attach it to the current Codex task, inspect the resulting diff and relevant checks, then merge it using the expected PR head SHA. Merge only this synchronization's changes; never automatically merge unrelated pull requests.
6. Verify the final remote tree against the intended file hashes, then atomically update the local state file with the merged GitHub commit and synchronized file hashes. Commit any requested website changes locally as well. Do not make empty commits or pull requests.

Check JavaScript syntax and the relevant website behavior for actual edits. Keep credentials, tokens, private documents and temporary artifacts out of GitHub. Do not change repository visibility or the website's publication settings as part of synchronization.
