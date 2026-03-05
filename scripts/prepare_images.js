const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../originalframes');
const targetDir = path.join(__dirname, '../public/images/original');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(sourceDir)) {
    const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg')).sort();
    const totalFrames = 120;
    const skipRatio = files.length / totalFrames;

    for (let i = 0; i < totalFrames; i++) {
        const sourceIndex = Math.min(Math.floor(i * skipRatio), files.length - 1);
        const sourceFile = files[sourceIndex];
        if (sourceFile) {
            fs.copyFileSync(
                path.join(sourceDir, sourceFile),
                path.join(targetDir, `${i + 1}.webp`)
            );
        }
    }
    console.log(`Copied and rescaled ${files.length} frames down to ${totalFrames} frames for Original.`);
} else {
    console.log('originalframes directory not found. Skipping Original image preparation.');
}
