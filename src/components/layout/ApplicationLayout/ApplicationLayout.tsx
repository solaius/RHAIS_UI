import React, { useState } from 'react';
import {
    Page,
    PageSection,
    PageSidebar,
    PageSidebarBody,
    SkipToContent,
    Content
} from '@patternfly/react-core';
import { TopBar } from '../TopBar/TopBar';
import { LeftNavigation } from '../LeftNavigation/LeftNavigation';

interface ApplicationLayoutProps {
    children: React.ReactNode;
    title?: string;
    username?: string;
    onLogout?: () => void;
}

export const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({
    children,
    title,
    username = 'User',
    onLogout
}) => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleThemeToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        // Apply theme to document
        document.documentElement.classList.toggle('pf-v6-theme-dark', !isDarkTheme);
    };

    const skipToContentId = 'primary-main-container';

    const sidebar = (
        <PageSidebar>
            <PageSidebarBody>
                <LeftNavigation />
            </PageSidebarBody>
        </PageSidebar>
    );

    return (
        <>
            <SkipToContent href={`#${skipToContentId}`}>
                Skip to content
            </SkipToContent>

            <TopBar
                onNavToggle={handleNavToggle}
                isNavOpen={isNavOpen}
                isDarkTheme={isDarkTheme}
                onThemeToggle={handleThemeToggle}
                username={username}
                onLogout={onLogout}
            />

            <Page
                sidebar={isNavOpen ? sidebar : undefined}
                isManagedSidebar
                onPageResize={() => {
                    // Handle page resize if needed
                }}
            >
                {/* Main Content Area */}
                <PageSection variant="default" padding={{ default: 'padding' }}>
                    {title && (
                        <Content component="h1" className="pf-v6-u-mb-lg">
                            {title}
                        </Content>
                    )}
                </PageSection>

                <PageSection hasBodyWrapper id={skipToContentId}>
                    {children}
                </PageSection>

                {/* Footer */}
                <PageSection
                    variant="default"
                    isFilled={false}
                    padding={{ default: 'padding' }}
                >
                    <footer className="pf-v6-u-text-align-center">
                        <Content
                            component="p"
                            className="pf-v6-u-color-200 pf-v6-u-font-size-sm"
                        >
                            © 2025 Red Hat, Inc. | OpenShift AI Studio
                        </Content>
                    </footer>
                </PageSection>
            </Page>
        </>
    );
};

export default ApplicationLayout;