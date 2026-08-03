import { BlockExpanseError, ErrorCode } from '@blockexpanse/global/exceptions';

export class MigrationError extends BlockExpanseError {
  constructor(description: string) {
    super(
      ErrorCode.MigrationError,
      `Migration failed. Please report to https://github.com/Alan-Cusack/blockexpanse/issues
          ${description}`
    );
  }
}

export class SchemaValidateError extends BlockExpanseError {
  constructor(flavour: string, message: string) {
    super(
      ErrorCode.SchemaValidateError,
      `Invalid schema for ${flavour}: ${message}`
    );
  }
}
