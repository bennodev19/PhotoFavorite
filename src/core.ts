import {createState} from "@agile-ts/core";

const COUNTER = createState(0);

const increment = () => {
    COUNTER.set(v => v + 1);
}

const decrement = () => {
    if(COUNTER.value >= 0)
      COUNTER.set(v => v - 1);
}

const reset = () => {
    COUNTER.set(0);
}

