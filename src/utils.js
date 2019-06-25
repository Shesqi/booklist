export const findUniq = (list, key) => {
    const obj = list.reduce((acc, cur) => ({...acc, [cur[key]]: true}), {});
    return Object.keys(obj);
};