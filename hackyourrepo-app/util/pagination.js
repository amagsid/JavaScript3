let state = {
    querrySet: contributorData,
    page: 1,
    rows: 5,
}

export function paginate (querrySet, page, rows) {
    let trimStart = (page - 1) * rows
    let trimEnd = trimStart + rows
    let trimmedData = querrySet.slice(trimStart, trimEnd)
    let pages = Math.ceil(querySet.length / rows )

    return {
        querrySet: trimmedData,
        pages: pages,
    }


}