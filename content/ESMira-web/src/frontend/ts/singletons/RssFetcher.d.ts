export type RssItem = {
    title: string;
    date: string;
    link: string;
};
export declare const RssFetcher: {
    loadFeed(max_num_items: number): Promise<RssItem[]>;
};
