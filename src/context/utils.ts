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

/**
 * Class representing a ParentHub object.
 * ParentHub objects contain information about a hub's name, state, category, recovered quantities,
 * children hubs, card image, and other custom keys.
 */
export class ParentHub {
    // Properties of the ParentHub object
    name: string; // Name of the hub
    state: HUB_STATE; // State of the hub
    category: HUB_CATEGORY; // Category of the hub
    formattedTotalRecoveredQuantity: string; // Formatted total recovered quantity
    recoveredQuantityUnit: string; // Unit of recovered quantity
    referenceQuantityUnit: string; // Unit of reference quantity
    children: Hub[]; // Array of child hubs
    cardImage: CardImage; // Card image associated with the hub
    className: string; // CSS class name for styling purposes

    // Custom key to track selection state
    isSelected: boolean;

    /**
     * Constructs a new ParentHub object based on the provided Hub object.
     * @param arg The Hub object used to initialize the ParentHub.
     */
    constructor(arg: Hub) {
        // Initialize properties based on the provided Hub object
        this.name = arg.name;
        this.state = arg.state;
        this.category = arg.category;
        this.formattedTotalRecoveredQuantity = arg.formattedTotalRecoveredQuantity;
        this.recoveredQuantityUnit = arg.recoveredQuantityUnit;
        this.referenceQuantityUnit = arg.referenceQuantityUnit;
        this.cardImage = arg.cardImage;

        // Initialize children array
        this.children = [];

        // Initialize selection state and generate a random CSS class for styling
        this.isSelected = true;
        const random = Math.floor(Math.random() * randomColors.length);
        this.className = `border-${randomColors[random]}-400 bg-${randomColors[random]}-100 text-${randomColors[random]}-800`;
    }

    /**
     * Adds child hubs to the ParentHub object.
     * @param childHubs Array of child hubs to be added.
     */
    addChildHub(childHubs: Hub[]) {
        // Map child hubs to include parent hub badge class and add them to the children array
        this.children = [...childHubs.map(hub => { return { ...hub, parentHubBadgeClass: this.className } })];
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