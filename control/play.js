// import WrapperPlay from "./wrapper-play.vue";
import { PagePlay } from "@view";
import { inject } from "vue";

import { bind } from "./bind";
import { handle } from "./handle";

const routePlayName = "play";

export const routePlay = {
  component: PagePlay,
  name: routePlayName,
  path: `/${routePlayName}`,
  props: () => {
    const state = inject("state");

    const status = bind({ name: "status", state });
    const player = bind({ name: "player", state });
    const fill = bind({ name: "board", state });
    const onCellClick = payload => handle({ name: "move", payload, state });

    return { fill, onCellClick, player, status };
  },
};
