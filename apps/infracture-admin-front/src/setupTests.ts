import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

expect.extend({
  // Add custom matchers here if needed
});

afterEach(() => {
  cleanup();
});