import React from 'react';
import {
    Nav,
    NavList,
    NavExpandable
} from '@patternfly/react-core';
import { Link, useLocation } from 'react-router-dom';

export const LeftNavigation: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const isPathActive = (basePath: string) => location.pathname.startsWith(basePath);

    return (
        <Nav aria-label="Red Hat OpenShift AI Studio navigation">
            {/* Debug: Plain Link test for navigation */}
            <NavList>
                {/* Home Section */}
                <NavExpandable
                    title="Home"
                    groupId="home-group"
                    isActive={isPathActive('/') && !isPathActive('/build') && !isPathActive('/get-started') && !isPathActive('/catalog')}
                    isExpanded={true}
                >
                    <li className="pf-v6-c-nav__item">
                        <Link to="/" className={isActive('/') || isActive('/dashboard') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Dashboard
                        </Link>
                    </li>
                </NavExpandable>

                {/* Build Section */}
                <NavExpandable
                    title="Build"
                    groupId="build-group"
                    isActive={isPathActive('/build')}
                    isExpanded={true}
                >
                    <li className="pf-v6-c-nav__item">
                        <Link to="/build/model-playground" className={isActive('/build/model-playground') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Model Playground
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/build/agent-builder" className={isActive('/build/agent-builder') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Agent Builder
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/build/my-agents" className={isActive('/build/my-agents') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            My Agents
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/build/prompt-engineering" className={isActive('/build/prompt-engineering') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Prompt Engineering
                        </Link>
                    </li>
                </NavExpandable>

                {/* Get Started Section */}
                <NavExpandable
                    title="Get Started"
                    groupId="get-started-group"
                    isActive={isPathActive('/get-started')}
                    isExpanded={true}
                >
                    <li className="pf-v6-c-nav__item">
                        <Link to="/get-started/tutorials" className={isActive('/get-started/tutorials') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Tutorials
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/get-started/kickstarts" className={isActive('/get-started/kickstarts') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Kickstarts
                        </Link>
                    </li>
                </NavExpandable>

                {/* Catalog Section */}
                <NavExpandable
                    title="Catalog"
                    groupId="catalog-group"
                    isActive={isPathActive('/catalog')}
                    isExpanded={true}
                >
                    <li className="pf-v6-c-nav__item">
                        <Link to="/catalog/agents" className={isActive('/catalog/agents') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Agents
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/catalog/models" className={isActive('/catalog/models') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Models
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/catalog/mcp-servers" className={isActive('/catalog/mcp-servers') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            MCP Servers
                        </Link>
                    </li>
                    <li className="pf-v6-c-nav__item">
                        <Link to="/catalog/guardrails" className={isActive('/catalog/guardrails') ? 'pf-v6-c-nav__link pf-m-current' : 'pf-v6-c-nav__link'}>
                            Guardrails
                        </Link>
                    </li>
                </NavExpandable>
            </NavList>
        </Nav>
    );
};

export default LeftNavigation;