const Habit = require('../models/Habit');

module.exports.load = function (request, response) {
    Habit.find({})
        .then(habits => {
            return response.render('home', { habit_list: habits });
        })
        .catch(err => {
            console.log("Error in fetching habits from DB", err);
            return;
        });
}

// This function helps in adding a habit in list.
module.exports.add = function (request, response) {
    request.body.record_tracker = {};
    request.body.user = "AnyUser";
    console.log(request.body);
    Habit.create(request.body)
        .then(newhabit => {
            return response.redirect("back");
        })
        .catch(err => {
            console.log("Error in creating a habit", err);
            return;
        });
}

// This function helps in deleting a habit from list.
module.exports.delete = function (request, response) {
    let id = request.query.id;
    Habit.findByIdAndDelete(id)
        .then(() => {
            return response.redirect('back');
        })
        .catch(err => {
            console.log("Error in deletion", err);
            return;
        });
}

// Finds a habit by id given in query params and renders it
module.exports.viewhabit = function (request, response) {
    let id = request.query.id;
    Habit.findById(id)
        .then(habit => {
            response.render("habit.ejs", { "habit": habit });
        })
        .catch(err => {
            console.log("Error in finding habit", err);
            return;
        });
}

// Finds a habit by id given in query params and returns it's json object
module.exports.fetchhabit = function (request, response) {
    let id = request.query.id;
    Habit.findById(id)
        .then(habit => {
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(habit));
        })
        .catch(err => {
            console.log("error in finding habit");
            return;
        });
}

// first find an element in database using id
module.exports.updateDates = async function (request, response) {
    try {
        let id = request.query.id;
        let date = request.query.date;
        let value = request.query.value;
        // console.log(date, value, id);

        //  Then add/update the date in map then finally update map
        const habit = await Habit.findById(id);
        const r_t = habit.record_tracker;
        if (date in r_t) {
            r_t[date] = value;
        }
        else {
            r_t.set(date, value);
        }
        console.log(r_t);
        await Habit.updateOne({ "_id": id }, { $set: { record_tracker: r_t } });
        return response.end('{ "status":"success"}');
    } catch (err) {
        console.log("Error in updating habit!!!!");
        return response.end('{ "status":"failed"}');
    }
};