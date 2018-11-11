const mysql = require('mysql');

const select_all = 'select * from products';
const connection = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'',
    database:'db_products'
});
connection.connect(err => {
    if(err){
        return err;
    }
})

exports.products_get_all = (req, res) => {
    
    connection.query(select_all, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data:results
            })
        }
    });
}

