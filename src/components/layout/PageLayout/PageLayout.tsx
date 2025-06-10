import { ReactNode } from 'react';
import { PageSection } from '@patternfly/react-core';

interface PageLayoutProps {
    children: ReactNode;
    title?: string;
}

export const PageLayout = ({
    children,
    title
}: PageLayoutProps) => {
    return (
        <PageSection>
            {title && <h1>{title}</h1>}
            {children}
        </PageSection>
    );
};

export default PageLayout;