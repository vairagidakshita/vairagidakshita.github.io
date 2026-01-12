document.getElementById("resumeBtn").addEventListener("click", () => {
  const resumePath = "Dakshita_Vairagi_CV.pdf";

  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "Dakshita_Vairagi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
