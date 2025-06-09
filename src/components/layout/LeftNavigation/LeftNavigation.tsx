import React from 'react';
import {
    Nav,
    NavList,
    NavItem,
    NavExpandable
} from '@patternfly/react-core';
import { Link, useLocation } from 'react-router-dom';

export const LeftNavigation: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const isPathActive = (basePath: string) => {
        return location.pathname.startsWith(basePath);
    };

    return (
        <Nav
            aria-label="Red Hat OpenShift AI Studio navigation"
        >
            <NavList>
                {/* Home Section */}
                <NavExpandable
                    title="Home"
                    groupId="home-group"
                    isActive={isPathActive('/') && !isPathActive('/build') && !isPathActive('/get-started') && !isPathActive('/catalog')}
                    isExpanded={true}
                >
                    <NavItem
                        itemId="dashboard"
                        isActive={isActive('/') || isActive('/dashboard')}
                        component={(props: any) => <Link {...props} to="/" />}
                    >
                        Dashboard
                    </NavItem>
                </NavExpandable>

                {/* Build Section */}
                <NavExpandable
                    title="Build"
                    groupId="build-group"
                    isActive={isPathActive('/build')}
                    isExpanded={true}
                >
                    <NavItem
                        itemId="model-playground"
                        isActive={isActive('/build/model-playground')}
                        component={(props: any) => <Link {...props} to="/build/model-playground" />}
                    >
                        Model Playground
                    </NavItem>
                    <NavItem
                        itemId="agent-builder"
                        isActive={isActive('/build/agent-builder')}
                        component={(props: any) => <Link {...props} to="/build/agent-builder" />}
                    >
                        Agent Builder
                    </NavItem>
                    <NavItem
                        itemId="my-agents"
                        isActive={isActive('/build/my-agents')}
                        component={(props: any) => <Link {...props} to="/build/my-agents" />}
                    >
                        My Agents
                    </NavItem>
                    <NavItem
                        itemId="prompt-engineering"
                        isActive={isActive('/build/prompt-engineering')}
                        component={(props: any) => <Link {...props} to="/build/prompt-engineering" />}
                    >
                        Prompt Engineering
                    </NavItem>
                </NavExpandable>

                {/* Get Started Section */}
                <NavExpandable
                    title="Get Started"
                    groupId="get-started-group"
                    isActive={isPathActive('/get-started')}
                    isExpanded={true}
                >
                    <NavItem
                        itemId="tutorials"
                        isActive={isActive('/get-started/tutorials')}
                        component={(props: any) => <Link {...props} to="/get-started/tutorials" />}
                    >
                        Tutorials
                    </NavItem>
                    <NavItem
                        itemId="kickstarts"
                        isActive={isActive('/get-started/kickstarts')}
                        component={(props: any) => <Link {...props} to="/get-started/kickstarts" />}
                    >
                        Kickstarts
                    </NavItem>
                </NavExpandable>

                {/* Catalog Section */}
                <NavExpandable
                    title="Catalog"
                    groupId="catalog-group"
                    isActive={isPathActive('/catalog')}
                    isExpanded={true}
                >
                    <NavItem
                        itemId="agents"
                        isActive={isActive('/catalog/agents')}
                        component={(props: any) => <Link {...props} to="/catalog/agents" />}
                    >
                        Agents
                    </NavItem>
                    <NavItem
                        itemId="models"
                        isActive={isActive('/catalog/models')}
                        component={(props: any) => <Link {...props} to="/catalog/models" />}
                    >
                        Models
                    </NavItem>
                    <NavItem
                        itemId="mcp-servers"
                        isActive={isActive('/catalog/mcp-servers')}
                        component={(props: any) => <Link {...props} to="/catalog/mcp-servers" />}
                    >
                        MCP Servers
                    </NavItem>
                    <NavItem
                        itemId="guardrails"
                        isActive={isActive('/catalog/guardrails')}
                        component={(props: any) => <Link {...props} to="/catalog/guardrails" />}
                    >
                        Guardrails
                    </NavItem>
                </NavExpandable>
            </NavList>
        </Nav>
    );
};

export default LeftNavigation;