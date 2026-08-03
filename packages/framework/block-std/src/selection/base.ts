import { BlockExpanseError, ErrorCode } from '@blockexpanse/global/exceptions';

type SelectionConstructor<T = unknown> = {
  type: string;
  group: string;
  new (...args: unknown[]): T;
};

export type BaseSelectionOptions = {
  blockId: string;
};

export abstract class BaseSelection {
  static readonly group: string;

  static readonly type: string;

  readonly blockId: string;

  get group(): string {
    return (this.constructor as SelectionConstructor).group;
  }

  get type(): BlockExpanse.SelectionType {
    return (this.constructor as SelectionConstructor)
      .type as BlockExpanse.SelectionType;
  }

  constructor({ blockId }: BaseSelectionOptions) {
    this.blockId = blockId;
  }

  static fromJSON(_: Record<string, unknown>): BaseSelection {
    throw new BlockExpanseError(
      ErrorCode.SelectionError,
      'You must override this method'
    );
  }

  abstract equals(other: BaseSelection): boolean;

  is<T extends BlockExpanse.SelectionType>(
    type: T
  ): this is BlockExpanse.SelectionInstance[T] {
    return this.type === type;
  }

  abstract toJSON(): Record<string, unknown>;
}
