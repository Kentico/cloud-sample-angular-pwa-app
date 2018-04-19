import { DeliveryClient, DeliveryClientConfig } from 'kentico-cloud-delivery-typescript-sdk';

export const DeliveryClientFactory = (): DeliveryClient => {
    const projectId = '66ab95de-6599-0018-f141-3c9dc08fe797';

    return new DeliveryClient(
        new DeliveryClientConfig(projectId, [])
    );
};

export const DeliveryClientProvider = {
    provide: DeliveryClient,
    useFactory: DeliveryClientFactory,
    deps: []
};
