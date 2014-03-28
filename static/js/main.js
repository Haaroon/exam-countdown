var json = {
  "ecs524u": {
    "name": "Internet Protocols and Applications",
    "timestamp": "2014-04-28T10:00:00+00:00"
  },
  "ecs505u": {
    "name": "Software Engineering",
    "timestamp": "2014-05-06T14:30:00+00:00"
  },
  "ecs518u": {
    "name": "Operating Systems",
    "timestamp": "2014-05-08T14:30:00+00:00"
  },
  "ecs522u": {
    "name": "Graphical User Interfaces",
    "timestamp": "2014-05-15T14:30:00+00:00"
  },
  "ecs519u": {
    "name": "Database Systems",
    "timestamp": "2014-05-16T10:00:00+00:00"
  },
  "ecs509u": {
    "name": "Probability and Matrices",
    "timestamp": "2014-05-19T14:30:00+00:00"
  },
  "ecs510u": {
    "name": "Algorithms and Data Structures in an Object-Oriented Framework",
    "timestamp": "2014-05-23T10:00:00+00:00"
  }
};

function days_between(date) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = new Date().getTime();
    var date2_ms = new Date(date).getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY);

}

function appendExam(div, heading, size, timestamp) {
  div.append(
      '<div class="exam">'
    + '<h' + size + '>' + heading + '</h' + size + '>'
    + '<p>in ' + timestamp + ' Days</p>'
    + '</div>'
  );
}
for (var module in json) {
  var exam = json[module];
  if (exam.timestamp === '2014-04-28T10:00:00+00:00') {
    appendExam($('.next-up'), exam.name, 1, days_between(exam.timestamp));
  } else {
    appendExam($('.later'), exam.name, 3, days_between(exam.timestamp));
  }
}
