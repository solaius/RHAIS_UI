import React, { useState, useRef, useEffect } from 'react';
import {
    Masthead,
    MastheadToggle,
    MastheadMain,
    MastheadBrand,
    MastheadContent,
    Brand,
    Button,
    Menu,
    MenuContent,
    MenuList,
    MenuItem,
    MenuToggle,
    Popper,
    Toolbar,
    ToolbarContent,
    ToolbarGroup,
    ToolbarItem,
    Icon
} from '@patternfly/react-core';
import {
    BarsIcon,
    BellIcon,
    ThIcon,
    QuestionCircleIcon,
    CogIcon,
    MoonIcon,
    SunIcon,
    UserIcon
} from '@patternfly/react-icons';
import { Link } from 'react-router-dom';

interface TopBarProps {
    onNavToggle: () => void;
    isNavOpen: boolean;
    isDarkTheme?: boolean;
    onThemeToggle?: () => void;
    username?: string;
    onLogout?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
    onNavToggle,
    isNavOpen,
    isDarkTheme = false,
    onThemeToggle,
    username = 'User',
    onLogout
}) => {
    // View switcher state
    const [currentView, setCurrentView] = useState('Generative');
    const [isViewSwitcherOpen, setIsViewSwitcherOpen] = useState(false);
    const viewSwitcherRef = useRef<HTMLButtonElement>(null);
    const viewMenuRef = useRef<HTMLDivElement>(null);

    // Notification menu state
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notificationRef = useRef<HTMLButtonElement>(null);
    const notificationMenuRef = useRef<HTMLDivElement>(null);

    // Waffle menu state
    const [isWaffleOpen, setIsWaffleOpen] = useState(false);
    const waffleRef = useRef<HTMLButtonElement>(null);
    const waffleMenuRef = useRef<HTMLDivElement>(null);

    // Help menu state
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const helpRef = useRef<HTMLButtonElement>(null);
    const helpMenuRef = useRef<HTMLDivElement>(null);

    // User menu state
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLButtonElement>(null);
    const userMenuMenuRef = useRef<HTMLDivElement>(null);

    // Handle click outside menus
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // View switcher
            if (isViewSwitcherOpen &&
                viewMenuRef.current &&
                !viewMenuRef.current.contains(event.target as Node) &&
                viewSwitcherRef.current &&
                !viewSwitcherRef.current.contains(event.target as Node)) {
                setIsViewSwitcherOpen(false);
            }

            // Notification menu
            if (isNotificationOpen &&
                notificationMenuRef.current &&
                !notificationMenuRef.current.contains(event.target as Node) &&
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node)) {
                setIsNotificationOpen(false);
            }

            // Waffle menu
            if (isWaffleOpen &&
                waffleMenuRef.current &&
                !waffleMenuRef.current.contains(event.target as Node) &&
                waffleRef.current &&
                !waffleRef.current.contains(event.target as Node)) {
                setIsWaffleOpen(false);
            }

            // Help menu
            if (isHelpOpen &&
                helpMenuRef.current &&
                !helpMenuRef.current.contains(event.target as Node) &&
                helpRef.current &&
                !helpRef.current.contains(event.target as Node)) {
                setIsHelpOpen(false);
            }

            // User menu
            if (isUserMenuOpen &&
                userMenuMenuRef.current &&
                !userMenuMenuRef.current.contains(event.target as Node) &&
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isViewSwitcherOpen, isNotificationOpen, isWaffleOpen, isHelpOpen, isUserMenuOpen]);

    // Logo source based on theme
    const logoSrc = isDarkTheme ? '/images/rhoai-logo-dark-theme.svg' : '/images/rhoai-logo-light-theme.svg';

    // View switcher menu
    const viewSwitcherMenu = (
        <Menu
            ref={viewMenuRef}
            onSelect={(_, itemId) => {
                setCurrentView(itemId as string);
                setIsViewSwitcherOpen(false);
            }}
            style={{ minWidth: '150px' }}
        >
            <MenuContent>
                <MenuList>
                    <MenuItem itemId="Generative">Generative</MenuItem>
                    <MenuItem itemId="Predictive">Predictive</MenuItem>
                    <MenuItem itemId="Administration">Administration</MenuItem>
                </MenuList>
            </MenuContent>
        </Menu>
    );

    // Notification menu
    const notificationMenu = (
        <Menu ref={notificationMenuRef}>
            <MenuContent>
                <MenuList>
                    <MenuItem>No new notifications</MenuItem>
                </MenuList>
            </MenuContent>
        </Menu>
    );

    // Waffle menu (application launcher)
    const waffleMenu = (
        <Menu ref={waffleMenuRef}>
            <MenuContent>
                <MenuList>
                    <MenuItem description="Red Hat Applications">
                        <strong>Red Hat Applications</strong>
                    </MenuItem>
                    <MenuItem
                        component={(props: any) => <Link {...props} to="/console" />}
                        icon={<Icon><CogIcon /></Icon>}
                    >
                        OpenShift Console
                    </MenuItem>
                    <MenuItem
                        component={(props: any) => <Link {...props} to="/cluster-manager" />}
                        icon={<Icon><CogIcon /></Icon>}
                    >
                        OpenShift Cluster Manager
                    </MenuItem>
                    <MenuItem
                        component={(props: any) => <Link {...props} to="/dev-spaces" />}
                        icon={<Icon><CogIcon /></Icon>}
                    >
                        Red Hat OpenShift Dev Spaces
                    </MenuItem>
                    <MenuItem description="OpenShift GitOps">
                        <strong>OpenShift GitOps</strong>
                    </MenuItem>
                    <MenuItem
                        component={(props: any) => <Link {...props} to="/argo-cd" />}
                        icon={<Icon><CogIcon /></Icon>}
                    >
                        Cluster Argo CD
                    </MenuItem>
                </MenuList>
            </MenuContent>
        </Menu>
    );

    // Help menu
    const helpMenu = (
        <Menu ref={helpMenuRef}>
            <MenuContent>
                <MenuList>
                    <MenuItem
                        component={(props: any) => <a {...props} href="/docs" target="_blank" rel="noopener noreferrer" />}
                    >
                        Documentation
                    </MenuItem>
                    <MenuItem
                        component={(props: any) => <a {...props} href="/support" target="_blank" rel="noopener noreferrer" />}
                    >
                        Support
                    </MenuItem>
                    <MenuItem
                        component={(props: any) => <a {...props} href="/about" target="_blank" rel="noopener noreferrer" />}
                    >
                        About
                    </MenuItem>
                </MenuList>
            </MenuContent>
        </Menu>
    );

    // User menu
    const userMenu = (
        <Menu ref={userMenuMenuRef}>
            <MenuContent>
                <MenuList>
                    <MenuItem onClick={onLogout}>
                        Logout
                    </MenuItem>
                </MenuList>
            </MenuContent>
        </Menu>
    );

    return (
        <Masthead>
            <MastheadMain style={{ flexGrow: 0 }}>
                <MastheadToggle>
                    <Button
                        variant="plain"
                        onClick={onNavToggle}
                        aria-label="Global navigation"
                        aria-expanded={isNavOpen}
                    >
                        <Icon>
                            <BarsIcon />
                        </Icon>
                    </Button>
                </MastheadToggle>
                <MastheadBrand>
                    <Link to="/">
                        <Brand
                            src={logoSrc}
                            alt="Red Hat OpenShift AI"
                            heights={{ default: '32px' }}
                        />
                    </Link>
                </MastheadBrand>
                <Toolbar isFullHeight>
                    <ToolbarContent >
                        {/* View Switcher - moved here from MastheadMain */}
                        <ToolbarGroup>
                            <ToolbarItem>
                                <Popper
                                    trigger={
                                        <MenuToggle
                                            ref={viewSwitcherRef}
                                            onClick={() => setIsViewSwitcherOpen(!isViewSwitcherOpen)}
                                            isExpanded={isViewSwitcherOpen}
                                            variant="plainText"
                                            style={{ minWidth: '100px', fontSize: '14px' }}
                                        >
                                            {currentView}
                                        </MenuToggle>
                                    }
                                    popper={viewSwitcherMenu}
                                    isVisible={isViewSwitcherOpen}
                                    triggerRef={viewSwitcherRef}
                                    popperRef={viewMenuRef}
                                />
                            </ToolbarItem>
                        </ToolbarGroup>
                    </ToolbarContent>
                </Toolbar>
            </MastheadMain>
            <MastheadContent style={{ marginLeft: 'auto' }}>
                <Toolbar isFullHeight>
                    <ToolbarContent >

                        <ToolbarGroup align={{ default: 'alignEnd' }}>
                            {/* Notifications */}
                            <ToolbarItem>
                                <Popper
                                    trigger={
                                        <Button
                                            ref={notificationRef}
                                            variant="plain"
                                            aria-label="Notifications"
                                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                                        >
                                            <Icon>
                                                <BellIcon />
                                            </Icon>
                                        </Button>
                                    }
                                    popper={notificationMenu}
                                    isVisible={isNotificationOpen}
                                    triggerRef={notificationRef}
                                    popperRef={notificationMenuRef}
                                />
                            </ToolbarItem>

                            {/* Waffle Menu */}
                            <ToolbarItem>
                                <Popper
                                    trigger={
                                        <Button
                                            ref={waffleRef}
                                            variant="plain"
                                            aria-label="Application launcher"
                                            onClick={() => setIsWaffleOpen(!isWaffleOpen)}
                                        >
                                            <Icon>
                                                <ThIcon />
                                            </Icon>
                                        </Button>
                                    }
                                    popper={waffleMenu}
                                    isVisible={isWaffleOpen}
                                    triggerRef={waffleRef}
                                    popperRef={waffleMenuRef}
                                />
                            </ToolbarItem>

                            {/* Help Menu */}
                            <ToolbarItem>
                                <Popper
                                    trigger={
                                        <Button
                                            ref={helpRef}
                                            variant="plain"
                                            aria-label="Help"
                                            onClick={() => setIsHelpOpen(!isHelpOpen)}
                                        >
                                            <Icon>
                                                <QuestionCircleIcon />
                                            </Icon>
                                        </Button>
                                    }
                                    popper={helpMenu}
                                    isVisible={isHelpOpen}
                                    triggerRef={helpRef}
                                    popperRef={helpMenuRef}
                                />
                            </ToolbarItem>

                            {/* Theme Toggle */}
                            <ToolbarItem>
                                <Button
                                    variant="plain"
                                    aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
                                    onClick={onThemeToggle}
                                >
                                    <Icon>
                                        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
                                    </Icon>
                                </Button>
                            </ToolbarItem>

                            {/* User Menu */}
                            <ToolbarItem>
                                <Popper
                                    trigger={
                                        <MenuToggle
                                            ref={userMenuRef}
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                            isExpanded={isUserMenuOpen}
                                            icon={<Icon><UserIcon /></Icon>}
                                        >
                                            {username}
                                        </MenuToggle>
                                    }
                                    popper={userMenu}
                                    isVisible={isUserMenuOpen}
                                    triggerRef={userMenuRef}
                                    popperRef={userMenuMenuRef}
                                />
                            </ToolbarItem>
                        </ToolbarGroup>
                    </ToolbarContent>
                </Toolbar>
            </MastheadContent>
        </Masthead>
    );
};

export default TopBar;