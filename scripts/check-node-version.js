#!/usr/bin/env node

const major = Number(process.versions.node.split('.')[0]);

if (Number.isNaN(major)) {
  console.error('Unable to determine Node.js major version.');
  process.exit(1);
}

if (major < 24) {
  console.error(
    `Node.js ${process.versions.node} is not supported. Please use Node.js 24.x or newer.`
  );
  process.exit(1);
}
