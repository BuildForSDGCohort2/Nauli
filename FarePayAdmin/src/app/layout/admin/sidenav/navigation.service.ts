import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/link
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    selectedItem: IMenuItem;

    constructor() {
    }

    defaultMenu: IMenuItem[] = [

        {
            name: 'Dashboard',
            type: 'link',
            tooltip: 'Documentation',
            icon: 'assets/icons/dashboard.png',
            state: '/dashboard'
        },
        {
            name: 'Users',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Administrator', name: 'Owners', state: '/owners', type: 'link' },
                { icon: 'i-Engineering', name: 'Drivers', state: '/drivers', type: 'link' },
                { icon: 'i-Male', name: 'Touts', state: '/touts', type: 'link' },
            ]
        },
        {
            name: 'Vehicles',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [
                { icon: 'i-Jeep', name: 'Vehicle List', state: '/vehicles', type: 'link' },
                { icon: 'i-Tag-4', name: 'Vehicle Types', state: '/vehicle-types', type: 'link' },
            ]
        },
        {
            name: 'Trips',
            type: 'dropDown',
            tooltip: 'Documentation',
            icon: 'assets/icons/dashboard.png',
            state: '/trips',
            sub: [
                { icon: 'i-Jeep', name: 'Recorded Trips', state: '/trips', type: 'link' },
                { icon: 'i-Map', name: 'SACCO Routes', state: '/routes', type: 'link' },
            ]
        },
        {
            name: 'Passengers',
            type: 'link',
            tooltip: 'Documentation',
            icon: 'assets/icons/menu.png',
            state: '/passengers'
        },
        {
            name: 'Payments',
            type: 'link',
            tooltip: 'Documentation',
            icon: 'assets/icons/menu.png',
            state: '/payments/list'
        },
        // {
        //     name: 'Reports',
        //     description: 'Under construction.',
        //     type: 'link',
        //     tooltip: 'Documentation',
        //     icon: 'assets/icons/order.png',
        //     state: '/reports/list'
        // },

        
    ];

    mohMenu: IMenuItem[] = [

        {
            name: 'Dashboard',
            type: 'link',
            tooltip: 'Documentation',
            icon: 'assets/icons/dashboard.png',
            state: '/dashboard'
        },

        {
            name: 'Vehicles',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'link',
            icon: 'i-Library',
            state: '/vehicles'
        },
        {
            name: 'Trips',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'link',
            tooltip: 'Documentation',
            icon: 'assets/icons/dashboard.png',
            state: '/trips',
        },
        {
            name: 'Passengers',
            type: 'link',
            tooltip: 'Documentation',
            icon: 'assets/icons/menu.png',
            state: '/passengers'
        },
        // {
        //     name: 'Payments',
        //     type: 'link',
        //     tooltip: 'Documentation',
        //     icon: 'assets/icons/menu.png',
        //     state: '/payments/list'
        // },
        // {
        //     name: 'Reports',
        //     description: 'Under construction.',
        //     type: 'link',
        //     tooltip: 'Documentation',
        //     icon: 'assets/icons/order.png',
        //     state: '/reports/list'
        // },

        
    ];



    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    mohMenuItems = new BehaviorSubject<IMenuItem[]>(this.mohMenu);
    // navigation component has subscribed to this Observable
    mohMenuItems$ = this.mohMenuItems.asObservable();


    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }
}
