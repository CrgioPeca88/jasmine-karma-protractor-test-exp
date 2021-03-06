// Dependencies
import { Injectable, Type } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


// Assets
import { AlertDialogComponent, ConfigDialog } from '@shared/components/alert-dialog/alert-dialog.component';
import { NotifyComponent } from '@shared/components/notify/notify.component';

@Injectable({
	providedIn: 'root'
})
export class MaterialService {

	constructor(
		private matDialog: MatDialog,
		private snackBar: MatSnackBar) { }

	private open<C>(data, widthDialog: string, component: Type<C>): MatDialogRef<C> {
		return this.matDialog.open(component, {
			width: widthDialog,
			data: data
		});
	}

	openDialog(
		icon: string,
		msg: string,
		widthDialog: string,
		isConfirmDialog?: boolean,
		configDialog?: ConfigDialog): MatDialogRef<AlertDialogComponent> {

		let data: any = {
			icon: icon,
			message: msg,
			isConfirmDialog: isConfirmDialog,
			config: configDialog
		}
		return this.open<AlertDialogComponent>(data, widthDialog, AlertDialogComponent);
	}

	openComponentDialog<C>(data: any, widthDialog: string, component: Type<C>): MatDialogRef<C> {
		return this.open<C>(data, widthDialog, component);
	}

	showNotify(message: string, icon: string, duration: number, messageType?: string): void {
		this.snackBar.openFromComponent(NotifyComponent, {
			duration: duration,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: ['notify-panel'],
			data: {
				icon: icon,
				message: message,
				messageType: messageType
			}
		});
	}

}
