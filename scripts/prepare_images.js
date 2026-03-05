const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../mangomonsterframes');
const targetDir = path.join(__dirname, '../public/images/mango');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Ensure the other directories exist as well
const chocolateDir = path.join(__dirname, '../public/images/chocolate');
if (!fs.existsSync(chocolateDir)) fs.mkdirSync(chocolateDir, { recursive: true });

const pomegranateDir = path.join(__dirname, '../public/images/pomegranate');
if (!fs.existsSync(pomegranateDir)) fs.mkdirSync(pomegranateDir, { recursive: true });

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
    console.log(`Copied and rescaled ${files.length} frames down to ${totalFrames} frames for Mango.`);
} else {
    console.log('mangomonsterframes directory not found. Skipping mango image preparation.');
}
