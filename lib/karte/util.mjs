/**
 *
 *
 * @author: Bernhard Lukassen
 */

export const pathDown = (accesspath) => {
    let i = accesspath.indexOf('.');
    let next = accesspath;
    let rest = "";
    if (i > -1) {
        next = accesspath.substring(0, i);
        rest = accesspath.substring(i+1);
    }
    return { next, rest };
};
