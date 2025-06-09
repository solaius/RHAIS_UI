import { ComponentType } from 'react';
import { EmptyState, EmptyStateIcon, EmptyStateBody, Title } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';

interface EmptyStateComponentProps {
    title?: string;
    message?: string;
    icon?: ComponentType;
}

export const EmptyStateComponent = ({
    title = 'No results found',
    message = 'Try adjusting your search criteria',
    icon: Icon = SearchIcon,
}: EmptyStateComponentProps) => {
    return (
        <EmptyState>
            <EmptyStateIcon icon={Icon} />
            <Title headingLevel="h4" size="lg">
                {title}
            </Title>
            <EmptyStateBody>{message}</EmptyStateBody>
        </EmptyState>
    );
};

export default EmptyStateComponent;