import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageLayout } from './PageLayout';

describe('PageLayout', () => {
    it('renders children', () => {
        render(
            <PageLayout>
                <div>Test content</div>
            </PageLayout>
        );

        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders title when provided', () => {
        render(
            <PageLayout title="Test Title">
                <div>Content</div>
            </PageLayout>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });
});