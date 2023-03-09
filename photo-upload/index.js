const upload = multer({ 
    storage : multer.diskStorage({
      destination: (req, file, cb) => {
        const fileType = req.params.type;
  
        const path = './uploads' + fileType;
        fs.mkdirSync(path)
        cb(null, path);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    })
   });
  
  
  app.post("/upload", upload.single("photo"), (req, res) => {
    console.log(req.body);
    res.status(200).send();
    // const file = req.file;
    // const { originalname, size, path } = file;
    // const filename = originalname;
    // const filesize = size;
    // const filepath = path;
  
    // const sql = "INSERT INTO contact_db (filename, filesize, filepath) VALUES (?, ?, ?)";
    // db.query(sql, [filename, filesize, filepath], (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     res.status(500).send("Error saving photo to database");
    //   } else {
    //     res.send("Photo uploaded successfully");
    //   }
    // });
  });