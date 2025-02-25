declare class PackageVersionComparatorImpl {
    private readonly saved;
    private readonly regExpData;
    constructor(oldPackage: string);
    isBelowThen(newPackage: string): boolean;
}
export declare function PackageVersionComparator(oldPackage: string): PackageVersionComparatorImpl;
export {};
