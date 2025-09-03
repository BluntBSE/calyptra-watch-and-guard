#!/bin/bash

# PDF Management Script for CWG Archive
echo "📄 CWG Archive PDF Manager"
echo "=========================="

PDF_DIR="static/pdfs"
BUILD_PDF_DIR="build/client/pdfs"

# Create directories if they don't exist
mkdir -p "$PDF_DIR"
mkdir -p "$BUILD_PDF_DIR" 2>/dev/null || true

echo ""
echo "Current PDFs in archive:"
echo "------------------------"
if [ -d "$PDF_DIR" ]; then
    ls -la "$PDF_DIR"/*.pdf 2>/dev/null || echo "No PDF files found"
fi

echo ""
echo "Expected filenames:"
echo "- case-report-1971-001.pdf"
echo "- evidence-log-1971-summer.pdf" 
echo "- interview-transcripts-batch-3.pdf"
echo "- site-photos-restricted.pdf"
echo "- final-report-1971-classified.pdf"

echo ""
echo "To add PDFs:"
echo "1. Copy your PDF files to: $PDF_DIR/"
echo "2. Rename them to match expected filenames above"
echo "3. Or update the filenames in: src/routes/archive/+page.svelte"
echo ""
echo "For production deployment:"
echo "scp your-file.pdf user@server:/var/www/calyptra/build/client/pdfs/"
