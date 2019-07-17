import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Transitions {
  default?: CSS.TransitionProperty
  button?: CSS.TransitionProperty
  input?: CSS.TransitionProperty
  checkbox?: CSS.TransitionProperty
  toggle?: CSS.TransitionProperty
  radio?: CSS.TransitionProperty
  navigation?: CSS.TransitionProperty
}

export const createBaseTransition = (
  type: string[],
  duration = 250,
  cubicBezier = '0.76, 0.24, 0.23, 0.94'
): CSS.TransitionProperty =>
  type
    .map((v): CSS.SingleTransition => `${v} ${duration}ms cubic-bezier(${cubicBezier}) 0ms`)
    .join(',')

const baseTransition = createBaseTransition(['all'])

function createTransition(transitions: Transitions): Transitions {
  const defaultTransitions: Transitions = {
    default: baseTransition,
    button: createBaseTransition(
      ['background-color', 'color', 'border-color', 'box-shadow', 'padding'],
      250
    ),
    input: createBaseTransition(['background-color', 'color', 'border-color'], 250),
    checkbox: baseTransition,
    toggle: baseTransition,
    radio: baseTransition,
    navigation: baseTransition
  }
  return deepMerge(transitions, defaultTransitions)
}

export default createTransition
