# githelp

asdf

## Install

```sh
$ npm i githelp -g
```

## Usage

```sh
$ githelp --help
```

Help output:

```
githelp <command>

Commands:
  githelp add                Add changes to the index in all repositories located in the source directory
  githelp checkout <branch>  Switch branches in all repositories located in the source directory
  githelp clone              Clone all repositories available to you by access token to the output directory
  githelp commit             Commit changes to the index in all repositories located in the source directory
  githelp merge-request      Create merge request in all repositories located in the source directory
  githelp pull               For all repositories located in the source directory changes from their remote repositories will be pulled
  githelp push               For all repositories located in the source directory push commited changes to appropriate remote repositories

Options:
  --version   Show version number  [boolean]
  -h, --help  Show help  [boolean]
```

## Available commands

* [add](#add)
* [checkout](#checkout)
* [clone](#clone)
* [commit](#commit)
* [merge-request](#merge-request)
* [pull](#pull)
* [push](#push)

### add

Help output:

```
githelp add

Add changes to the index in all repositories located in the source directory

Options:
  --version      Show version number  [boolean]
  -s, --source   The directory where the repositories are located in which you want to add changes to the index  [string] [default: "."]
  -v, --verbose  Show details about the result of running command  [boolean] [default: false]
  -h, --help     Show help  [boolean]
```

### checkout

Help output:

```
githelp checkout <branch>

Switch branches in all repositories located in the source directory

Options:
  --version      Show version number  [boolean]
  -s, --source   The directory where the repositories are located in which to switch branches  [string] [default: "."]
  -b             Apply -b flag to the 'git checkout' command if specified <branch> is not exists  [boolean] [default: false]
  -v, --verbose  Show details about the result of running command  [boolean] [default: false]
  -h, --help     Show help  [boolean]
```

### clone

Help output:

```
githelp clone

Clone all repositories available to you by access token to the output directory

Options:
  --version           Show version number  [boolean]
  -t, --access_token  Access token (now provide only gitlab access token)  [string] [required]
  -o, --output        Output directory  [string] [default: "./output"]
  --api_url           API URL (now provide only gitlab API). Examples of correct API URL's:
                        - https://gitlab.com/api/v4
                        - https://gitlab.example.xyz/api/v4
                        - gitlab.com
                        - gitlab.example.xyz  [string] [default: "https://gitlab.com/api/v4"]
  -p, --page          Page number  [number] [default: 1]
  --per_page          Number of items to list per page  [number] [default: 20]
  -g, --group         Clone only repositories of the specified group  [string]
  -u, --user          Clone only repositories of the specified user  [string]
  -a, --all           Clone all available repositories ('page' and 'per_page' options will be ignored)  [boolean] [default: false]
  -f, --force         Folders located in the output directory and having the same names as the cloned repositories will be deleted before cloning  [boolean] [default: false]
  -v, --verbose       Show details about the result of running command  [boolean] [default: false]
  --visibility        Visibility level (now provide only gitlab visibility levels: public, internal or private)  [string] [choices: "public", "internal", "private"] [default: "private"]
  -h, --help          Show help  [boolean]
```

### commit

Help output:

```
githelp commit

Commit changes to the index in all repositories located in the source directory

Options:
  --version      Show version number  [boolean]
  -s, --source   The directory where the repositories are located in which you want to commit changes  [string] [default: "."]
  -m, --message  Commit message  [string] [required]
  -v, --verbose  Show details about the result of running command  [boolean] [default: false]
  -h, --help     Show help  [boolean]
```

### merge-request

Help output:

```
githelp merge-request

Create merge request in all repositories located in the source directory

Options:
  --version               Show version number  [boolean]
  -t, --access_token      Access token (now provide only gitlab access token)  [string] [required]
  -s, --source            The directory where the repositories are located in which you want to create merge request  [string] [default: "."]
  --api_url               API URL (now provide only gitlab API). Examples of correct API URL's:
                            - https://gitlab.com/api/v4
                            - https://gitlab.example.xyz/api/v4
                            - gitlab.com
                            - gitlab.example.xyz  [string] [default: "https://gitlab.com/api/v4"]
  --source_branch         The source branch  [string] [required]
  --target_branch         The target branch  [string] [required]
  --title                 Title of MR  [string] [required]
  -v, --verbose           Show details about the result of running command  [boolean] [default: false]
  --remove_source_branch  Flag indicating if a merge request should remove the source branch when merging  [boolean] [default: false]
  --squash                Squash commits into a single commit when merging  [boolean] [default: false]
  -h, --help              Show help  [boolean]
```

### pull

Help output:

```
githelp pull

For all repositories located in the source directory changes from their remote repositories will be pulled

Options:
  --version      Show version number  [boolean]
  -s, --source   The directory where the repositories for which you want to pull changes are located  [string] [default: "."]
  -v, --verbose  Show details about the result of running command  [boolean] [default: false]
  -h, --help     Show help  [boolean]
```

### push

Help output:

```
githelp push

For all repositories located in the source directory push commited changes to appropriate remote repositories

Options:
  --version      Show version number  [boolean]
  -s, --source   The directory where the repositories for which you want to push commited changes are located  [string] [default: "."]
  -v, --verbose  Show details about the result of running command  [boolean] [default: false]
  -h, --help     Show help  [boolean]
```

## License

MIT.