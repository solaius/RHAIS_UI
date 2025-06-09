import '@testing-library/jest-dom';

// Mock PatternFly components for testing
jest.mock('@patternfly/react-core', () => ({
    ...jest.requireActual('@patternfly/react-core'),
    // Add any specific mocks as needed
}));

// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));