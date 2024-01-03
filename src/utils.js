export function getAudioBuffer(file) {
  return new Promise((resolve, reject) => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const reader = new FileReader();

    reader.onload = function (e) {
      const audioData = e.target.result;

      audioContext.decodeAudioData(
        audioData,
        function (buffer) {
          resolve(buffer);
        },
        function (error) {
          reject(error);
        }
      );
    };

    reader.readAsArrayBuffer(file);
  });
}
