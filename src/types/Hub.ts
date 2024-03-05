export type CardImage = {
    directLink: string
    thumbnailDirectLink: string;
}

export enum HUB_STATE {
    DEMO = 'DEMO',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export enum HUB_CATEGORY {
    ASSIGNABLE = 'ASSIGNABLE',
    PORTFOLIO = 'PORTFOLIO'
}

export enum HUB_STAGE {
    PILOT = 'PILOT',
    FULLY_ONBOARDED = 'FULLY_ONBOARDED'
}

export enum SORT {
    ASC = 'asc',
    DESC = 'desc'
}



export type Sort = 'asc' | 'desc' | ''


export type Hub = {
    uuid: string;
    name: string;
    type: string;
    state: HUB_STATE;
    category: HUB_CATEGORY;
    stage: string;
    displayName: string;
    location: string;
    totalRecoveredQuantity: number;
    recoveredQuantityUnit: string;
    formattedTotalRecoveredQuantity: string;
    unassignedQuantityTotal: number;
    assignable: boolean;
    slug: string
    pageMode: string
    parentHubName: string;
    referenceQuantityUnit: string;
    cardImage: CardImage;
    cardDescription: string;

    // internal key
    parentHubBadgeClass: string
}

