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
            },


        ]
    },

    {
        displayName: 'Vendors',
        iconName: 'person_search',
        route: 'vendors',
        children: [
          {
            displayName: 'Ng Grid Form',
            iconName: 'add_chart',
            route: 'vendors/details'
          }
        ]
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
            },

            {
              displayName: 'States',
              iconName: 'attach_money',
              route: 'tables/states'
            },

            {
              displayName: 'Clients',
              iconName: 'person',
              route: 'tables/clients'
            },

            {
              displayName: 'Importers',
              iconName: 'attach_money',
              route: 'tables/importer'
            },

            {
              displayName: 'Sample Forms',
              iconName: 'dashboard',
              route: 'tables/samples',
              children: [{
                displayName: 'Angular Material Form',
                iconName: 'attach_money',
                route: 'tables/samples/ang'
              },

              {
                displayName: ' Ng Bootstrap Form',
                iconName: 'assignment',
                route: 'tables/samples/ng'
              },

              {
                displayName: 'Ng Grid Form',
                iconName: 'add_chart',
                route: 'tables/samples/ngGrid'
              }

              ]
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
    },

    {
        displayName: 'My Charts',
        iconName: 'grid_4x4',
        route: 'varCharts',
        children:[
          {
            displayName: 'Bubble Chart',
            iconName: 'event_note',
            route: 'varCharts/bubble'
          },

          {
            displayName: 'Bar Chart',
            iconName: 'bar_chart',
            route: 'varCharts/bar'
          },

          {
            displayName: ' Doughnut Chart',
            iconName: 'multiline_chart',
            route: 'varCharts/doughnut'
          },

          {
            displayName: 'Line Chart',
            iconName: 'stacked_line_chart',
            route: 'varCharts/line'
          },

          {
            displayName: 'Pie Chart',
            iconName: 'pie_chart_outline',
            route: 'varCharts/pie'
          },

          {
            displayName: 'Radar Chart',
            iconName: 'show_chart',
            route: 'varCharts/radar'

          }
        ]
}



]
