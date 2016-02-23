[![Github All Releases](https://img.shields.io/github/downloads/92bondstreet/92bondstreet/total.svg)](https://github.com/92bondstreet/rdd-cdd-tdd)[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/92bondstreet/rdd-cdd-tdd)

# cli-weather

#INTRODUCTION

Weather is a library verry use full for weather lovers. If you whant to do statistics
on weather on a specific area this library is perfect. It use forecast web site to get the datas. Let's focus on the content.
But first 

#Install

Open your console and type

```bash
$ cd rdd-cdd-tdd\weather
$ npm install
```
here you are ready to go

##Usage

to perform a basique launch take your ip and past it in index.js in
 ``` var ip='';```
and then try
```bash
$ node index.js #output the wether for your location
```

# Option
##Units
you can change the units with this command

```node index --config ``` and then you can add one of the option above
- ```us: ```The default, as outlined above.
- ```si:``` Returns results in SI units.
- ```ca:``` Identical to si, except that windSpeed is in kilometers per hour.
- ```uk2:``` Identical to si, except that windSpeed is in miles per hour, and nearestStormDistance and visibility are in miles, as in the US. (This option is provided because adoption of SI in the UK has been inconsistent.)
- ```auto:``` Selects the relevant units automatically, based on geographic location.

##Area

- You can choose your area with ```node index --address ```
- Or you can use more acurate technique with Longitude and Latitude ```node index --lat --long```

## Help

Of course we have the help function ```node index --help ```

## Save

To save your search result you can type ```node index --save ```.
So now you have a preset loaded.

##Test

comming soon