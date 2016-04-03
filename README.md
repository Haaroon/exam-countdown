#Exam Countdown
A small and low-powered website that keeps track of your upcoming exams

Most recent exams are shown first

As exams are passed they are automatically crossed off with a strikeout

#Usage
Simply fork the files, and edit the www/exams.json file to include your exams

## Format required is as follows
Ensure exams are in chronological order (first exams first, last is last)
```
{
  "MODULE-COURSE-CODE": {
    "name": "MODULE-NAME", # ASCII Text
    "timestamp": "2016-05-10T10:00:00+01:00", # YYYY-MM-DDTHH:MM:SS+01:00
    "venue": "VENUE", # ASCII Text
    "googleMapsUrl": "MAPS-URL" # URL Field - Optional 
  },
  "SECOND-MODULE-COURSE-CODE": { 
    etc...
}
```
Example below
```
{
  "ecs637u": {
    "name": "Digital Media and Social Networks",
    "timestamp": "2015-04-28T14:30:00+01:00",
    "venue": "Stratford Town Hall",
    "googleMapsUrl": "https://goo.gl/maps/EcVmB"
  },
  "ecs613u": {
    "name": "Advanced Database Systems",
    "timestamp": "2015-04-29T14:30:00+01:00",
    "venue": "Stratford Town Hall",
  },
}
```
