import { CONSTANTS } from "../constants";


export function mapEntriesSlugToPaths(entries: any[]) {
    if (!entries.length) return [];
    return entries.map((item) => ({
        params:
            { id: `${item.id}` }
    }));
}


export function getImageUrl(photos: string | any[]) {
    return (
        'http://proxy-patronageapi.bsolutions.usermd.net/' +
        photos.map((photo: { url: any; }) => photo.url)[0]
    )
}
