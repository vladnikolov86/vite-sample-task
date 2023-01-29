import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import 'vitest-fetch-mock';

declare global {
  namespace jest {
    type Matchers<R = void, T = {}> = TestingLibraryMatchers<
      typeof expect.stringContaining,
      R
    >;
  }
}