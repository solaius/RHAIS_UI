import { ReactNode } from 'react';
import { Page, PageSection, PageSidebar } from '@patternfly/react-core';

interface PageLayoutProps {
    children: ReactNode;
    sidebar?: ReactNode;
    title?: string;
}

export const PageLayout = ({
    children,
    sidebar,
    title
}: PageLayoutProps) => {
    return (
        <Page
            sidebar={sidebar && <PageSidebar>{sidebar}</PageSidebar>}
        >
            <PageSection>
                {title && <h1>{title}</h1>}
                {children}
            </PageSection>
        </Page>
    );
};

export default PageLayout;