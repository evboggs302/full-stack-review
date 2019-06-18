const bcrypt = require("bcrypt");
const saltRounds = 12;

module.exports = {
  login: (req, res, next) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.check_if_user_exists(username).then(found => {
      if (!found[0]) {
        res.status(200).send("Incorrect username/password");
      } else {
        bcrypt.compare(password, found[0].password).then(matched => {
          if (matched) {
            const { username, email, user_id } = found[0];
            req.session.user = { username, email, user_id };
            res.status(200).send(req.session.user);
          } else {
            res.status(500).send("Incorrect username/password");
          }
        });
      }
    });
  },
  register: (req, res, next) => {
    const { username, email, password } = req.body;
    const db = req.app.get("db");
    db.check_if_user_exists(username).then(found => {
      if (found.length) {
        res.status(500).send("Email already exists!");
      } else {
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.hash(password, salt).then(hashedPassword => {
            db.register([username, email, hashedPassword]).then(createdUser => {
              (req.session.user = createdUser[0]),
                res.status(200).send(req.session.user);
            });
          });
        });
      }
    });
  },
  userInfo: (req, res, next) => {
    res.status(200).send(req.session.user);
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send("logged out mofo");
  }
};
