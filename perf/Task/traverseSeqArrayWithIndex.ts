import * as Benchmark from 'benchmark'
import * as A from '../../src/Array'
import * as _ from '../../src/Task'
import { pipe } from '../../src/function'

/*
A.traverseWithIndex(_.ApplicativeSeq) x 310 ops/sec ±10.89% (31 runs sampled)
_.traverseSeqArrayWithIndex x 1,324 ops/sec ±6.92% (20 runs sampled)
Fastest is _.traverseSeqArrayWithIndex
*/

const suite = new Benchmark.Suite()

const as = A.range(0, 1000)

suite
  .add('A.traverseWithIndex(_.ApplicativeSeq)', function () {
    return pipe(
      as,
      A.traverseWithIndex(_.ApplicativeSeq)((_i, a) => _.of(a))
    )()
  })
  .add('_.traverseSeqArrayWithIndex', function () {
    return pipe(
      as,
      _.traverseSeqArrayWithIndex((_i, a) => _.of(a))
    )()
  })
  .on('cycle', function (event: any) {
    // tslint:disable-next-line: no-console
    console.log(String(event.target))
  })
  .on('complete', function (this: any) {
    // tslint:disable-next-line: no-console
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
