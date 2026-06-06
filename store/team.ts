import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
  state: () => ({
    budget: 100, // In milioni
    players: [] as Array<{ id: number; name: string; position: string; price: number }>,
  }),

  getters: {
    remainingBudget(state) {
      return state.budget;
    },
  },

  actions: {
    addPlayer(player: { id: number; name: string; position: string; price: number }) {
      if (player.price <= this.budget) {
        this.players.push(player);
        this.budget -= player.price;
      } else {
        throw new Error('Budget insufficiente!');
      }
    },

    removePlayer(playerId: number) {
      const index = this.players.findIndex((p) => p.id === playerId);
      if (index !== -1) {
        this.budget += this.players[index].price;
        this.players.splice(index, 1);
      }
    },
  },
});