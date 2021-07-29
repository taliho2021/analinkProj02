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
        route: 'cb'
    },

    {
        displayName: 'Clients',
        iconName: 'manage_accounts',
        route: 'clients',
        children: [
            {
                displayName: 'Importers Info',
                iconName: 'account_box',
                route: 'clients/importers'
            },

            {
                displayName: 'Customers Info',
                iconName: 'attach_money',
                route: 'clients/customers'
            }
        ]
    },

    {
        displayName: 'Vendors',
        iconName: 'person_search',
        route: 'vendors'
    },

    {
        displayName: 'Tables',
        iconName: 'grid_on',
        route: 'tables',
        children: [
            {
                displayName: 'Countries',
                iconName: 'add_chart',
                route: 'tables/countries'
            }
        ]
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