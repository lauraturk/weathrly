export default
{
response: {
version: "0.1",
termsofService: "http://www.wunderground.com/weather/api/d/terms.html",
features: {
conditions: 1,
hourly: 1,
forecast10day: 1
}
},
current_observation: {
image: {
url: "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
title: "Weather Underground",
link: "http://www.wunderground.com"
},
display_location: {
full: "San Francisco, CA",
city: "San Francisco",
state: "CA",
state_name: "California",
country: "US",
country_iso3166: "US",
zip: "94102",
magic: "1",
wmo: "99999",
latitude: "37.77999878",
longitude: "-122.41999817",
elevation: "60.0"
},
observation_location: {
full: "SOMA, San Francisco, California",
city: "SOMA, San Francisco",
state: "California",
country: "US",
country_iso3166: "US",
latitude: "37.778488",
longitude: "-122.408005",
elevation: "23 ft"
},
estimated: { },
station_id: "KCASANFR131",
observation_time: "Last Updated on April 17, 9:48 AM PDT",
observation_time_rfc822: "Mon, 17 Apr 2017 09:48:01 -0700",
observation_epoch: "1492447681",
local_time_rfc822: "Mon, 17 Apr 2017 09:48:02 -0700",
local_epoch: "1492447682",
local_tz_short: "PDT",
local_tz_long: "America/Los_Angeles",
local_tz_offset: "-0700",
weather: "Overcast",
temperature_string: "56.3 F (13.5 C)",
temp_f: 56.3,
temp_c: 13.5,
relative_humidity: "92%",
wind_string: "Calm",
wind_dir: "North",
wind_degrees: -9999,
wind_mph: 0,
wind_gust_mph: "4.0",
wind_kph: 0,
wind_gust_kph: "6.4",
pressure_mb: "1016",
pressure_in: "30.01",
pressure_trend: "-",
dewpoint_string: "54 F (12 C)",
dewpoint_f: 54,
dewpoint_c: 12,
heat_index_string: "NA",
heat_index_f: "NA",
heat_index_c: "NA",
windchill_string: "NA",
windchill_f: "NA",
windchill_c: "NA",
feelslike_string: "56.3 F (13.5 C)",
feelslike_f: "56.3",
feelslike_c: "13.5",
visibility_mi: "9.0",
visibility_km: "14.5",
solarradiation: "130",
UV: "1.3",
precip_1hr_string: "-999.00 in ( 0 mm)",
precip_1hr_in: "-999.00",
precip_1hr_metric: " 0",
precip_today_string: "0.25 in (6 mm)",
precip_today_in: "0.25",
precip_today_metric: "6",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
forecast_url: "http://www.wunderground.com/US/CA/San_Francisco.html",
history_url: "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANFR131",
ob_url: "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.778488,-122.408005",
nowcast: ""
},
forecast: {
txt_forecast: {
date: "8:13 AM PDT",
forecastday: [
{
period: 0,
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
title: "Monday",
fcttext: "Cloudy early, then off and on rain showers for the afternoon. High 62F. Winds SW at 5 to 10 mph. Chance of rain 50%.",
fcttext_metric: "Considerable cloudiness with occasional rain showers. High 17C. Winds SW at 10 to 15 km/h. Chance of rain 40%.",
pop: "50"
},
{
period: 1,
icon: "nt_chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
title: "Monday Night",
fcttext: "Cloudy with occasional rain showers. Thunder possible. Low 54F. Winds SW at 5 to 10 mph. Chance of rain 50%.",
fcttext_metric: "Cloudy with showers. Thunder possible. Low 12C. Winds SW at 10 to 15 km/h. Chance of rain 50%.",
pop: "50"
},
{
period: 2,
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
title: "Tuesday",
fcttext: "A shower or two around the area in the morning, then partly cloudy in the afternoon. Thunder possible. High 64F. Winds WSW at 10 to 15 mph. Chance of rain 50%.",
fcttext_metric: "Chance of a shower or two during the morning, followed by partly cloudy skies in the afternoon. Thunder possible. High 18C. Winds WSW at 15 to 25 km/h. Chance of rain 50%.",
pop: "50"
},
{
period: 3,
icon: "nt_clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
title: "Tuesday Night",
fcttext: "Clear skies with a few passing clouds. Low around 50F. Winds WNW at 10 to 15 mph.",
fcttext_metric: "Generally fair. Low near 10C. Winds WNW at 15 to 25 km/h.",
pop: "10"
},
{
period: 4,
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
title: "Wednesday",
fcttext: "A few clouds early, otherwise mostly sunny. High 62F. Winds WSW at 10 to 20 mph.",
fcttext_metric: "Sun and a few passing clouds. High 17C. Winds WSW at 15 to 30 km/h.",
pop: "20"
},
{
period: 5,
icon: "nt_chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
title: "Wednesday Night",
fcttext: "Showers in the evening, then partly cloudy overnight. Low 53F. Winds SW at 10 to 15 mph. Chance of rain 40%.",
fcttext_metric: "Showers in the evening, then partly cloudy overnight. Low 12C. Winds SW at 15 to 25 km/h. Chance of rain 40%.",
pop: "40"
},
{
period: 6,
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
title: "Thursday",
fcttext: "Sunny. High 64F. Winds WNW at 10 to 20 mph.",
fcttext_metric: "Mainly sunny. High 18C. Winds WNW at 15 to 30 km/h.",
pop: "10"
},
{
period: 7,
icon: "nt_clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
title: "Thursday Night",
fcttext: "Clear. Low 51F. Winds NNW at 10 to 20 mph.",
fcttext_metric: "Clear. Low 11C. NNW winds at 15 to 30 km/h, decreasing to 5 to 10 km/h.",
pop: "10"
},
{
period: 8,
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
title: "Friday",
fcttext: "Generally sunny. High 69F. N winds shifting to W at 10 to 20 mph.",
fcttext_metric: "Generally sunny. High 21C. N winds shifting to W at 15 to 30 km/h.",
pop: "0"
},
{
period: 9,
icon: "nt_clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
title: "Friday Night",
fcttext: "Mainly clear skies. Low 52F. Winds W at 10 to 15 mph.",
fcttext_metric: "Mostly clear skies. Low 11C. Winds W at 15 to 25 km/h.",
pop: "0"
},
{
period: 10,
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
title: "Saturday",
fcttext: "Intervals of clouds and sunshine. High 68F. Winds W at 10 to 20 mph.",
fcttext_metric: "Sunshine and clouds mixed. High around 20C. Winds W at 15 to 30 km/h.",
pop: "0"
},
{
period: 11,
icon: "nt_partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
title: "Saturday Night",
fcttext: "Partly cloudy skies. Low 52F. Winds WNW at 10 to 20 mph.",
fcttext_metric: "Partly cloudy skies. Low 11C. Winds WNW at 15 to 30 km/h.",
pop: "10"
},
{
period: 12,
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
title: "Sunday",
fcttext: "Sunny. High 66F. Winds WNW at 10 to 20 mph.",
fcttext_metric: "A mainly sunny sky. High 19C. Winds WNW at 15 to 30 km/h.",
pop: "10"
},
{
period: 13,
icon: "nt_clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
title: "Sunday Night",
fcttext: "A mostly clear sky. Low 53F. Winds WNW at 10 to 15 mph.",
fcttext_metric: "Clear. Low 11C. Winds WNW at 15 to 25 km/h.",
pop: "10"
},
{
period: 14,
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
title: "Monday",
fcttext: "Generally sunny. High 66F. Winds WNW at 10 to 20 mph.",
fcttext_metric: "Mostly sunny skies. High 19C. Winds WNW at 15 to 30 km/h.",
pop: "10"
},
{
period: 15,
icon: "nt_clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
title: "Monday Night",
fcttext: "Mainly clear skies. Low 53F. Winds WNW at 10 to 15 mph.",
fcttext_metric: "Mainly clear skies. Low 12C. Winds WNW at 15 to 30 km/h.",
pop: "10"
},
{
period: 16,
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
title: "Tuesday",
fcttext: "Partly cloudy. High around 65F. Winds WNW at 15 to 25 mph.",
fcttext_metric: "Intervals of clouds and sunshine. High 18C. Winds WNW at 25 to 40 km/h.",
pop: "0"
},
{
period: 17,
icon: "nt_partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
title: "Tuesday Night",
fcttext: "A few clouds. Low 52F. Winds WNW at 15 to 25 mph.",
fcttext_metric: "Partly cloudy. Low 11C. Winds WNW at 25 to 40 km/h.",
pop: "10"
},
{
period: 18,
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
title: "Wednesday",
fcttext: "Mostly sunny skies. High 67F. Winds WNW at 15 to 25 mph.",
fcttext_metric: "Mostly sunny skies. High 19C. Winds WNW at 25 to 40 km/h.",
pop: "0"
},
{
period: 19,
icon: "nt_partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
title: "Wednesday Night",
fcttext: "A few clouds from time to time. Low 52F. Winds WNW at 15 to 25 mph.",
fcttext_metric: "A few clouds. Low 11C. Winds WNW at 25 to 40 km/h.",
pop: "10"
}
]
},
simpleforecast: {
forecastday: [
{
date: {
epoch: "1492480800",
pretty: "7:00 PM PDT on April 17, 2017",
day: 17,
month: 4,
year: 2017,
yday: 106,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Mon",
weekday: "Monday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 1,
high: {
fahrenheit: "62",
celsius: "17"
},
low: {
fahrenheit: "54",
celsius: "12"
},
conditions: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
skyicon: "",
pop: 50,
qpf_allday: {
in: 0.15,
mm: 4
},
qpf_day: {
in: 0.01,
mm: 0
},
qpf_night: {
in: 0.14,
mm: 4
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 10,
kph: 16,
dir: "SW",
degrees: 232
},
avewind: {
mph: 9,
kph: 14,
dir: "SW",
degrees: 232
},
avehumidity: 76,
maxhumidity: 93,
minhumidity: 65
},
{
date: {
epoch: "1492567200",
pretty: "7:00 PM PDT on April 18, 2017",
day: 18,
month: 4,
year: 2017,
yday: 107,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Tue",
weekday: "Tuesday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 2,
high: {
fahrenheit: "64",
celsius: "18"
},
low: {
fahrenheit: "50",
celsius: "10"
},
conditions: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
skyicon: "",
pop: 50,
qpf_allday: {
in: 0.01,
mm: 0
},
qpf_day: {
in: 0.01,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 15,
kph: 24,
dir: "WSW",
degrees: 240
},
avewind: {
mph: 12,
kph: 19,
dir: "WSW",
degrees: 240
},
avehumidity: 81,
maxhumidity: 87,
minhumidity: 68
},
{
date: {
epoch: "1492653600",
pretty: "7:00 PM PDT on April 19, 2017",
day: 19,
month: 4,
year: 2017,
yday: 108,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Wed",
weekday: "Wednesday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 3,
high: {
fahrenheit: "62",
celsius: "17"
},
low: {
fahrenheit: "53",
celsius: "12"
},
conditions: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
skyicon: "",
pop: 20,
qpf_allday: {
in: 0.06,
mm: 2
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0.06,
mm: 2
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 20,
kph: 32,
dir: "WSW",
degrees: 245
},
avewind: {
mph: 13,
kph: 21,
dir: "WSW",
degrees: 245
},
avehumidity: 78,
maxhumidity: 89,
minhumidity: 62
},
{
date: {
epoch: "1492740000",
pretty: "7:00 PM PDT on April 20, 2017",
day: 20,
month: 4,
year: 2017,
yday: 109,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Thu",
weekday: "Thursday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 4,
high: {
fahrenheit: "64",
celsius: "18"
},
low: {
fahrenheit: "51",
celsius: "11"
},
conditions: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
skyicon: "",
pop: 10,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 20,
kph: 32,
dir: "WNW",
degrees: 294
},
avewind: {
mph: 16,
kph: 26,
dir: "WNW",
degrees: 294
},
avehumidity: 74,
maxhumidity: 89,
minhumidity: 56
},
{
date: {
epoch: "1492826400",
pretty: "7:00 PM PDT on April 21, 2017",
day: 21,
month: 4,
year: 2017,
yday: 110,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Fri",
weekday: "Friday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 5,
high: {
fahrenheit: "69",
celsius: "21"
},
low: {
fahrenheit: "52",
celsius: "11"
},
conditions: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
skyicon: "",
pop: 0,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 20,
kph: 32,
dir: "WNW",
degrees: 301
},
avewind: {
mph: 13,
kph: 21,
dir: "WNW",
degrees: 301
},
avehumidity: 65,
maxhumidity: 78,
minhumidity: 50
},
{
date: {
epoch: "1492912800",
pretty: "7:00 PM PDT on April 22, 2017",
day: 22,
month: 4,
year: 2017,
yday: 111,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Sat",
weekday: "Saturday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 6,
high: {
fahrenheit: "68",
celsius: "20"
},
low: {
fahrenheit: "52",
celsius: "11"
},
conditions: "Partly Cloudy",
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
skyicon: "",
pop: 0,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 20,
kph: 32,
dir: "W",
degrees: 266
},
avewind: {
mph: 14,
kph: 23,
dir: "W",
degrees: 266
},
avehumidity: 68,
maxhumidity: 83,
minhumidity: 55
},
{
date: {
epoch: "1492999200",
pretty: "7:00 PM PDT on April 23, 2017",
day: 23,
month: 4,
year: 2017,
yday: 112,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Sun",
weekday: "Sunday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 7,
high: {
fahrenheit: "66",
celsius: "19"
},
low: {
fahrenheit: "53",
celsius: "12"
},
conditions: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
skyicon: "",
pop: 10,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 20,
kph: 32,
dir: "WNW",
degrees: 296
},
avewind: {
mph: 13,
kph: 21,
dir: "WNW",
degrees: 296
},
avehumidity: 71,
maxhumidity: 84,
minhumidity: 57
},
{
date: {
epoch: "1493085600",
pretty: "7:00 PM PDT on April 24, 2017",
day: 24,
month: 4,
year: 2017,
yday: 113,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Mon",
weekday: "Monday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 8,
high: {
fahrenheit: "66",
celsius: "19"
},
low: {
fahrenheit: "53",
celsius: "12"
},
conditions: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
skyicon: "",
pop: 10,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 20,
kph: 32,
dir: "WNW",
degrees: 286
},
avewind: {
mph: 13,
kph: 21,
dir: "WNW",
degrees: 286
},
avehumidity: 71,
maxhumidity: 81,
minhumidity: 62
},
{
date: {
epoch: "1493172000",
pretty: "7:00 PM PDT on April 25, 2017",
day: 25,
month: 4,
year: 2017,
yday: 114,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Tue",
weekday: "Tuesday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 9,
high: {
fahrenheit: "65",
celsius: "18"
},
low: {
fahrenheit: "52",
celsius: "11"
},
conditions: "Partly Cloudy",
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
skyicon: "",
pop: 0,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 25,
kph: 40,
dir: "WNW",
degrees: 285
},
avewind: {
mph: 19,
kph: 31,
dir: "WNW",
degrees: 285
},
avehumidity: 71,
maxhumidity: 80,
minhumidity: 61
},
{
date: {
epoch: "1493258400",
pretty: "7:00 PM PDT on April 26, 2017",
day: 26,
month: 4,
year: 2017,
yday: 115,
hour: 19,
min: "00",
sec: 0,
isdst: "1",
monthname: "April",
monthname_short: "Apr",
weekday_short: "Wed",
weekday: "Wednesday",
ampm: "PM",
tz_short: "PDT",
tz_long: "America/Los_Angeles"
},
period: 10,
high: {
fahrenheit: "67",
celsius: "19"
},
low: {
fahrenheit: "52",
celsius: "11"
},
conditions: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
skyicon: "",
pop: 0,
qpf_allday: {
in: 0,
mm: 0
},
qpf_day: {
in: 0,
mm: 0
},
qpf_night: {
in: 0,
mm: 0
},
snow_allday: {
in: 0,
cm: 0
},
snow_day: {
in: 0,
cm: 0
},
snow_night: {
in: 0,
cm: 0
},
maxwind: {
mph: 25,
kph: 40,
dir: "WNW",
degrees: 291
},
avewind: {
mph: 18,
kph: 29,
dir: "WNW",
degrees: 291
},
avehumidity: 69,
maxhumidity: 81,
minhumidity: 54
}
]
}
},
hourly_forecast: [
{
FCTTIME: {
hour: "10",
hour_padded: "10",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492448400",
pretty: "10:00 AM PDT on April 17, 2017",
civil: "10:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "53",
metric: "12"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "100",
wspd: {
english: "5",
metric: "8"
},
wdir: {
dir: "SSW",
degrees: "201"
},
wx: "Showers",
uvi: "1",
humidity: "89",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "50",
mslp: {
english: "30.03",
metric: "1017"
}
},
{
FCTTIME: {
hour: "11",
hour_padded: "11",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492452000",
pretty: "11:00 AM PDT on April 17, 2017",
civil: "11:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "100",
wspd: {
english: "6",
metric: "10"
},
wdir: {
dir: "SSW",
degrees: "206"
},
wx: "Showers",
uvi: "1",
humidity: "83",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "42",
mslp: {
english: "30.04",
metric: "1017"
}
},
{
FCTTIME: {
hour: "12",
hour_padded: "12",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492455600",
pretty: "12:00 PM PDT on April 17, 2017",
civil: "12:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "58",
metric: "14"
},
dewpoint: {
english: "51",
metric: "11"
},
condition: "Overcast",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
fctcode: "4",
sky: "97",
wspd: {
english: "8",
metric: "13"
},
wdir: {
dir: "SW",
degrees: "220"
},
wx: "Cloudy",
uvi: "3",
humidity: "77",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "58",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "9",
mslp: {
english: "30.05",
metric: "1018"
}
},
{
FCTTIME: {
hour: "13",
hour_padded: "13",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492459200",
pretty: "1:00 PM PDT on April 17, 2017",
civil: "1:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "60",
metric: "16"
},
dewpoint: {
english: "50",
metric: "10"
},
condition: "Overcast",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
fctcode: "4",
sky: "91",
wspd: {
english: "7",
metric: "11"
},
wdir: {
dir: "SW",
degrees: "224"
},
wx: "Cloudy",
uvi: "3",
humidity: "70",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "60",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "10",
mslp: {
english: "30.05",
metric: "1018"
}
},
{
FCTTIME: {
hour: "14",
hour_padded: "14",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492462800",
pretty: "2:00 PM PDT on April 17, 2017",
civil: "2:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "60",
metric: "16"
},
dewpoint: {
english: "50",
metric: "10"
},
condition: "Overcast",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
fctcode: "4",
sky: "93",
wspd: {
english: "9",
metric: "14"
},
wdir: {
dir: "SW",
degrees: "230"
},
wx: "Cloudy",
uvi: "3",
humidity: "70",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "60",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.05",
metric: "1018"
}
},
{
FCTTIME: {
hour: "15",
hour_padded: "15",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492466400",
pretty: "3:00 PM PDT on April 17, 2017",
civil: "3:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "61",
metric: "16"
},
dewpoint: {
english: "50",
metric: "10"
},
condition: "Overcast",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
fctcode: "4",
sky: "94",
wspd: {
english: "9",
metric: "14"
},
wdir: {
dir: "SW",
degrees: "236"
},
wx: "Cloudy",
uvi: "3",
humidity: "66",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "61",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.04",
metric: "1017"
}
},
{
FCTTIME: {
hour: "16",
hour_padded: "16",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492470000",
pretty: "4:00 PM PDT on April 17, 2017",
civil: "4:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "61",
metric: "16"
},
dewpoint: {
english: "49",
metric: "9"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "95",
wspd: {
english: "9",
metric: "14"
},
wdir: {
dir: "WSW",
degrees: "244"
},
wx: "Showers",
uvi: "2",
humidity: "65",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "61",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "38",
mslp: {
english: "30.04",
metric: "1017"
}
},
{
FCTTIME: {
hour: "17",
hour_padded: "17",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492473600",
pretty: "5:00 PM PDT on April 17, 2017",
civil: "5:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "61",
metric: "16"
},
dewpoint: {
english: "50",
metric: "10"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "95",
wspd: {
english: "9",
metric: "14"
},
wdir: {
dir: "WSW",
degrees: "254"
},
wx: "Showers",
uvi: "1",
humidity: "67",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "61",
metric: "16"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "45",
mslp: {
english: "30.03",
metric: "1017"
}
},
{
FCTTIME: {
hour: "18",
hour_padded: "18",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492477200",
pretty: "6:00 PM PDT on April 17, 2017",
civil: "6:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "60",
metric: "16"
},
dewpoint: {
english: "51",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "94",
wspd: {
english: "9",
metric: "14"
},
wdir: {
dir: "WSW",
degrees: "256"
},
wx: "Showers",
uvi: "0",
humidity: "70",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "60",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "44",
mslp: {
english: "30.03",
metric: "1017"
}
},
{
FCTTIME: {
hour: "19",
hour_padded: "19",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492480800",
pretty: "7:00 PM PDT on April 17, 2017",
civil: "7:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "60",
metric: "16"
},
dewpoint: {
english: "51",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "98",
wspd: {
english: "8",
metric: "13"
},
wdir: {
dir: "WSW",
degrees: "254"
},
wx: "Showers",
uvi: "0",
humidity: "73",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "60",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "46",
mslp: {
english: "30.04",
metric: "1017"
}
},
{
FCTTIME: {
hour: "20",
hour_padded: "20",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492484400",
pretty: "8:00 PM PDT on April 17, 2017",
civil: "8:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "58",
metric: "14"
},
dewpoint: {
english: "51",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "98",
wspd: {
english: "7",
metric: "11"
},
wdir: {
dir: "WSW",
degrees: "257"
},
wx: "Showers",
uvi: "0",
humidity: "76",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "58",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "45",
mslp: {
english: "30.04",
metric: "1017"
}
},
{
FCTTIME: {
hour: "21",
hour_padded: "21",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492488000",
pretty: "9:00 PM PDT on April 17, 2017",
civil: "9:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "58",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "96",
wspd: {
english: "7",
metric: "11"
},
wdir: {
dir: "WSW",
degrees: "245"
},
wx: "Showers",
uvi: "0",
humidity: "79",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "58",
metric: "14"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "49",
mslp: {
english: "30.06",
metric: "1018"
}
},
{
FCTTIME: {
hour: "22",
hour_padded: "22",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492491600",
pretty: "10:00 PM PDT on April 17, 2017",
civil: "10:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "93",
wspd: {
english: "6",
metric: "10"
},
wdir: {
dir: "SSW",
degrees: "214"
},
wx: "Showers",
uvi: "0",
humidity: "83",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "47",
mslp: {
english: "30.07",
metric: "1018"
}
},
{
FCTTIME: {
hour: "23",
hour_padded: "23",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "17",
mday_padded: "17",
yday: "106",
isdst: "1",
epoch: "1492495200",
pretty: "11:00 PM PDT on April 17, 2017",
civil: "11:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Monday",
weekday_name_night: "Monday Night",
weekday_name_abbrev: "Mon",
weekday_name_unlang: "Monday",
weekday_name_night_unlang: "Monday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "92",
wspd: {
english: "5",
metric: "8"
},
wdir: {
dir: "SSW",
degrees: "198"
},
wx: "Showers",
uvi: "0",
humidity: "84",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "42",
mslp: {
english: "30.07",
metric: "1018"
}
},
{
FCTTIME: {
hour: "0",
hour_padded: "00",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492498800",
pretty: "12:00 AM PDT on April 18, 2017",
civil: "12:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "89",
wspd: {
english: "5",
metric: "8"
},
wdir: {
dir: "SSW",
degrees: "208"
},
wx: "Showers",
uvi: "0",
humidity: "85",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "37",
mslp: {
english: "30.07",
metric: "1018"
}
},
{
FCTTIME: {
hour: "1",
hour_padded: "01",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492502400",
pretty: "1:00 AM PDT on April 18, 2017",
civil: "1:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "87",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "SSW",
degrees: "210"
},
wx: "Showers",
uvi: "0",
humidity: "84",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "37",
mslp: {
english: "30.07",
metric: "1018"
}
},
{
FCTTIME: {
hour: "2",
hour_padded: "02",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492506000",
pretty: "2:00 AM PDT on April 18, 2017",
civil: "2:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "86",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "SW",
degrees: "215"
},
wx: "Showers",
uvi: "0",
humidity: "84",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.02",
metric: "1"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "48",
mslp: {
english: "30.07",
metric: "1018"
}
},
{
FCTTIME: {
hour: "3",
hour_padded: "03",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492509600",
pretty: "3:00 AM PDT on April 18, 2017",
civil: "3:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "84",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "SSW",
degrees: "203"
},
wx: "Showers",
uvi: "0",
humidity: "85",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.02",
metric: "1"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "51",
mslp: {
english: "30.06",
metric: "1018"
}
},
{
FCTTIME: {
hour: "4",
hour_padded: "04",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492513200",
pretty: "4:00 AM PDT on April 18, 2017",
civil: "4:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "84",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "S",
degrees: "190"
},
wx: "Showers",
uvi: "0",
humidity: "87",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.02",
metric: "1"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "50",
mslp: {
english: "30.06",
metric: "1018"
}
},
{
FCTTIME: {
hour: "5",
hour_padded: "05",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492516800",
pretty: "5:00 AM PDT on April 18, 2017",
civil: "5:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "85",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "S",
degrees: "187"
},
wx: "Showers",
uvi: "0",
humidity: "87",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "49",
mslp: {
english: "30.06",
metric: "1018"
}
},
{
FCTTIME: {
hour: "6",
hour_padded: "06",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492520400",
pretty: "6:00 AM PDT on April 18, 2017",
civil: "6:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
fctcode: "12",
sky: "86",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "S",
degrees: "184"
},
wx: "Showers",
uvi: "0",
humidity: "87",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.01",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "42",
mslp: {
english: "30.06",
metric: "1018"
}
},
{
FCTTIME: {
hour: "7",
hour_padded: "07",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492524000",
pretty: "7:00 AM PDT on April 18, 2017",
civil: "7:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "89",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "S",
degrees: "178"
},
wx: "Showers",
uvi: "0",
humidity: "87",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "46",
mslp: {
english: "30.07",
metric: "1018"
}
},
{
FCTTIME: {
hour: "8",
hour_padded: "08",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492527600",
pretty: "8:00 AM PDT on April 18, 2017",
civil: "8:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "90",
wspd: {
english: "3",
metric: "5"
},
wdir: {
dir: "S",
degrees: "188"
},
wx: "Few Showers",
uvi: "0",
humidity: "87",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "31",
mslp: {
english: "30.09",
metric: "1019"
}
},
{
FCTTIME: {
hour: "9",
hour_padded: "09",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492531200",
pretty: "9:00 AM PDT on April 18, 2017",
civil: "9:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Chance of Rain",
icon: "chancerain",
icon_url: "http://icons.wxug.com/i/c/k/chancerain.gif",
fctcode: "12",
sky: "89",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "SSW",
degrees: "196"
},
wx: "Few Showers",
uvi: "1",
humidity: "85",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "31",
mslp: {
english: "30.1",
metric: "1019"
}
},
{
FCTTIME: {
hour: "10",
hour_padded: "10",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492534800",
pretty: "10:00 AM PDT on April 18, 2017",
civil: "10:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Overcast",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
fctcode: "4",
sky: "92",
wspd: {
english: "4",
metric: "6"
},
wdir: {
dir: "SW",
degrees: "226"
},
wx: "Cloudy",
uvi: "1",
humidity: "83",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.11",
metric: "1020"
}
},
{
FCTTIME: {
hour: "11",
hour_padded: "11",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492538400",
pretty: "11:00 AM PDT on April 18, 2017",
civil: "11:00 AM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "AM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "58",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Overcast",
icon: "cloudy",
icon_url: "http://icons.wxug.com/i/c/k/cloudy.gif",
fctcode: "4",
sky: "86",
wspd: {
english: "5",
metric: "8"
},
wdir: {
dir: "WSW",
degrees: "244"
},
wx: "Cloudy",
uvi: "3",
humidity: "80",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "58",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.12",
metric: "1020"
}
},
{
FCTTIME: {
hour: "12",
hour_padded: "12",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492542000",
pretty: "12:00 PM PDT on April 18, 2017",
civil: "12:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "59",
metric: "15"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Mostly Cloudy",
icon: "mostlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
fctcode: "3",
sky: "78",
wspd: {
english: "6",
metric: "10"
},
wdir: {
dir: "WSW",
degrees: "246"
},
wx: "Mostly Cloudy",
uvi: "4",
humidity: "77",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "59",
metric: "15"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.13",
metric: "1020"
}
},
{
FCTTIME: {
hour: "13",
hour_padded: "13",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492545600",
pretty: "1:00 PM PDT on April 18, 2017",
civil: "1:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "60",
metric: "16"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Mostly Cloudy",
icon: "mostlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
fctcode: "3",
sky: "67",
wspd: {
english: "6",
metric: "10"
},
wdir: {
dir: "WSW",
degrees: "256"
},
wx: "Mostly Cloudy",
uvi: "6",
humidity: "74",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "60",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.13",
metric: "1020"
}
},
{
FCTTIME: {
hour: "14",
hour_padded: "14",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492549200",
pretty: "2:00 PM PDT on April 18, 2017",
civil: "2:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "62",
metric: "17"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Partly Cloudy",
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
fctcode: "2",
sky: "59",
wspd: {
english: "7",
metric: "11"
},
wdir: {
dir: "WSW",
degrees: "254"
},
wx: "Partly Cloudy",
uvi: "7",
humidity: "71",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "62",
metric: "17"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.12",
metric: "1020"
}
},
{
FCTTIME: {
hour: "15",
hour_padded: "15",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492552800",
pretty: "3:00 PM PDT on April 18, 2017",
civil: "3:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "63",
metric: "17"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Partly Cloudy",
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
fctcode: "2",
sky: "52",
wspd: {
english: "8",
metric: "13"
},
wdir: {
dir: "W",
degrees: "261"
},
wx: "Partly Cloudy",
uvi: "5",
humidity: "68",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "63",
metric: "17"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.11",
metric: "1020"
}
},
{
FCTTIME: {
hour: "16",
hour_padded: "16",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492556400",
pretty: "4:00 PM PDT on April 18, 2017",
civil: "4:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "64",
metric: "18"
},
dewpoint: {
english: "53",
metric: "12"
},
condition: "Partly Cloudy",
icon: "partlycloudy",
icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
fctcode: "2",
sky: "45",
wspd: {
english: "10",
metric: "16"
},
wdir: {
dir: "W",
degrees: "267"
},
wx: "Partly Cloudy",
uvi: "4",
humidity: "68",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "64",
metric: "18"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "15",
mslp: {
english: "30.11",
metric: "1020"
}
},
{
FCTTIME: {
hour: "17",
hour_padded: "17",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492560000",
pretty: "5:00 PM PDT on April 18, 2017",
civil: "5:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "62",
metric: "17"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
fctcode: "1",
sky: "20",
wspd: {
english: "12",
metric: "19"
},
wdir: {
dir: "W",
degrees: "267"
},
wx: "Mostly Sunny",
uvi: "2",
humidity: "70",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "62",
metric: "17"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "5",
mslp: {
english: "30.11",
metric: "1020"
}
},
{
FCTTIME: {
hour: "18",
hour_padded: "18",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492563600",
pretty: "6:00 PM PDT on April 18, 2017",
civil: "6:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "60",
metric: "16"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
fctcode: "1",
sky: "13",
wspd: {
english: "12",
metric: "19"
},
wdir: {
dir: "W",
degrees: "269"
},
wx: "Sunny",
uvi: "1",
humidity: "75",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "60",
metric: "16"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "5",
mslp: {
english: "30.11",
metric: "1020"
}
},
{
FCTTIME: {
hour: "19",
hour_padded: "19",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492567200",
pretty: "7:00 PM PDT on April 18, 2017",
civil: "7:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "58",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/clear.gif",
fctcode: "1",
sky: "20",
wspd: {
english: "12",
metric: "19"
},
wdir: {
dir: "W",
degrees: "270"
},
wx: "Mostly Sunny",
uvi: "0",
humidity: "81",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "58",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "10",
mslp: {
english: "30.12",
metric: "1020"
}
},
{
FCTTIME: {
hour: "20",
hour_padded: "20",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492570800",
pretty: "8:00 PM PDT on April 18, 2017",
civil: "8:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "57",
metric: "14"
},
dewpoint: {
english: "52",
metric: "11"
},
condition: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
fctcode: "1",
sky: "17",
wspd: {
english: "10",
metric: "16"
},
wdir: {
dir: "W",
degrees: "274"
},
wx: "Clear",
uvi: "0",
humidity: "84",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "57",
metric: "14"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "9",
mslp: {
english: "30.13",
metric: "1020"
}
},
{
FCTTIME: {
hour: "21",
hour_padded: "21",
min: "00",
min_unpadded: "0",
sec: "0",
year: "2017",
mon: "4",
mon_padded: "04",
mon_abbrev: "Apr",
mday: "18",
mday_padded: "18",
yday: "107",
isdst: "1",
epoch: "1492574400",
pretty: "9:00 PM PDT on April 18, 2017",
civil: "9:00 PM",
month_name: "April",
month_name_abbrev: "Apr",
weekday_name: "Tuesday",
weekday_name_night: "Tuesday Night",
weekday_name_abbrev: "Tue",
weekday_name_unlang: "Tuesday",
weekday_name_night_unlang: "Tuesday Night",
ampm: "PM",
tz: "",
age: "",
UTCDATE: ""
},
temp: {
english: "56",
metric: "13"
},
dewpoint: {
english: "51",
metric: "11"
},
condition: "Clear",
icon: "clear",
icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif",
fctcode: "1",
sky: "22",
wspd: {
english: "9",
metric: "14"
},
wdir: {
dir: "W",
degrees: "278"
},
wx: "Mostly Clear",
uvi: "0",
humidity: "85",
windchill: {
english: "-9999",
metric: "-9999"
},
heatindex: {
english: "-9999",
metric: "-9999"
},
feelslike: {
english: "56",
metric: "13"
},
qpf: {
english: "0.0",
metric: "0"
},
snow: {
english: "0.0",
metric: "0"
},
pop: "12",
mslp: {
english: "30.15",
metric: "1021"
}
}
]
}
