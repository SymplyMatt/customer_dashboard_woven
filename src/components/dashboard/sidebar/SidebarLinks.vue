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
                    icon : "globe.png",
                    hasSubMenu : false,
                },
                {
                    text : 'Dashboard',
                    path : '/dashboard',
                    icon : "dashboard.png",
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
                    icon : "transactions.png",
                    hasSubMenu : false,
                },
                {
                    text : 'People',
                    path : '/people',
                    icon : "people.png",
                    hasSubMenu : true,
                },
                {
                    text : 'Settlements',
                    path : '/settlements',
                    icon : "settlements.png",
                    hasSubMenu : false,
                },
                {
                    text : 'Payout',
                    path : '/payout',
                    icon : "payout.png",
                    hasSubMenu : false,
                },
                {
                    text : 'VNUBANs',
                    path : '/VNUBANs',
                    icon : "tower.png",
                    hasSubMenu : false,
                },
                {
                    text : 'Subaccounts',
                    path : '/Subaccounts',
                    icon : "bank.png",
                    hasSubMenu : false,
                },
                {
                    text : 'DD Mandates',
                    path : '/DD-Mandates',
                    icon : "note.png",
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
                    icon : "audit.png",
                    hasSubMenu : false,
                },
                {
                    text : 'Teams',
                    path : '/Teams',
                    icon : "teams.png",
                    hasSubMenu : false,
                },
                {
                    text : 'Development',
                    path : '/Development',
                    icon : "code.png",
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
                        icon : "settings.png",
                        hasSubMenu : false,
                    },
                    {
                        text : 'Logout',
                        path : '/Logout',
                        icon : "logout.png",
                        hasSubMenu : false,
                    },
                ]
            }
        ],
    };
},
};
</script>
 