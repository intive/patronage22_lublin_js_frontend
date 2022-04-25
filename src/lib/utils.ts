import { CONSTANTS } from "../types/constants";

export function mapEntriesSlugToPaths(entries: any[]) {
    if (!entries.length) return [];
    return entries.map((item) => ({
        params:
            { id: `${item.id}` }
    }));
}


export function getImageUrl(photos: any) {
    const mapPhotos=photos.map((photo: { url: any; })=>photo.url)[0]
    return (
        (`${CONSTANTS.URL}/`)
        +
        mapPhotos
    )
}
