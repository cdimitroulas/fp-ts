import * as _ from '../../src/struct'
import { pipe } from '../../src/function'

declare const p1: {
  k1: string
  k2: number
}

declare const p2: {
  k1: number
}

const getK1 = _.prop('k1')
const getFoo = _.prop('foo')

pipe(p1, _.prop('k1')) // $ExpectType string
pipe(p2, _.prop('k1')) // $ExpectType number
pipe(p1, _.prop('foo')) // $ExpectError
pipe(p1, getK1) // $ExpectType string
pipe(p2, getK1) // $ExpectType number
pipe(p1, getFoo) // $ExpectError
