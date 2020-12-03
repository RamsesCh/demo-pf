import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[appDateLogin]'
})
export class DateLoginDirective {
	allowedKeys: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	constructor(private el: ElementRef, private control: NgControl) {
	}


	@HostListener('input', ['$event'])
	onKeyDown(event) {
		const input = event.target as HTMLInputElement;
		input.value = input.value.replace(/[^0-9/-]/g, '');
		if (this.allowedKeys.indexOf(event.data) != -1) {
			input.value = this.formatDataFront(input.value);
			this.control.control.patchValue(input.value);
		}
	}

	/* format date */
	formatDataControl(value: string) {
		return value.replace(/[\/]/g,'-');
	}
	/* format  */
	formatDataFront(value: string) {
		let res = value;
		switch (value.length) {
			case 2:
			case 5:
				res = res + '/'
				break;
		}
		return res;
	}

}
