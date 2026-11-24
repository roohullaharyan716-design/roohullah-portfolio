
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageFolder = path.join(__dirname, "public", "images");

async function optimizeImages() {
  const files = fs.readdirSync(imageFolder).filter((file) =>
    /\.(png|jpe?g)$/i.test(file)
  );

  for (const file of files) {
    const input = path.join(imageFolder, file);
    const output = path.join(
      imageFolder,
      `${path.parse(file).name}.webp`
    );

    await sharp(input)
      .rotate()
      .webp({ quality: 82, effort: 6 })
      .toFile(output);

    const originalSize = fs.statSync(input).size;
    const optimizedSize = fs.statSync(output).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(
      `${file}: ${(originalSize / 1024).toFixed(1)} KB → ${(optimizedSize / 1024).toFixed(1)} KB (${savings}% smaller)`
    );
  }

  console.log("\nImage optimization completed!");
}

optimizeImages().catch(console.error);
