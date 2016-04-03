$('document').ready(function() {
  var json = {
     "ecs640u": {
      "name": "Big Data Processing",
      "timestamp": "2016-05-10T10:00:00+01:00",
      "venue": "tbc",
    },
    "ecs634u": {
      "name": "Algorithms and Complexity",
      "timestamp": "2016-05-12T10:00:00+01:00",
      "venue": "tbc",
    },
    "ecs607u": {
      "name": "Data Mining",
      "timestamp": "2016-05-17T14:30:00+01:00",
      "venue": "tbc"
    },
    "ecs608u": {
      "name": "Distributed Systems and Security",
      "timestamp": "2016-05-23T10:00:00+01:00",
      "venue": "TBC"
    },
    "ecs637u": {
      "name": "Digital Media and Social Networks",
      "timestamp": "2016-05-31T10:00:00+01:00",
      "venue": "TBC",
    },
    "ecs639u": {
      "name": "Web Programming",
      "timestamp": "2016-06-02T10:00:00+01:00",
      "venue": "TBC"
    },

    "ecs613u": {
      "name": "Advanced Database Systems",
      "timestamp": "Unknown",
      "venue": "TBC",
    },
    "ecs612u": {
      "name": "Interaction Design",
      "timestamp": "Unknown",
      "venue": "TBC"
    },
    "ecs610u": {
      "name": "Computer Graphics",
      "timestamp": "Unknown",
      "venue": "TBC",
    },
    "ecs621u": {
      "name": "Software Risk Assessment",
      "timestamp": "Unknown",
      "venue": "TBC"
    },
    "ecs631u": {
      "name": "Computability",
      "timestamp": "Unknown",
      "venue": "TBC",
    },
    "ecs624u": {
      "name": "C++ for Image Processing",
      "timestamp": "Unknown",
      "venue": "TBC",
    },
    "ecs629u": {
      "name": "Artificial Intelligence",
      "timestamp": "Unknown",
      "venue": "TBC"
    }
  };
         
  function daysUntil(timestamp) {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    var current = new Date();
    var exam = new Date(timestamp);

    // Calculate the difference in milliseconds
    var difference = exam.getTime() - current.getTime();

    // Calculate day offset (doesn't take the month into account but fret not)
    var dayDiff = exam.getDate() - current.getDate();

    // Covert difference in milliseconds to days
    var diffInDays = difference/ONE_DAY;

    if (Math.floor(diffInDays) === dayDiff) {
      return dayDiff;
    } else if (Math.floor(diffInDays) < 0) {
      return Math.round(diffInDays);
    }

    // WRITE COMMENT
    return Math.floor(diffInDays) + 1;
  }

  function getDateString(date) {
    var days = [
        'Sunday'
      , 'Monday'
      , 'Tuesday'
      , 'Wednesday'
      , 'Thursday'
      , 'Friday'
      , 'Saturday'
    ];

    var months = [
        "January"
      , "February"
      , "March"
      , "April"
      , "May"
      , "June"
      , "July"
      , "August"
      , "September"
      , "October"
      , "November"
      , "December"
    ];

    var dayName = days[date.getDay()];
    var monthName = months[date.getMonth()];

    return dayName + ', ' + date.getDate() + ' ' + monthName + ' ' + date.getFullYear();
  }

  function getTimeString(date) {
    var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return date.getHours() + ':' + minutes + ' BST';
  }

  function appendExam(div, exam) {
    var date = new Date(exam.timestamp);
    var location = '<p>' + exam.venue + '</p>';

    if (exam.googleMapsUrl) {
      location = '<p>' + exam.venue
        + '<br/>(<a href="'
        + exam.googleMapsUrl
        + '">Google Maps</a>)</p>';
    }

    var difference;

    if (exam.timeDifference === 0) {
      difference = 'Today';
    } else if (exam.timeDifference === 1) {
      difference = 'Tomorrow';
    } else if (exam.timeDifference === -1) {
      difference = 'did it yesterday';
    } else {
      difference = exam.timeDifference < -1 ? 'did it ' + Math.abs(exam.timeDifference) + ' days ago' : 'in ' + exam.timeDifference + ' days';
    }

    div.append(
        '<div class="exam">'
      + '<h2>' + exam.name.toUpperCase() + '</h2>'
      + '<p><strong>' + difference + '</strong></p>'
      + '<p>' + getDateString(date) + '</p>'
      + '<p>' + getTimeString(date) + '</p>'
      + location
      + '</div>'
    );
  }

  var exam;
  var nextUp = true;
  var completedExams = [];

  for (var module in json) {
    exam = json[module];
    exam.timeDifference = daysUntil(exam.timestamp);
    if (exam.timeDifference < 0) {
      completedExams.unshift(exam);
    } else if (nextUp) {
      appendExam($('.next-up'), exam);
      nextUp = false;
    } else {
      appendExam($('.later'), exam);
    }
  }

  // Append completed exams to the end
  if (completedExams.length > 0) {
    $('.container').append('<div class="completed"></div>');
    for (var i = 0; i < completedExams.length; i++) {
      exam = completedExams[i];
      appendExam($('.completed'), exam);
    }
  }

  if (completedExams.length === 6) {
    $('.container').empty();
    $('body').append('<div class="gif"></div>');
    $('body').append('<div class="message"></div>');
    $('.message').append(
        '<h1>Thanks!</h1>'
      + '<p>Thanks for using the exam countdown</p>'
    );
    document.body.setAttribute('style', 'background-image: ');
  }
});
