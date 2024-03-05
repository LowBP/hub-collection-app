import { CardImage, HUB_CATEGORY, HUB_STATE, Hub } from "../types/Hub";

const randomColors = ['red', 'green', 'orange']


export const preprocessAndGenerateParentChildHubLists = (hubs: Hub[]) => {
    const parentChildHubs: ParentHub[] = []
    const parentHubs = hubs.filter(hub => !hub.parentHubName);

    parentHubs.forEach(parentHub => {
        const parentHubClass = new ParentHub(parentHub)
        parentHubClass.addChildHub(hubs.filter(hub => hub.parentHubName === parentHub.name))

        parentChildHubs.push(parentHubClass)
    });

    return parentChildHubs;
}

export class ParentHub {
    name: string;
    state: HUB_STATE;
    category: HUB_CATEGORY;
    formattedTotalRecoveredQuantity: string;
    recoveredQuantityUnit: string;
    referenceQuantityUnit: string;
    children: Hub[];
    cardImage: CardImage;
    className: string;


    // custom keys for handling other actions or states
    isSelected: boolean;

    constructor(arg: Hub) {

        this.name = arg.name;
        this.state = arg.state;
        this.category = arg.category;
        this.formattedTotalRecoveredQuantity = arg.formattedTotalRecoveredQuantity;
        this.recoveredQuantityUnit = arg.recoveredQuantityUnit;
        this.referenceQuantityUnit = arg.referenceQuantityUnit
        this.cardImage = arg.cardImage

        this.children = [];

        this.isSelected = true;
        const random = Math.floor(Math.random() * randomColors.length);
        this.className = `border-${randomColors[random]}-400 bg-${randomColors[random]}-100 text-${randomColors[random]}-800`

    }

    addChildHub(childHubs: Hub[]) {
        this.children = [...childHubs.map(hub => { return { ...hub, parentHubBadgeClass: this.className } })]
    }
}

// Generic Sorting function that handles both strings and numbers
export const flexibleSort = <T>(property: keyof T, order: 'asc' | 'desc') => {
    return (a: T, b: T) => {
        let comparison = 0;

        // Convert string and number values to a common type for comparison
        const valueA = typeof a[property] === 'string' ? (a[property] as string).toLowerCase() : a[property];
        const valueB = typeof b[property] === 'string' ? (b[property] as string).toLowerCase() : b[property];

        // Compare the values
        if (valueA > valueB) {
            comparison = 1;
        } else if (valueA < valueB) {
            comparison = -1;
        }

        // Adjust comparison for descending order
        if (order === 'desc') {
            comparison *= -1;
        }

        return comparison;
    };
};