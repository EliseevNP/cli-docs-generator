# githelp

## Install

```sh
$ npm i githelp -g
```

## Usage

```sh
$ githelp --help
```

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

## License

MIT.