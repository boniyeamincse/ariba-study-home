const fs = require('fs');

const fileContent = fs.readFileSync('assets/js/lessons-content.js', 'utf-8');

// Extract the JS object string
const startIndex = fileContent.indexOf('{');
const endIndex = fileContent.lastIndexOf(';');
const objectString = fileContent.substring(startIndex, endIndex);

let lessons;
try {
    // Evaluate the object in a clean context
    lessons = eval('(' + objectString + ')');
} catch (e) {
    console.error("Failed to parse lessons-content.js", e);
    process.exit(1);
}

let markdown = `# Linux Study - Comprehensive Command Cheatsheet\n\n`;
markdown += `This document contains all the practical terminal commands and examples extracted directly from the 16 interactive Linux Study modules.\n\n`;

for (const [moduleName, topics] of Object.entries(lessons)) {
    markdown += `## ${moduleName}\n\n`;

    for (const topic of topics) {
        // Regex to extract contents between <pre> and </pre>
        const regex = /<pre>([\s\S]*?)<\/pre>/g;
        let match;
        let foundCommands = false;

        let topicMarkdown = `### ${topic.title}\n\n`;
        topicMarkdown += "```bash\n";

        while ((match = regex.exec(topic.content)) !== null) {
            foundCommands = true;
            // Decode basic HTML entities if any
            let code = match[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
            topicMarkdown += `${code.trim()}\n\n`;
        }
        topicMarkdown += "```\n\n";

        if (foundCommands) {
            markdown += topicMarkdown;
        }
    }
}

fs.writeFileSync('linux_commands_cheatsheet.md', markdown);
console.log('Successfully generated linux_commands_cheatsheet.md!');
