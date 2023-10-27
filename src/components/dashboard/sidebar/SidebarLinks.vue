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
                    path : '/',
                    icon : "globe.png"
                },
                {
                    text : 'Dashboard',
                    path : '/',
                    icon : "dashboard.png"
                },
            ]
        },
        {
            title : "Payments",
            links : [
                {
                    text : 'Transactions',
                    path : '/',
                    icon : "transactions.png"
                },
                {
                    text : 'People',
                    path : '/',
                    icon : "people.png"
                },
                {
                    text : 'Settlements',
                    path : '/',
                    icon : "settlements.png"
                },
                {
                    text : 'Payout',
                    path : '/',
                    icon : "payout.png"
                },
                {
                    text : 'VNUBANs',
                    path : '/',
                    icon : "tower.png"
                },
                {
                    text : 'Subaccounts',
                    path : '/',
                    icon : "bank.png"
                },
                {
                    text : 'DD Mandates',
                    path : '/',
                    icon : "note.png"
                },
            ]
        },
        {
            title : "Others",
            links : [
                {
                    text : 'Audit Trails',
                    path : '/',
                    icon : "audit.png"
                },
                {
                    text : 'Teams',
                    path : '/',
                    icon : "teams.png"
                },
                {
                    text : 'Development',
                    path : '/',
                    icon : "code.png"
                },
            ]
        },

        ],
    bottomLinks: [
            {
                links : [
                    {
                        text : 'Settings',
                        path : '/',
                        icon : "settings.png"
                    },
                    {
                        text : 'Logout',
                        path : '/',
                        icon : "logout.png"
                    },
                ]
            }
        ],
    };
},
};
</script>
 