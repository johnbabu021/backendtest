### this is only a demonstration
### backend


| API                  |      Are      |  Details    |
|----------------------|:-------------:|------------:|
| /api/movies          |  GET,POST     | movieroutes |
| /api/movies/:movieId |  PUT,DELTE    | movieroutes |

To start

create a .env file
add your atlas connection address
as MNGD="CONNECTION_ADDRESS"

please refer to .example.env file

```
npm install
```
```
npm start
```
https://backedndtest.herokuapp.com/api/movies/    --get,put
<br/>
https://backedndtest.herokuapp.com/api/movies/id    -put delete

require atuhorization

<br/>
see login.txt
