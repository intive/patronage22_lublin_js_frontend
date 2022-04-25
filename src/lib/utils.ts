
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
        'http://proxy-patronageapi.bsolutions.usermd.net/' +
        mapPhotos
        //  &&
        // onError={(e)=>{e.target.onerror = null;
        //      e.target.src="image_path_here"}}
    )
}
