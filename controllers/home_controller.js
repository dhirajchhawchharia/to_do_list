const db = require('../config/mongoose');
const Task = require('../models/tasks');

module.exports.home = function(req, res){
    Task.find({}, function(err, tasks_list){
        if(err){
            console.log('Error in fetching contacts');
            return;
        }

        return res.render('home',{
            tasks : tasks_list
        });
    });
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

let ids_delete = [];

module.exports.select_delete = function(req, res){
    ids_delete.push(req.query.id);
};

module.exports.delete_tasks = function(req, res){
    for(let id of ids_delete){
        Task.findByIdAndDelete(id, function(err){
            if(err){
                console.log('Error in deleting the task');
                return;
            }
        });
    }
    ids_delete = [];
    return res.redirect('back');
}

