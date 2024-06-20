import { z } from "zod"

import { createDedupeFn } from "@/lib/utils"

export const fetchPost = createDedupeFn(
  z.object({ id: z.number() }),
  async ({ id }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
      id,
      title: "Lorem ipsum dolor sit amet",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Duo Reges: constructio interrete.
        Quae cum dixisset, finem ille. Quae cum essent dicta, discessimus.
        Quae similitudo in genere etiam humano apparet. Quae quidem vel cum periculo est quaerenda vobis;`,
    }
  },
)
