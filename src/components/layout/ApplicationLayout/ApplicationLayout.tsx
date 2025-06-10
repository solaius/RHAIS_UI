import React, { useState } from 'react';
import {
    Page,
    PageSection,
    PageSidebar,
    PageSidebarBody,
    SkipToContent,
    Content,
    Title
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
        <PageSidebar isSidebarOpen={isNavOpen}>
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
                sidebar={sidebar}
                isContentFilled
            >
                {/* Main Content Area */}

                <PageSection hasBodyWrapper isFilled id={skipToContentId}>
                    {children}
                </PageSection>

                {/* Footer */}
                <PageSection
                    variant="default"
                    isCenterAligned
                    isWidthLimited
                    hasBodyWrapper={false}
                    isFilled={false}
                    padding={{ default: 'padding' }}
                >
                    <footer>
                        © 2025 Red Hat, Inc. | OpenShift AI Studio
                    </footer>
                </PageSection>
            </Page>
        </>
    );
};

export default ApplicationLayout;