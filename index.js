// Your code here

function createEmployeeRecord(employeeArray){
    const [firstName, familyName, title, payPerHour] = employeeArray
    const employee = {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeArrays){
   return employeeArrays.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(record, timeStamp){
    const [date, hour] = timeStamp.split(" ")
   record.timeInEvents.push({type: "TimeIn", hour: parseInt(hour, 10), date})
   return record
}

function createTimeOutEvent(record, timeStamp){
    const [date, hour] = timeStamp.split(" ")
   record.timeOutEvents.push({type: "TimeOut", hour: parseInt(hour, 10), date})
   return record
}

function hoursWorkedOnDate(record, date){
    let inTime, outTime
    record.timeInEvents.map(element => {
        if (element.date === date){
        return inTime = element.hour}})
    record.timeOutEvents.map(element => {
        if (element.date === date){
        return outTime =  element.hour}})
    let timeWorked = (outTime - inTime)/100
    return timeWorked
}

function wagesEarnedOnDate (record, date) {
    return record.payPerHour * hoursWorkedOnDate(record, date)
}

function allWagesFor(record){
    let dates = record.timeInEvents.map(element => element.date)
    let hours = dates.map(element => wagesEarnedOnDate(record, element))
    let wages = hours.reduce(function(total, currentHours) {
        return total + currentHours})
    return wages
}

function calculatePayroll(records){
    let totalWages = records.map(record => {
        return allWagesFor(record)
    }) //returns array of wages per record
    let payroll = totalWages.reduce(function(total, currentRecord){
        return total + currentRecord
    })
    return payroll
}

function findEmployeeByFirstName(srcArray, firstName){
   return srcArray.find(employee => employee.firstName === firstName)
}