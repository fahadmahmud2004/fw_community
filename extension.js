// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    myStatusBarItem.text = "$(globe) Freaking Waves";
    myStatusBarItem.tooltip = "Click to visit Freaking Waves YouTube Channel";
    myStatusBarItem.command = "fw-community.openYoutube";
    myStatusBarItem.show();

    let openYoutube = vscode.commands.registerCommand("fw-community.openYoutube", () => {
        vscode.env.openExternal(vscode.Uri.parse("https://www.youtube.com/@FreakingWaves"));
    });

    context.subscriptions.push(myStatusBarItem, openYoutube);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
