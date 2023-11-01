<template>
    <div class="h-4/5 flex flex-col justify-between gap-50 overflow-y-scroll">
      <div class="flex flex-col gap-13">
        <LinkSection
        v-for="(item, index) in links"
        :key="index"
        :item="item"
        />
      </div>

      <div class="flex flex-col gap-5">
        <LinkSection
        v-for="(item, index) in bottomLinks"
        :key="index"
        :item="item"
        />
      </div>
    </div>
</template>

<script>
import LinkSection from './LinkSection'; 
export default {
name: 'SidebarLinks',
components: {
    LinkSection, 
},
data() {
    return {
    links: [
        {
            links : [
                {
                    text : 'Get Started',
                    path : '/get-started',
                    icon : "globe.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'Dashboard',
                    path : '/dashboard',
                    icon : "dashboard.svg",
                    hasSubMenu : false,
                },
            ]
        },
        {
            title : "Payments",
            links : [
                {
                    text : 'Transactions',
                    path : '/transactions',
                    icon : "transactions.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'People',
                    path : '/people',
                    icon : "people.svg",
                    hasSubMenu : true,
                },
                {
                    text : 'Settlements',
                    path : '/settlements',
                    icon : "settlements.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'Payout',
                    path : '/payout',
                    icon : "payout.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'VNUBANs',
                    path : '/VNUBANs',
                    icon : "tower.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'Subaccounts',
                    path : '/Subaccounts',
                    icon : "bank.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'DD Mandates',
                    path : '/DD-Mandates',
                    icon : "note.svg",
                    hasSubMenu : false,
                },
            ]
        },
        {
            title : "Others",
            links : [
                {
                    text : 'Audit Trails',
                    path : '/Audit-Trails',
                    icon : "audit.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'Teams',
                    path : '/Teams',
                    icon : "teams.svg",
                    hasSubMenu : false,
                },
                {
                    text : 'Development',
                    path : '/Development',
                    icon : "code.svg",
                    hasSubMenu : false,
                },
            ]
        },

        ],
    bottomLinks: [
            {
                links : [
                    {
                        text : 'Settings',
                        path : '/Settings',
                        icon : "settings.svg",
                        hasSubMenu : false,
                    },
                    {
                        text : 'Logout',
                        path : '/Logout',
                        icon : "logout.svg",
                        hasSubMenu : false,
                    },
                ]
            }
        ],
    };
},
};
</script>
 