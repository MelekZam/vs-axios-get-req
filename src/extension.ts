import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
  	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
		"sidebar",
		sidebarProvider
		)
  	);

	context.subscriptions.push(vscode.commands.registerCommand('vscode-extension.helloWorld', () => {
		vscode.window.showInformationMessage('yo yo yo yo from vscode-extension!');
	}));
}


export function deactivate() {}
