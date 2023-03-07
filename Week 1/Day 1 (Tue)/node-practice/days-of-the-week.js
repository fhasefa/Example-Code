// Whatever value is assigned to module.exports, is what the require function returns!

module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

module.exports.getWeekDay = function(num) {
    if (num < 0 || num > 6) {
        num = 0
    }
    return this.weekdays[num]
}