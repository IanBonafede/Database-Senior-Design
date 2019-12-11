# CS179 Care Package Crew - A Million Thanks

How to start our project: (Each command needs its own terminal)
From the million-thanks-front-end folder, run `npm start`
From million-thanks-back-end, run `python ocrserver.py`
From million-thanks-back-end, run `node receivefile.js`
From million-thanks-database/postgresql, run `./rundb.sh`
From million-thanks-database, run `app.js`

Upload a single .jps or multiple .jpgs using the "Upload File" button.
Check the million-thanks-back-end/uploadimage folder to confirm that your file(s) have been uploaded.
Click "Get Address" to start the OCR process.
Good confidence, valid addresses will automatically be uploaded to the database. 
Any pictures that had low confidence or an invalid address will show up on the upload page. You can change any of the fields and press confirm to send the rows to the database.

##OCR
This is the main page for Google Cloud Vision OCR which we used for this project.
https://cloud.google.com/vision/docs/handwriting

If not previously installed, run `pip install --upgrade google-cloud-vision`.