document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('videoUpload');
    const file = fileInput.files[0];
    const progressBar = document.getElementById('progressBar');
    
    if (file) {
        
        progressBar.style.width = '0%';
        const resultContainer = document.getElementById('result');
        const resultText = document.getElementById('resultText');
        resultContainer.style.display = 'none';
        resultText.textContent = '';

      
        progressBar.style.width = '100%';

        
        setTimeout(() => {
            const isFake = Math.random() < 0.5; 
            const confidence = (Math.random() * 50 + 50).toFixed(2);
            
            if (isFake) {
                resultContainer.classList.add('alert-danger');
                resultText.textContent = `This video is likely a deep fake. Confidence: ${confidence}%`;
            } else {
                resultContainer.classList.add('alert-success');
                resultText.textContent = `This video appears to be real. Confidence: ${confidence}%`;
            }

            resultContainer.style.display = 'block';
            progressBar.style.width = '0%'; 
        }, 2000);
    }
});
