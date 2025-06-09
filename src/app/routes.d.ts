// Typed route IDs for <Link to>
export type RouteId =
    | '/'
    | '/models'
    | '/models/:id'
    | '/agent-builder'
    | '/prompts'
    | '/evaluations'
    | '/guardrails'
    | '/settings';

export interface RouteParams {
    '/models/:id': { id: string };
}