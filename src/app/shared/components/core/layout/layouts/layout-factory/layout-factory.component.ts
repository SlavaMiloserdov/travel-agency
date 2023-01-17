import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout-factory',
    templateUrl: './layout-factory.component.html',
    styleUrls: ['./layout-factory.component.scss'],
})
export class LayoutFactoryComponent implements OnInit, OnDestroy {
    isAdmin: boolean = false;

    constructor() {}

    ngOnInit(): void {
    }

    ngOnDestroy() {
    }

}
