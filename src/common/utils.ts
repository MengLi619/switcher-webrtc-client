export function assertExists<T>(value: T | null | undefined, messageToThrow?: string): T {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    throw new Error(messageToThrow || 'This passed value should not null or undefined');
  }
}
