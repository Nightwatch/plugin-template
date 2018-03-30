# Module Template
 > Template to quickly create new modules for the bot.

########
## Note:
Features include both general features that the module adds, and things that don't require commands.

If you write an auto-moderation module, it may do things in the background without needing a command.
Example:
### Features
 * Swear filter: Deletes messages that contain naughty language.
 * Active spam/raid prevention: Detects spam and prevents raids.

## Code Structure
 * Develop all commands in `src/commands/<command group>`
    * Example: `src/commands/music/PlayCommand.ts`
 * Place any code that isn't a command and doesn't need to be shared outside the module in `src/lib/`
 * If you need a non-command to be shared outside your module, it should be placed in the **util** package/repository.

## Code Style
  * Follow the same code style used in the other projects in the repository.
  * The included dependencies should help enforce most things.
  * Try to keep the commands small, refactor out most logic if possible, and place it in the `src/lib/` directory.
########

<<-- DELETE EVERYTHING ABOVE -->>

# Module Name
 > Brief description of module.

## Features
  * Module feature 1: Feature description
  * Module feature 2: Feature description
  * etc.

## Commands
  * `?moduleCommand1`: Command description
  * `?moduleCommand2`: Command description
  * etc.

## Installation
All modules should be installed in the `modules/` directory of the bot. Modules are automatically loaded and registered when the bot starts.
