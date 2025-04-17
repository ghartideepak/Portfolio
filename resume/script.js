// Sample function to handle user registration
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Save user registration info (for now, just simulate it)
    alert(`Registered as: ${username}`);
  });
  
  // Generate tailored resume based on job description
  document.getElementById('generateResume').addEventListener('click', function() {
    const jobDesc = document.getElementById('jobDesc').value;
    
    // Simple logic to extract requirements and tailor resume (you can improve this)
    const tailoredResume = `Tailored Resume for: \n${jobDesc}`;
  
    // Display the tailored resume
    document.getElementById('resumeOutput').textContent = tailoredResume;
  
    // Enable download buttons
    document.getElementById('downloadWord').style.display = 'block';
    document.getElementById('downloadPDF').style.display = 'block';
  });
  
  // Function for downloading resume as Word or PDF
  document.getElementById('downloadWord').addEventListener('click', function() {
    const resumeText = document.getElementById('resumeOutput').textContent;
    const blob = new Blob([resumeText], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailored_resume.docx';
    a.click();
  });
  
  document.getElementById('downloadPDF').addEventListener('click', function() {
    const resumeText = document.getElementById('resumeOutput').textContent;
    const blob = new Blob([resumeText], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailored_resume.pdf';
    a.click();
  });
  