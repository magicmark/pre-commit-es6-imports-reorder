#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const execSync = require('child_process').execSync;

function reorderImports (file) {
    const before = fs.readFileSync(file, 'utf8');

    const importSort = path.join(__dirname, '../../node_modules/.bin/import-sort');
    execSync(`${importSort} ${file} ${file}`);

    const after = fs.readFileSync(file, 'utf8');

    return (before.trim() !== after.trim());
}

function main (files) {
    files = files || process.argv.slice(2);
    let exitCode = 0;

    files.forEach(file => {
        if (reorderImports(file)) {
            console.log(`Reordered imports in ${file}`);

            exitCode = 1;
        }
    });

    return exitCode;
}

if (require.main === module) {
    process.exit(main());
}

module.exports = main;
