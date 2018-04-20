Package.describe({
  name: "kb0304:pdfjs",
  summary: "Wrapper for serving pdfjs (client only)",
  version: "2.0.1",
  git: "https://github.com/kb0304/meteor-pdfjs",
});

Package.on_use(function (api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.add_files(['build/pdf.js'], 'client');
  api.add_files(['build/pdf.worker.js'], 'client', {isAsset: true});
  api.export('pdfjsLib'); 
});
