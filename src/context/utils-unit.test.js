import { preprocessAndGenerateParentChildHubLists, flexibleSort, ParentHub } from './utils';

describe('preprocessAndGenerateParentChildHubLists', () => {
    test('should generate parent and child hubs correctly', () => {
        const hubs = [
            { name: 'Parent 1', state: 'state1', category: 'category1', formattedTotalRecoveredQuantity: '10', recoveredQuantityUnit: 'unit1', referenceQuantityUnit: 'unit1', cardImage: 'image1', parentHubName: '' },
            { name: 'Child 1', state: 'state1', category: 'category1', formattedTotalRecoveredQuantity: '5', recoveredQuantityUnit: 'unit1', referenceQuantityUnit: 'unit1', cardImage: 'image1', parentHubName: 'Parent 1' },
        ];

        const parentChildHubs = preprocessAndGenerateParentChildHubLists(hubs);

        expect(parentChildHubs.length).toBe(1);
        expect(parentChildHubs[0]).toBeInstanceOf(ParentHub);
        expect(parentChildHubs[0].children.length).toBe(1);
    });
});

describe('flexibleSort', () => {
    test('should sort objects correctly', () => {
        const objects = [
            { name: 'A', value: 2 },
            { name: 'C', value: 1 },
            { name: 'B', value: 3 },
        ];

        const sortedAsc = objects.slice().sort(flexibleSort('name', 'asc'));
        expect(sortedAsc[0].name).toBe('A');
        expect(sortedAsc[1].name).toBe('B');
        expect(sortedAsc[2].name).toBe('C');

        const sortedDesc = objects.slice().sort(flexibleSort('value', 'desc'));
        expect(sortedDesc[0].value).toBe(3);
        expect(sortedDesc[1].value).toBe(2);
        expect(sortedDesc[2].value).toBe(1);
    });
});
