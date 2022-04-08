const HelpCommand = require("./default/HelpCommand");
const KickCommand = require("./default/KickCommand");
const SayCommand = require("./default/SayCommand");
const StopCommand = require("./default/StopCommand");
const TitleCommand = require("./default/TitleCommand");

class CommandRegisterer {
    constructor(server){
        let commandMap = server.getCommandMap();
        commandMap.register(new StopCommand);
        commandMap.register(new SayCommand);
        commandMap.register(new TitleCommand);
        commandMap.register(new HelpCommand);
        commandMap.register(new KickCommand);
    }
}

module.exports = CommandRegisterer;