"use client";

const DownloadButton = () => {
  const downloadPDF = async () => {
    const res = await fetch("/api/generate-pdf");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={downloadPDF}
      className="button-fade-in rounded-full border border-black transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    >
      Download as PDF
    </button>
  );
};

export default DownloadButton;
