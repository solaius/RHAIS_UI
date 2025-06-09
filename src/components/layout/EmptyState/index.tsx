import { ComponentType } from 'react';
import { EmptyState, EmptyStateBody, Icon } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';

interface EmptyStateComponentProps {
    title?: string;
    message?: string;
    icon?: ComponentType;
}

export const EmptyStateComponent = ({
    title = 'No results found',
    message = 'Try adjusting your search criteria',
    icon: IconComponent = SearchIcon,
}: EmptyStateComponentProps) => {
    return (
        <EmptyState>
            <Icon size="xl">
                <IconComponent />
            </Icon>
            <h4 style={{ marginTop: 'var(--pf-v6-global--spacer--md)' }}>
                {title}
            </h4>
            <EmptyStateBody>{message}</EmptyStateBody>
        </EmptyState>
    );
};

export default EmptyStateComponent;