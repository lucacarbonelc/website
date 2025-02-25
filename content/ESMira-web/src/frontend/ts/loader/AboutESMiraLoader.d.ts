export interface AboutESMiraInterface {
    structure: {
        repository_link: string;
        page_about: {
            id: string;
            dash?: {
                id: string;
                screenshots?: string;
                icon: string;
            }[];
            urls?: {
                id: string;
                href: string;
            }[];
        }[];
        page_screenshots: {
            id: string;
            images: {
                src: string;
                desc?: string;
            }[][];
        }[];
        page_instances: {
            title: string;
            description: string;
            logo: string;
            url: string;
        }[];
    };
    translations: Record<string, string>;
}
export interface ESMiraPublicationsInterface {
    years: number[];
    entries: Record<number, Publication[]>;
}
interface Publication {
    year: number;
    title: string;
    url: string;
}
export declare class AboutESMiraLoader {
    static load(): Promise<AboutESMiraInterface>;
    static loadPublications(): Promise<ESMiraPublicationsInterface>;
}
export {};
