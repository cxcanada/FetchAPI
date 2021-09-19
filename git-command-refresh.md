# **Git Commands**

>[Git Official Docs](https://git-scm.com/doc)

>[Bitbucket](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

## 1. **Basic commands**

```git
git init
```
- Initialized an empty Git repository or re-initializes an existing one. 
- It basically creates a `.git` directory with sub-directories and template files. 
- Running a `git init` in an existing repository will **NOT** overwrite things that are already there. It rather picks up the newly added templates.

#
```git
git add .
```
> [Gitbucket on Git add](https://www.atlassian.com/git/tutorials/saving-changes)
- This command updates the index using the current content found in the working tree and then prepares the content in the **staging** area for the next **commit**. 
- Before running the **commit** command, you must use the **add** command to add any new or modified files to the index.
- The `.` represents all files.
- `git add <file>` to add a single file or `git add <directory>` for a directory.


#
```git
git commit -m "commit message"
```
> [Bitbucket on Git commit](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)
- This command captures a snapshot of the project's currently staged changes. 
- Commited snapshots can be thought of as "safe" versions of a project - Git will never change them unless you explicitly ask it to. 
- Prior to the execution of `git commit`, The `git add` command is used to promote or **stage** changes to the project that will be stored in a commit.
- It is common practice to use the *presence tense* in commit messages. So rather than writing “added my first file” we write “add my first file”.



#
```git
git branch -M main
```
>[Bitbucket on Git branch](https://www.atlassian.com/git/tutorials/using-branches)
- Rename the current branch to `main`


#
```git
git remote add origin https://github.com/cxcanada/FetchAPI.git
```
- Connect the local repository to a remote server (remote repository).
- This command will map remote repository at server(github.com) to a ref in your local repository under `.git\refs\remotes\origin`.


#
```git
git push <remote> <branch>

git push -u origin main
```
>[Bitbucket on Git push](https://www.atlassian.com/git/tutorials/syncing/git-push)

- This command allows to publish our local branch `master` to the remote repository.
- The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repository. Remote branches are configured using the `git remote` command.
- `origin` represents the default remote repository name.
- `main` indicates the branch to be updated to/from is named `main` (the default branch name) 

#

## 2. **Weird parts definition**

### **origin**
In Git, "origin" is a shorthand name for the remote repository that a project was originally cloned from. More precisely, it is used instead of that original repository's URL - and thereby makes referencing much easier. Note that origin is by no means a "magical" name, but just a standard convention.