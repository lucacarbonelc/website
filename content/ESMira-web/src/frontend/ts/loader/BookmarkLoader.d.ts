import { ObservableStructure } from "../observable/ObservableStructure";
export declare class Bookmark extends ObservableStructure {
    url: import("../observable/BaseObservable").BaseObservable<string>;
    alias: import("../observable/BaseObservable").BaseObservable<string>;
}
export declare class BookmarkLoader {
    private bookmarks?;
    init(): Promise<BookmarkLoader>;
    private getBookmarkIndex;
    isBookmarkListEmpty(): boolean;
    hasBookmark(url: string): boolean;
    getBookmarkList(): Bookmark[];
    deleteBookmark(url: string): Promise<void>;
    setBookmark(url: string, alias: string): Promise<void>;
}
