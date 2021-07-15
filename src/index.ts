import '@effect-ts/core/Tracing/Enable';
import { pipe } from "@effect-ts/core/Function";
import * as R from "@effect-ts/node/Runtime";
import * as T from "@effect-ts/core/Effect";

pipe(
    'yay',
  T.succeed,
  T.tap((a) => T.succeedWith(() => console.log(a))),
  T.andThen(T.fail('Oh noes')),
  T.result,
  T.chain(T.done),
  R.runMain
);
