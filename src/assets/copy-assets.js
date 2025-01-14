/* eslint-disable no-console, no-template-curly-in-string */
const fsExt = require('fs-extra');

const staticDir = 'node_modules/@savvaslearning/cel-components/dist-stencil';
fsExt.ensureDirSync(staticDir);

const dirs = [
    {
        src: staticDir + '/dist-assets/assets',
        dest: 'src/assets',
    }
];
const copiedDirs = [];

(async () => {
    await Promise.all(
        dirs.map(async (dir) => {
            if (fsExt.existsSync(dir.src)) {
                await fsExt.copy(dir.src, dir.dest);
                copiedDirs.push({ ...dir });
            }
        }),
    );
    console.log(JSON.stringify(copiedDirs));
})();