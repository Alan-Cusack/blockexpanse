// type A = {};
// type B = { prop?: string };
// type C = { prop: string };
// type TestA = MakeOptionalIfEmpty<A>;  // void | {}
// type TestB = MakeOptionalIfEmpty<B>;  // void | { prop?: string }
// type TestC = MakeOptionalIfEmpty<C>;  // { prop: string }
import type { cmdSymbol } from './consts.js';

export type IfAllKeysOptional<T, Yes, No> =
  Partial<T> extends T ? (T extends Partial<T> ? Yes : No) : No;
type MakeOptionalIfEmpty<T> = IfAllKeysOptional<T, void | T, T>;

export interface InitCommandCtx {
  std: BlockExpanse.Std;
}

export type CommandKeyToData<K extends BlockExpanse.CommandDataName> = Pick<
  BlockExpanse.CommandContext,
  K
>;
export type Command<
  In extends BlockExpanse.CommandDataName = never,
  Out extends BlockExpanse.CommandDataName = never,
  InData extends object = {},
> = (
  ctx: CommandKeyToData<In> & InitCommandCtx & InData,
  next: (ctx?: CommandKeyToData<Out>) => void
) => void;
type Omit1<A, B> = [keyof Omit<A, keyof B>] extends [never]
  ? void
  : Omit<A, keyof B>;
export type InDataOfCommand<C> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends Command<infer K, any, infer R> ? CommandKeyToData<K> & R : never;
type OutDataOfCommand<C> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  C extends Command<any, infer K, any> ? CommandKeyToData<K> : never;

type CommonMethods<In extends object = {}> = {
  inline: <InlineOut extends BlockExpanse.CommandDataName = never>(
    command: Command<Extract<keyof In, BlockExpanse.CommandDataName>, InlineOut>
  ) => Chain<In & CommandKeyToData<InlineOut>>;
  try: <InlineOut extends BlockExpanse.CommandDataName = never>(
    fn: (chain: Chain<In>) => Chain<In & CommandKeyToData<InlineOut>>[]
  ) => Chain<In & CommandKeyToData<InlineOut>>;
  tryAll: <InlineOut extends BlockExpanse.CommandDataName = never>(
    fn: (chain: Chain<In>) => Chain<In & CommandKeyToData<InlineOut>>[]
  ) => Chain<In & CommandKeyToData<InlineOut>>;
  run(): [
    result: boolean,
    ctx: CommandKeyToData<Extract<keyof In, BlockExpanse.CommandDataName>>,
  ];
  with<T extends Partial<BlockExpanse.CommandContext>>(value: T): Chain<In & T>;
};

type Cmds = {
  [cmdSymbol]: Command[];
};

export type Chain<In extends object = {}> = CommonMethods<In> & {
  [K in keyof BlockExpanse.Commands]: (
    data: MakeOptionalIfEmpty<
      Omit1<InDataOfCommand<BlockExpanse.Commands[K]>, In>
    >
  ) => Chain<In & OutDataOfCommand<BlockExpanse.Commands[K]>>;
} & Cmds;

export type ExecCommandResult<K extends keyof BlockExpanse.Commands> =
  OutDataOfCommand<BlockExpanse.Commands[K]>;

declare global {
  namespace BlockExpanse {
    interface CommandContext extends InitCommandCtx {}

    interface Commands {}

    type CommandName = keyof Commands;
    type CommandDataName = keyof CommandContext;

    type CommandChain<In extends object = {}> = Chain<In & InitCommandCtx>;
  }
}
