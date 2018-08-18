import {createSelector} from "reselect";

export const filteredPlayers = createSelector(
  state => state.filters,
  state => state.players.list,
  ({name, position, age}, players) =>
    players
      .filter(player => (position ? player.position === position : true))
      .filter(
        player =>
          name ? player.name.toLowerCase().includes(name.toLowerCase()) : true
      )
      .filter(player => (age ? player.age === age : true))
);
