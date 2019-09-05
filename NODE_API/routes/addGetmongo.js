var request = require("request");
module.exports = function (app) {
    function create_a_user(req, res) {
        if (req.body.url.length > 0) {
                req.body.url.forEach(function (key, obj) {
                    var user = imageSchema();
                    user.url = key;
                    user.uploadedOn = new Date();
                    user.save();
                });
                res.send({ status: 0 });
        } else {
            res.send({ status: 1 });
        }

    }
    function get_a_user(req, res) {
        imageSchema.find({}, function (err, task) {
            if (err)
                res.send({ status: 1 });
            res.json({ data: task, status: 0 });
        });
    }

    function delete_a_image(req, res) {
        if (req.body.recordID) {
            imageSchema.remove({ _id: req.body.recordID }, function (err, task) {
                if (err)
                    res.send({ status: 1 });
                res.json(task);
            });
        } else {
            res.send({ status: 1 });
        }

    }
    function extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) obj[key] = src[key];
        }
        return obj;
    }
    app.route('/randomuser')
        .post(create_a_user)
        .get(get_a_user);
    app.route('/deleteimage')
        .post(delete_a_image);
}