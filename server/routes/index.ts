export default defineEventHandler((e) => {
    return { isUnenv: "__unenv__" in e.node.res };
});
