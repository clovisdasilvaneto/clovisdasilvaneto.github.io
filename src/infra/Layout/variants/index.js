import SelfPromotion from "./SelfPromotion"
import Short from "./Short"

export const SELF_PROMOTION = "SELF_PROMOTION"
export const SHORT = "SHORT"

const VARIANTS_MAPPER = {
  [SELF_PROMOTION]: SelfPromotion,
  [SHORT]: Short,
}

export default VARIANTS_MAPPER
