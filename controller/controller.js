const db = require('../db');

module.exports.video = (req, res) => {
    const { user_idx, video_url } = req.body;
    const like_count = req.body.like_count || 0;

    const query = 'INSERT INTO videos (user_idx, video_url, like_count) VALUES (?, ?, ?)';
    db.query(query, [user_idx, video_url, like_count], (err, _) => {
        if(err) {
            console.log(`DB error: ${err.stack}`);
            return res.status(500).send('server error');
        }
        res.status(201).send({ message: 'video file save success' });
    });
};
