export default function sourceRemove(fullTitle: string) {
    return fullTitle.replace(/ - .+$/g, '');
}
