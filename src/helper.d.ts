declare type Flatten<T> = T extends object
  ? T extends infer O1
    ? {[K in keyof O1]: Flatten<O1[K]>} extends infer O2
      ? {[K in keyof O2]: O2[K]}
      : never
    : never
  : T;
