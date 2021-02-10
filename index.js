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
    let inDate = record.timeInEvents.find(element => {
    return element.date === date})
    
   let outDate = record.timeOutEvents.find(element => {
    return element.date === date})

   return (outDate.hour - inDate.hour)/100
}

function wagesEarnedOnDate (record, date) {
    return record.payPerHour * hoursWorkedOnDate(record, date)
}

function allWagesFor(record){
    let dates = record.timeInEvents.map(element => element.date)
    return dates.reduce(function(total, d) {
    return total + wagesEarnedOnDate(record, d)}, 0)

    // let hours = dates.map(element => wagesEarnedOnDate(record, element))
    // let wages = hours.reduce(function(total, currentHours) {
    //     return total + currentHours})
    // return wages
}

function calculatePayroll(records){
    // let totalWages = records.map(record => {
    //     return allWagesFor(record)
    // }) 
    let payroll = records.reduce(function(total, currentRecord){
        return total + allWagesFor(currentRecord)
    }, 0) //DONT FORGET THE STARTING VALUE!!
    return payroll
}

function findEmployeeByFirstName(srcArray, firstName){
   return srcArray.find(employee => employee.firstName === firstName)
}