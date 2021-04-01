import * as _ from '../../src/struct'
import { pipe } from '../../src/function'

declare const s1: { k1: string, k2: number }
declare const s2: { k1: number }

//
// prop
//

const getK1 = _.prop('k1')
const getFoo = _.prop('foo')

pipe(s1, _.prop('k1')) // $ExpectType string
pipe(s1, _.prop('k2')) // $ExpectType number
pipe(s2, _.prop('k1')) // $ExpectType number
pipe(s1, _.prop('foo')) // $ExpectError
pipe(s1, getK1) // $ExpectType string
pipe(s2, getK1) // $ExpectType number
pipe(s1, getFoo) // $ExpectError
