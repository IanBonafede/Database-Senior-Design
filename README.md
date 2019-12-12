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

Any pictures that had low confidence or an invalid address will show up on the upload page. You can change any of the fields and press 
confirm to send the rows to the database.

### OCR

This is the main page for Google Cloud Vision OCR which we used for this project.

https://cloud.google.com/vision/docs/handwriting

You need to create a Google Cloud Platform account and update the the credentials in million-thanks-back-end/ocr/license.json.

If not previously installed, run `pip install --upgrade google-cloud-vision`.

### SERVER

We use Python for OCR, so we use Python Flask package to build server. run 'pip install flask' to install flask for your computer.

We use JavaScript Axios package for send image from front-end to back-end. Also, We use JavaScript Express for our upload image server and database server. You need to install Axios and Express for this upload image feature.

Go to million-thanks-back-end folder. Run 'npm install express' to install express.

Go to million-thanks-front-end folder. Run 'npm install axios' to install axios.
