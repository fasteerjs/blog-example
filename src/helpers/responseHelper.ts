interface Succces<TData extends any = any> {
  success: true;
  data?: TData;
}

interface BaseError {
  kind: string;
  message: string;
}

interface Error<TError extends BaseError = BaseError> {
  success: false;
  error: TError;
}

const success = <TData extends any = any>(data?: TData): Succces<TData> => ({
  success: true,
  data,
});

const error = <TError extends BaseError = BaseError>(
  error: TError
): Error<TError> => ({ success: false, error });

export { success, error, Succces, BaseError, Error };
