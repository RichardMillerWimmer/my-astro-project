type slugObj = {
    name: string;
    slug: string;
}

function generateSlug(category: string): string {
    return category
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateCategoriesData(categories: string[]): slugObj[] {
    console.log(categories)
    let categoriesData = categories.map((elem) => {
        return {
            name: elem,
            slug: `${generateSlug(elem)}` 
        }
    })
    return categoriesData

}