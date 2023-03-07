// Whatever value is assigned to module.exports, is what the require function returns!
// module.exports starts off as an empty object ->   module.exports: {}

module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

module.exports.getWeekDay = function(num) {
    if (num < 0 || num > 6) {
        num = 0
    }
    return this.weekdays[num]
}

// this will turn module.exports from an empty object into:
/*
    module.exports: {
        weekdays: [...]
        getWeekDay: function
    }
*/