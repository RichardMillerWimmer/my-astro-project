type slugObj = {
    name: string;
    slug: string;
}

const generateSlug = (category: string): string => {
    return category
        .toString()
        .trim()
        .toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export const generateCategorysData = (categories: string[]): slugObj[] => {
    let categoriesData = categories.map((elem) => {
        return {
            name: elem,
            slug: `${generateSlug(elem)}` 
        }
    })
    return categoriesData

}