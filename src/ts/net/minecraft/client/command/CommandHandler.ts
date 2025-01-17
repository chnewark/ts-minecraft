import HelpCommand from "./command/HelpCommand.js";
import TimeCommand from "./command/TimeCommand.js";
import TeleportCommand from "./command/TeleportCommand.js";
import Command from "./Command.js";
import Minecraft from "../../../../../js/net/minecraft/client/Minecraft.js";

export default class CommandHandler {

    public commands: Command[] = [];
    private minecraft: Minecraft;

    constructor(minecraft: Minecraft) {
        this.minecraft = minecraft;
        this.commands.push(new HelpCommand());
        this.commands.push(new TimeCommand());
        this.commands.push(new TeleportCommand());
    }

    handleMessage(message: string) {
        let args = message.split(" ");
        let command = args[0].toLowerCase();
        this.handleCommand(command, args.slice(1));
    }

    handleCommand(command: string, args: string[]) {
        for (let i = 0; i < this.commands.length; i++) {
            let commandExecutor = this.commands[i];
            if (commandExecutor.command === command) {
                if (!this.commands[i].execute(this.minecraft, args)) {
                    this.minecraft.addMessageToChat("/" + commandExecutor.command + " " + commandExecutor.usage);
                }
                return;
            }
        }
        this.minecraft.addMessageToChat("Unknown command! Type \"/help\" for help.");
    }
}