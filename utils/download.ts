// utils/download.ts

export const downloadCsv = (data: any[], fileName: string) => {
  const csvRows = [];

  // Extract headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  // Format rows
  data.forEach((row) => {
    const values = headers.map((header) => JSON.stringify(row[header]));
    csvRows.push(values.join(","));
  });

  // Create CSV file
  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};
