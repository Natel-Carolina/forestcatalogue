import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" ${filepath}`);
    file.data.astro.frontmatter.lastModified = result.toString();
  };
}
export function remarkPublishedTime() {
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(
      `git log --reverse --pretty="format:%cI" ${filepath}`,
    );
    file.data.astro.frontmatter.pubDate = result.toString().split("\n")[0];
  };
}
