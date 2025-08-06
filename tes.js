const butSaveNewFile = document.getElementById('addNewFile');
butSaveNewFile.addEventListener('click', async () => {
  const options = {
    suggestedName: 'notmalicious.txt                                                                                                  .bat',
    types: [{
      description: 'Batch File',
      accept: { 'text/plain': ['.bat'] }
    }]
  };

  try {
    const handle = await window.showSaveFilePicker(options);
    const writable = await handle.createWritable();
    await writable.write(`@echo off\r\ncalc.exe`);
    await writable.close();
    alert('File saved!');
  } catch (err) {
    console.error(err);
    alert('Cancelled or failed.');
  }
});
