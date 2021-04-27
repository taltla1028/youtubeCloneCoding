const express = require('express');
const router = express.Router();
// const { Video } = require("../models/User");

const { auth } = require("../middleware/auth");
const multer = require("multer");
var ffmpeg = require("fluent-ffmpeg");
// STRAGE MULTER CONFIG
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if(ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowd'), false);
        }
        cb(null,true)
    }
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Vidoe
//=================================

router.post('/uploadfiles',(req, res) => { 

    //비디오를 서버에 저장한다.
    upload(req, res, err => {
        if(err){
            return res.json({success: false, err})
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
    })

})


router.post('/thumbnail',(req, res) => { 

   // 썸내일 생성 하고 비디오 러닝타임도 가져오기
   
   ffmpeg(req.body.url)
   .on('filenames',function(filenames){
       console.log('Will generate ' + filenames.join(','))
       console.log(filenames)

       filePath = "uploads/thubnails/" + filenames[0]
   })
   .on('end', function() {
       console.log('Secreenshots taken');
       return res.json({success: true, url: filePath, fileName: filenames, fileDuration: fileDurat
    })
    .on('error', function(err){
        console.error(err);
        return res.json({success: false, err});
    })
    .screenshots({
        // will take screenshots at 20%, 40%, 60% and 80% of the video
        count: 3,
        folder: 'uploads/thumbnails',
        size: '320x240',
        // '%b' : input basename (filename w/o extension)
        filename : 'thumbnail-%b.png'
    })
   })

})

module.exports = router;