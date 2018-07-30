import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery';

import { PointOfInterest } from '../models/point_of_interest';
import { Event } from '../models/event';
import { Tour } from '../models/tour';
import { Quest } from '../models/quest';

export const DeliveryClientFactory = (): DeliveryClient => {
    const projectId = '66ab95de-6599-0018-f141-3c9dc08fe797';
    const typeResolvers: TypeResolver[] = [
        new TypeResolver('point_of_interest', () => new PointOfInterest()),
        new TypeResolver('event', () => new Event()),
        new TypeResolver('tour', () => new Tour()),
        new TypeResolver('quest', () => new Quest()),
    ];
    return new DeliveryClient({
        projectId: projectId,
        typeResolvers: typeResolvers
    });
};

export const DeliveryClientProvider = {
    provide: DeliveryClient,
    useFactory: DeliveryClientFactory,
    deps: []
};
