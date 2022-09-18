<template>
    <v-navigation-drawer v-model="drawer" app>
      <v-card height="100%" class="mx-auto">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6"> Todo App </v-list-item-title>
              <v-list-item-subtitle>Developer Todo App</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <!-- <v-chip
      class="ma-2"
      color="primary"
      outlined
      pill
    >
      User Account
      <v-icon right>
        mdi-account-outline
      </v-icon>
    </v-chip> -->
        </v-navigation-drawer>
      </v-card>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ['drawer'],
      data: () => ({
        items: [
          { title: "Home", icon: "mdi-home", to: "/" },
          { title: "About", icon: "mdi-help-box", to: "/about" },
          { title: "User Account", icon: "mdi-account-outline", to: "/user" },
        ],
      }),   
    };
    </script>