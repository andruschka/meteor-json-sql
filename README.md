# json-sql for Meteor
Library for mapping mongo-style query objects to SQL queries.

## install
```
meteor install andruschka:json-sql
```
## usage (server side only)
```javascript
var currentUser = Meteor.user()
var sql = jsonSql.build({type: 'insert', table: 'users', values: currentUser})
...
```

Official Page [here](https://www.npmjs.com/package/json-sql)