import React, { ComponentType } from 'react';

import ResolvableComponent from './ResolvableComponent';

export default function toResolvableComponent<TProps, TIdentifier>(
    Component: ComponentType<TProps>,
    resolveIds: TIdentifier[],
): ResolvableComponent<TProps, TIdentifier> {
    return Object.assign((props: TProps) => <Component {...props} />, { resolveIds });
}
