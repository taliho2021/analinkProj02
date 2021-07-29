import { NavItem } from './nav-item';

export let menu: NavItem[] = [
    {
        displayName: 'Dashboard',
        iconName: 'dashboard',
        route: 'dashboard'
    },

    {
        displayName: 'Customs Brokerage',
        iconName: 'face',
        route: 'cb',
        children: [
            {
                displayName: 'Account Info',
                iconName: 'account_box',
                route: 'user/account-info'
            }
        ]
    },

    {
        displayName: 'Clients',
        iconName: 'manage_accounts',
        route: 'clients'
    },

    {
        displayName: 'Vendors',
        iconName: 'person_search',
        route: 'vendors'
    },

    {
        displayName: 'Tables',
        iconName: 'grid_on',
        route: 'tables'
    },

    {
        displayName: 'Reports',
        iconName: 'receipt_long',
        route: 'reports'
    },

    {
        displayName: 'ISF',
        iconName: 'wifi',
        route: 'isf'
    },

    {
        displayName: 'AMS',
        iconName:'feed',
        route: 'ams'
    }

    

]