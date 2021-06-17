const db = require('../config/mongoose');
const Task = require('../models/tasks');

module.exports.home = function(req, res){
    // return res.end('<h1>I Am Working!!</h1>')
    return res.render('home', {});
}

module.exports.add_to_tasks = function(req, res){
    console.log(req.body.due_date);
    Task.create({
        description : req.body.description,
        category : req.body.category,
        due_date: req.body.due_date
    }, function(error, newTask){
        if(error){
            console.log('Error in adding a task');
            return;
        }
        console.log('*********', newTask);
        return res.redirect('back');
    });
};


