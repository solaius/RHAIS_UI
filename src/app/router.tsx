import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load feature routes
const ModelCatalogPage = lazy(() => import('../features/model-catalog/index.route'));
const AgentBuilderPage = lazy(() => import('../features/agent-builder/index.route'));
const PromptManagementPage = lazy(() => import('../features/prompt-management/index.route'));
const EvaluationsPage = lazy(() => import('../features/evaluations/index.route'));
const GuardrailsPage = lazy(() => import('../features/guardrails/index.route'));
const SettingsPage = lazy(() => import('../features/settings/index.route'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ModelCatalogPage />
            </Suspense>
        ),
    },
    {
        path: '/models',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ModelCatalogPage />
            </Suspense>
        ),
    },
    {
        path: '/agent-builder',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <AgentBuilderPage />
            </Suspense>
        ),
    },
    {
        path: '/prompts',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <PromptManagementPage />
            </Suspense>
        ),
    },
    {
        path: '/evaluations',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <EvaluationsPage />
            </Suspense>
        ),
    },
    {
        path: '/guardrails',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <GuardrailsPage />
            </Suspense>
        ),
    },
    {
        path: '/settings',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <SettingsPage />
            </Suspense>
        ),
    },
]);